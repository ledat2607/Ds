import FolderDuotone from "@/components/icons/folder-duotone";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import Folder from "./folder";

type Props = { workspaceId: string };

const Folders = ({ workspaceId }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-[#9d9d9d]">
        <div className="flex items-center gap-2">
          <FolderDuotone />
          <h2 className="text-[#bdbdbd] text-xl">Folders</h2>
        </div>
        <div className="text-[#bdbdbd] flex items-center gap-2 cursor-pointer hover:animate-bounce">
          More
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <section
        className={cn(
          "w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 "
        )}
      >
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
        <Folder name="Folder title" id="" />
      </section>
    </div>
  );
};

export default Folders;
