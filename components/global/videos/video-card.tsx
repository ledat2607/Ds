"use client";
import React from "react";
import Loader from "../loader";
import CardMenu from "./video-card-menu";
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
  createdAt: Date;
  title: string | null;
  source: string;
  processing: boolean;
  workspaceId: string;
};

const VideoCard = (props: Props) => {
  return (
    <Loader state={false}>
      {/* <div className="overflow-hidden cursor-pointer relative border-[1px] border-[#252525] flex flex-col rounded-xl">
        <div className="absolute top-3 right-3 z-50 flex flex-col gap-y-3">
          <CardMenu
            currentFolder={props.Folder?.id}
            currentFolderName={props.Folder?.name}
            currentWorkspace={props.workspaceId}
            videoId={props.id}
          />
        </div>
      </div> */}
      <ChangeVideoLocation
        videoId=""
        currentFolder=""
        currentFolderName=""
        currentWorkspace=""
      />
    </Loader>
  );
};

export default VideoCard;
