import FolderDuotone from "@/components/icons/folder-duotone";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import Folder from "./folder";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkspaceFolders } from "@/actions/workspace";
import { useMutationDataState } from "@/hooks/useMutationData";
import { useLanguage } from "@/app/context/LanguageContext";

type Props = { workspaceId: string };

export type FoldersProps = {
  status: number;
  data: ({
    _count: {
      videos: number;
    };
  } & {
    id: string;
    name: string;
    createdAt: Date;
    workSpaceId: string | null;
  })[];
};

const Folders = ({ workspaceId }: Props) => {
  const { language } = useLanguage();
  //get folders
  const { data, isFetched } = useQueryData(["workspace-folders"], () =>
    getWorkspaceFolders(workspaceId)
  );
  const { latestVariables } = useMutationDataState(["create-folder"]);

  const { status, data: folders } = data as FoldersProps;
  // if(isFetched && folders){

  // }
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
          status !== 200 && "justify-center w-full",
          "w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 "
        )}
      >
        {status !== 200 ? (
          <p className="text-neutral-300">
            {language == "vi"
              ? "Không tìm thấy thư mục nào"
              : "No folder found"}
          </p>
        ) : (
          <>
            {latestVariables && latestVariables.status === "pending" && (
              <Folder name="Folder title" id="" />
            )}
            {folders.map((folder) => (
              <Folder
                name={folder.name}
                count={folder._count.videos}
                id={folder.id}
                key={folder.id}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Folders;
