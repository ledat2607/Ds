import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React from 'react'

type Props = {
  videoId: string;
  currentWorkspace?: string;
  currentFolder?: string;
  currentFolderName?: string;
};

const ChangeVideoLocation = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: Props) => {
  return (
    <form className="flex flex-col gap-y-5">
      <div className="border-[1px] rounded-xl p-5">
        <h2 className="text-xs mb-2 text-[#f1f1f1]">Current</h2>
        <p className="text-[#a4a4a4] text-md">Workspace name</p>
        <p className="text-[#a4a4a4] text-sm mt-5 mb-2">folder name</p>
        <p className="text-[#a4a4a4]  text-xs">This video has no folder</p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-y-5 p-5 border-[1px] rounded-xl">
        <h2 className="text-[#a4a4a4] text-md">To</h2>
        <Label className="flex flex-col gap-y-2">
          <p className="text-md">Workspace</p>
          <select className="rounded-xl text-base bg-gray-300 p-1">
            <option value={"something"} className="text-gray-100">
              Workspace
            </option>
          </select>
        </Label>
      </div>
    </form>
  );
};

export default ChangeVideoLocation;