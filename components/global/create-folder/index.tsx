"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import { Button } from "@/components/ui/button";
import { useCreateFolders } from "@/hooks/useCreateFolder";
import React from "react";

type Props = { workspaceId: string };

const CreateForlders = ({ workspaceId }: Props) => {
  const { onCreateNewFolder } = useCreateFolders(workspaceId);
  const { language } = useLanguage();
  return (
    <Button
      onClick={onCreateNewFolder}
      className="bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl"
    >
      <FolderPlusDuotine />
      {language === "vi" ? "Thêm mới thư mục" : "Create folders"}
    </Button>
  );
};

export default CreateForlders;
