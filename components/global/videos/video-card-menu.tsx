import ChangeVideoLocation from "@/components/forms/change-video-location";
import Modal from "@/components/modal";
import { Move } from "lucide-react";
import React from "react";

type Props = {
  videoId: string;
  currentWorkspace?: string;
  currentFolder?: string;
  currentFolderName?: string;
};

const CardMenu = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: Props) => {
  return (
    <Modal
      className="flex items-center cursor-pointer gap-x-2 bg-slate-800"
      title="Move to new Workspace/Folder"
      description=""
      trigger={<Move size={20} fill="#fff" />}
    >
      <ChangeVideoLocation
        videoId={videoId}
        currentFolder={currentFolder}
        currentFolderName={currentFolderName}
        currentWorkspace={currentWorkspace}
      />
    </Modal>
  );
};

export default CardMenu;
