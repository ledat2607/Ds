import { useLanguage } from "@/app/context/LanguageContext";
import ChangeVideoLocation from "@/components/forms/change-video-location";
import Modal from "@/components/modal";
import { Move } from "lucide-react";
import React from "react";

type Props = {
  videoId: string;
  currentWorkspace: string;
  currentFolder?: string;
  currentFolderName?: string;
};

const VideoCardMenu = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: Props) => {
  const { language } = useLanguage();
  return (
    <Modal
      title={
        language === "vi"
          ? "Di chuyển vào thư mục mới"
          : "Move to new Folder/Workspace"
      }
      className="flex items-center cursor-pointer gap-x-2"
      description={
        language === "vi"
          ? "Hành động không thể hoàn tất !! "
          : "This action cannot be undone. This will permanently delete your account and remove your data from our servers"
      }
      trigger={<Move size={25} fill="#a4a4a4" className="text-[#a4a4a4]" />}
    >
      <ChangeVideoLocation
        currentFolder={currentFolder}
        currentWorkspace={currentWorkspace}
        videoId={videoId}
        currentFolderName={currentFolderName}
      />
    </Modal>
  );
};

export default VideoCardMenu;
