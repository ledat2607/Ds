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
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { userQueryData } from "@/hooks/userQueryData";
import { getWorkSpaces } from "@/actions/workspace";
import { WorkspaceProps } from "@/app/type/index.type";
import Modal from "../modal";
import { PlusCircle } from "lucide-react";
import WorkspaceSearch from "../search-workspaces";

type Props = { actionWorkspaceId: string };

const Sidebar = ({ actionWorkspaceId }: Props) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "vi";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const router = useRouter();

  const { data, isFetched } = userQueryData(["user-workspaces"], getWorkSpaces);
  const { data: workspace } = data as WorkspaceProps;

  const onValueChange = (value: string) => {
    router.push(`/dashboard/${value}`);
  };
  const currentWorkspace = workspace.workspace.find(
    (s) => s.id === actionWorkspaceId
  );
  return (
    <div className="bg-slate-900 flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-slate-800 p-4 gap-4 justify-center items-center mb-4 absolute top-0 left-0 right-0 flex">
        <Image
          src={"/opal-logo.svg"}
          alt=""
          className=""
          width={40}
          height={40}
        />
        <p className="text-2xl lg:block hidden">Opal</p>
      </div>
      <Select defaultValue={actionWorkspaceId} onValueChange={onValueChange}>
        <SelectTrigger className="mt-16 text-white bg-transparent">
          <SelectValue>
            {language === "vi" ? "Lựa chọn không gian" : "Select Workspace"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel className="text-white">
              {language === "vi" ? "Không gian làm việc" : "Workspace"}
            </SelectLabel>
            <Separator />
            {workspace.workspace.map((workspace) => (
              <SelectItem
                key={workspace.id}
                value={workspace.id}
                className="text-white"
              >
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
      <p className="w-full text-white font-bold mt-4">
        {language === "vi" ? "Danh mục" : "Menu"}
      </p>
      <nav className="w-full">
        <ul></ul>
      </nav>
    </div>
  );
};

export default Sidebar;
