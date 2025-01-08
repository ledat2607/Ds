"use client";
import React from "react";
import Loader from "../loader";
import CardMenu from "./video-card-menu";
import ChangeVideoLocation from "@/components/forms/change-video-location";
import CopyLink from "./copy-link";

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
    <Loader
      state={props.processing}
      className=" bg-[#171717] flex justify-center items-center border-[1px] border-[#252525] rounded-xl"
    >
      <div className=" cursor-pointer relative border-[1px] border-[#252525] flex flex-col rounded-xl ">
        <div className="absolute top-3 right-3 z-50 flex flex-col gap-y-3">
          <CardMenu
            currentFolder={props.Folder?.id}
            currentFolderName={props.Folder?.name}
            currentWorkspace={props.workspaceId}
            videoId={props.id}
          />
          <CopyLink
            className="p-0 h-5 hover:bg-transparent"
            videoId={props.id}
          />
        </div>
      </div>
    </Loader>
  );
};

export default VideoCard;
