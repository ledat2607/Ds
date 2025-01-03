"use client";
import { getWorkSpaces } from "@/actions/workspace";
import { useLanguage } from "@/app/context/LanguageContext";
import WorkspaceForm from "@/components/forms/workspace-form";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { userQueryData } from "@/hooks/userQueryData";
import React from "react";

type Props = {};

const CreateWorkspace = (props: Props) => {
  const { data } = userQueryData(["user-workspaces"], getWorkSpaces);
  const { language } = useLanguage();
  const { data: plan } = data as {
    status: number;
    data: {
      subscription: {
        plan: "PRO" | "FREE";
      } | null;
    };
  };
  if (plan.subscription?.plan === "FREE") {
    return <></>;
  }

  if (plan.subscription?.plan === "PRO")
    return (
      <Modal
        title={
          language === "vi"
            ? "Tạo mới không gian làm việc"
            : "Create a Workspace"
        }
        description={
          language === "vi"
            ? ""
            : "Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
        }
        trigger={
          <Button className="bg-[#6d6c6c] text-[#fff] flex items-center gap-2 py-6 px-4 rounded-2xl">
            <FolderPlusDuotine />
            {language === "vi" ? "Thêm mới không gian" : "Create workspace"}
          </Button>
        }
      >
        <WorkspaceForm />
      </Modal>
    );
};

export default CreateWorkspace;
