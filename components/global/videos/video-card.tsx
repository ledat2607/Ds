import React from "react";
import VideoCardMenu from "./video-card-menu";
import Loader from "../loader";
import ChangeVideoLocation from "@/components/forms/change-video-location";

type Props = {
  User: {
    firstname: string | null;
    lastname: string | null;
    image: string | null;
  } | null;
  id: string;
  Folder: {
    id: string;
    name: string;
  } | null;
  createdAt: string;
  title: string | null;
  source: string;
  processing: boolean;
  workspaceId: string;
};

const VideoCard = (props: Props) => {
  return (
    <Loader state={false}>
      {/* <div className="overflow-hidden cursor-pointer bg-[#171717] relative border-[1px] border-[#252525] flex flex-col rounded-xl">
        <div className="absolute top-3 right-3 z-50 flex flex-col gap-y-3">
          <VideoCardMenu
            currentFolderName={props.Folder?.name}
            videoId={props.id}
            currentWorkspace={props.workspaceId}
            currentFolder={props.Folder?.id}
          />
        </div>
      </div> */}
      <ChangeVideoLocation
        currentFolder={"currentFolder"}
        currentWorkspace={"currentWorkspace"}
        videoId={"videoId"}
        currentFolderName={"currentFolderName"}
      />
    </Loader>
  );
};

export default VideoCard;
