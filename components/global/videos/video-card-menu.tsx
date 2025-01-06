import ChangeVideoLocation from '@/components/forms/change-video-location';
import Modal from '@/components/modal';
import { Move } from 'lucide-react';
import React from 'react'

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
      className="flex items-center cursor-pointer gap-x-2"
      title="Move to new Workspace/Folder"
      description=""
      trigger={<Move size={20} fill="#fff" className="text-[#000]" />}
    >
      <ChangeVideoLocation
        videoId=""
        currentFolder=""
        currentFolderName=""
        currentWorkspace=""
      />
    </Modal>
  );
};

export default CardMenu;