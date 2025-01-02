"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { userQueryData } from "@/hooks/userQueryData";
import { getNotifications, getWorkSpaces } from "@/actions/workspace";
import { NotificationProps, WorkspaceProps } from "@/app/type/index.type";
import Modal from "../modal";
import { PlusCircle } from "lucide-react";
import WorkspaceSearch from "../search-workspaces";
import { MENU_ITEMS } from "..";
import SidebarItem from "./sidebar-items";
import WorkspacePlaceholder from "./workspace-placeholder";
import GlobalCard from "../global-card";
import PaymentButton from "../payment-button";
import ButtonLanguage from "../languages";

type Props = { actionWorkspaceId: string };

const Sidebar = ({ actionWorkspaceId }: Props) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");
  const menuItems = MENU_ITEMS(actionWorkspaceId);
  const pathName = usePathname();

  // Lấy ngôn ngữ từ localStorage khi load component
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "vi";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []); // Chỉ chạy 1 lần khi mount component

  const router = useRouter();

  // Fetch notifications và workspaces từ API
  const { data: notifications } = userQueryData(
    ["user-notifications"],
    getNotifications
  );
  const { data, isFetched } = userQueryData(["user-workspaces"], getWorkSpaces);

  const { data: workspace } = data as WorkspaceProps;
  const { data: count } = notifications as NotificationProps;

  const onValueChange = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  const currentWorkspace = workspace.workspace.find(
    (s) => s.id === actionWorkspaceId
  );

  const onChangeActiveWorkspace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  return (
    <div className="bg-slate-900 flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      {/* Header với logo và nút thay đổi ngôn ngữ */}
      <div className="bg-slate-800 p-4 gap-4 justify-between items-center mb-4 absolute top-0 left-0 right-0 flex">
        <div className="flex items-center gap-2">
          <Image
            src={"/opal-logo.svg"}
            alt=""
            className=""
            width={40}
            height={40}
          />
          <p className="text-2xl lg:block hidden">Opal</p>
        </div>
        <ButtonLanguage setLanguage={setLanguage} />{" "}
      </div>

      {/* Dropdown chọn workspace */}
      <Select
        defaultValue={actionWorkspaceId}
        onValueChange={onChangeActiveWorkspace}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace" />
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel className="text-white">
              {language === "vi" ? "Không gian làm việc" : "Workspaces"}
            </SelectLabel>
            <Separator />
            {workspace.workspace.map((workspace) => (
              <SelectItem value={workspace.id} key={workspace.id}>
                {workspace.name}
              </SelectItem>
            ))}
            {workspace.members.length > 0 &&
              workspace.members.map(
                (workspace) =>
                  workspace.WorkSpace && (
                    <SelectItem
                      value={workspace.WorkSpace.id}
                      key={workspace.WorkSpace.id}
                    >
                      {workspace.WorkSpace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Modal để mời thành viên */}
      {currentWorkspace?.type === "PUBLIC" &&
        workspace.subscription?.plan === "PRO" && (
          <Modal
            trigger={
              <span className="text-sm gap-4 cursor-pointer flex items-center justify-center border-t-neutral-800 hover:bg-neutral-800/60 w-full rounded-sm p-[10px]">
                <PlusCircle
                  size={15}
                  className="text-white fill-neutral-800 animate-bounce"
                />
                <span className="text-neutral-400 font-semibold text-md">
                  {language === "vi"
                    ? "Thêm vào không gian"
                    : "Invite to workspace"}
                </span>
              </span>
            }
            title={
              language === "vi"
                ? "Thêm vào không gian làm việc"
                : "Invite to workspace"
            }
            description={
              language === "vi"
                ? "Thêm người khác vào không gian làm việc của bạn"
                : "Invite other user to your workspace"
            }
          >
            <WorkspaceSearch workspaceId={actionWorkspaceId} />
          </Modal>
        )}

      {/* Danh mục menu */}
      <p className="w-full text-white font-bold mt-4">
        {language === "vi" ? "Danh mục" : "Menu"}
      </p>
      <nav className="w-full">
        <ul>
          {menuItems.map((item) => (
            <SidebarItem
              href={item.href}
              icon={item.icon}
              selected={pathName === item.href}
              title={language === "vi" ? item.titleVN : item.titleEN}
              key={item.href}
              notifications={
                (item.titleEN === "Notifications" &&
                  count._count &&
                  count._count.notification) ||
                0
              }
            />
          ))}
        </ul>
      </nav>
      <Separator className="w-4/5" />

      {/* Workspaces */}
      <p className="w-full text-[#9d9d9d] font-bold mt-4">
        {language === "vi" ? "Không gian làm việc" : "Workspaces"}
      </p>
      {workspace.workspace.length === 1 && workspace.members.length === 0 && (
        <div className="w-full mt-[10px]">
          <p className="text-[#9d9d9d] font-medium text-sm">
            {workspace.subscription?.plan === "FREE"
              ? language === "vi"
                ? "Nâng cấp tài khoản để thêm không gian làm việc"
                : "Upgrade"
              : language === "vi"
              ? "Không tìm thấy không gian làm việc"
              : "No Workspaces"}
          </p>
        </div>
      )}
      <nav className="w-full">
        <ul className="h-[150px] overflow-auto overflow-x-hidden fade-layer">
          {workspace.workspace.length > 0 &&
            workspace.workspace.map(
              (item) =>
                item.type !== "PERSONAL" && (
                  <SidebarItem
                    href={`/dashboard/${item.id}`}
                    selected={pathName === `/dashboard/${item.id}`}
                    title={item.name}
                    notifications={0}
                    key={item.name}
                    icon={
                      <WorkspacePlaceholder>
                        {item.name.charAt(0)}
                      </WorkspacePlaceholder>
                    }
                  />
                )
            )}
          {workspace.members.length > 0 &&
            workspace.members.map((item) => (
              <SidebarItem
                href={`/dashboard/${item.WorkSpace.id}`}
                selected={pathName === `/dashboard/${item.WorkSpace.id}`}
                title={item.WorkSpace.name}
                notifications={0}
                key={item.WorkSpace.name}
                icon={
                  <WorkspacePlaceholder>
                    {item.WorkSpace.name.charAt(0)}
                  </WorkspacePlaceholder>
                }
              />
            ))}
        </ul>
      </nav>

      <Separator className="w-4/5" />

      {/* Upgrade section */}
      {workspace.subscription?.plan === "FREE" && (
        <GlobalCard
          title="Upgrade to Pro"
          description="Unlock AI features like transcription, AI summary, and more."
          footer={<PaymentButton />}
        />
      )}
    </div>
  );
};

export default Sidebar;
