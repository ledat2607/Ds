import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useMoveVideos } from "@/hooks/useFolder";
import React from "react";

type Props = {
  videoId: string;
  currentFolder?: string;
  currentFolderName?: string;
  currentWorkspace: string;
};

const ChangeVideoLocation = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: Props) => {
  const {
    register,
    isFetching,
    isFolders,
    onFormSubmit,
    folders,
    workspaces,
    isPending,
  } = useMoveVideos(videoId, currentWorkspace);

  const folder = folders.find((f) => f.id === currentFolder);
  return (
    <form className="flex flex-col gap-y-5">
      <div className="boder-[1px] rounded-xl p-5">
        <h2 className="text-xs text-[#a4a4a4]">Current Workspace</h2>
        <p>name</p>
        <h2 className="text-xs text-[#a4a4a4] mt-4">Current Folder</h2>
        <p>name</p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-y-5 p-5 border-[1px] rounded-xl">
        <h2 className="text-xs text-[#a4a4a4]">To</h2>
        <Label className="flex-col gap-y-2 flex">
          <p className="text-xs">Workspace</p>
          <select className="rounded-xl text-base bg-[#585656] px-2 py-2 ">
            <option value="something" className="text-black">
              workspace
            </option>
          </select>
        </Label>
      </div>
    </form>
  );
};

export default ChangeVideoLocation;
