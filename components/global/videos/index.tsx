"use client";
import { getAllUserVideos } from "@/actions/workspace";
import { VideosProps } from "@/app/type/index.type";
import VideoRecorderDuotone from "@/components/icons/video-recorder-duotone";
import { useQueryData } from "@/hooks/useQueryData";
import { cn } from "@/lib/utils";
import React from "react";
import VideoCard from "./video-card";

type Props = { videoKey: string; workspaceId: string; folderId: string };

const video = {
  id: "video1",
  title: "Introduction to Redux",
  source: "https://example.com/videos/intro-redux",
  processing: false,
  createdAt: new Date("2024-01-01"),
  workspaceId: "workspace1",
  User: {
    firstname: "John",
    lastname: "Doe",
    image: "https://example.com/images/john.jpg",
  },
  Folder: {
    id: "folder1",
    name: "Getting Started",
  },
};
const Videos = ({ videoKey, folderId, workspaceId }: Props) => {
  const { data: videoData } = useQueryData([videoKey], () =>
    getAllUserVideos(folderId)
  );
  const { status: videoStatus, data: videos } = videoData as VideosProps;
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <VideoRecorderDuotone />
          <h2 className="text-[#bdbdbd]">Videos</h2>
        </div>
      </div>
      <section
        className={cn(
          videoStatus !== 200
            ? "p-5"
            : "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        )}
      >
        {/* {videoStatus === 200 ? (
          videos.map((video) => (
            <VideoCard {...video} workspaceId={workspaceId} />
          ))
        ) : (
          <p className="text-[#a4a4a4]">No videos in workspace</p>
        )} */}
        <VideoCard {...video} workspaceId={workspaceId} />
      </section>
    </div>
  );
};

export default Videos;
