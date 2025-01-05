"use client";
import { getAllUserVideos } from "@/actions/workspace";
import { VideosProps } from "@/app/type/index.type";
import VideoRecorderDuotone from "@/components/icons/video-recorder-duotone";
import { userQueryData } from "@/hooks/userQueryData";
import { cn } from "@/lib/utils";
import React from "react";
import VideoCard from "./video-card";

type Props = {
  folderId: string;
  videoKey: string;
  workspaceId: string;
};

const Videos = ({ folderId, videoKey, workspaceId }: Props) => {
  const { data: videoData } = userQueryData([videoKey], () =>
    getAllUserVideos(folderId)
  );
  const { data: videos, status: videoStatus } = videoData as VideosProps;
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <VideoRecorderDuotone />
          <h2 className="text-gray-100 text-xl">Videos</h2>
        </div>
      </div>
      <section
        className={cn(
          videoStatus !== 200
            ? "p-5"
            : "grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6"
        )}
      >
        {/* {videoStatus === 200 ? (
          videos.map((video) => (
            <div>
              <VideoCard />
            </div>
          ))
        ) : (
          <p className="text-gray-100">No video in workspace</p>
        )} */}
        <VideoCard />
      </section>
    </div>
  );
};

export default Videos;
