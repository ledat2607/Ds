import { getWorkSpaces } from "@/actions/workspace";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useMoveVideos } from "@/hooks/useFolders";
import React, { useEffect, useState } from "react";

// API call function (sử dụng getWorkSpaces từ file action)

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
  const {
    folders,
    workspaces,
    register,
    isFetching,
    onFormSubmit,
    isPending,
    isFolders,
  } = useMoveVideos(videoId, currentWorkspace!);

  // State để lưu trữ workspaces và xử lý loading/error
  const [workspaceData, setWorkspaceData] = useState<any>([]);

  // Lấy dữ liệu workspaces khi component được render
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await getWorkSpaces();
        setWorkspaceData(response?.data?.workspace);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkspaces();
  }, []);

  const workspace = workspaceData.find((f: any) => f.id === currentWorkspace);

  return (
    <form className="flex flex-col gap-y-5">
      <div className="border-[1px] rounded-xl p-5">
        <h2 className="text-xs mb-2 text-[#f1f1f1]">Current</h2>
        <p className="text-[#a4a4a4] text-md">{workspace && workspace?.name}</p>
        <p className="text-[#a4a4a4] text-sm mt-5 mb-2">folder name</p>
        <p className="text-[#a4a4a4] text-xs">This video has no folder</p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-y-5 p-5 border-[1px] rounded-xl">
        <h2 className="text-[#a4a4a4] text-md">To</h2>
        <Label className="flex flex-col gap-y-2">
          <p className="text-md">Workspace</p>
          <select className="rounded-xl text-base bg-gray-800 p-1">
            {workspaceData &&
              workspaceData.map((workspace: any) => (
                <option value={workspace.id} key={workspace.id}>
                  {workspace.name}
                </option>
              ))}
          </select>
        </Label>
      </div>
    </form>
  );
};

export default ChangeVideoLocation;
