"use client";
import { getFolderInfo } from "@/actions/workspace";
import { FolderProps } from "@/app/type/index.type";
import { useQueryData } from "@/hooks/useQueryData";
import React from "react";

type Props = {
  folderId: string;
};

const FolderInfo = ({ folderId }: Props) => {
  const { data } = useQueryData(["folder-info"], () => getFolderInfo(folderId));

  const { data: folder } = data as FolderProps;

  return (
    <div className="flex items-center">
      <h2 className="text-[#bdbdbd] text-2xl">{folder.name}</h2>
    </div>
  );
};

export default FolderInfo;
