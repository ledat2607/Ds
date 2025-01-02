"use client";
import { Search, UploadIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import VideoRecorderIcon from "../icons/video-recorder";
import { UserButton } from "@clerk/nextjs";

type Props = { language: string };

const InfoBar = ({ language }: Props) => {
  return (
    <header className="pl-12 md:pl-[265px] fixed w-full flex items-center justify-between gap-1 p-3">
      <div className="flex gap-1 justify-center items-center border-2 border-[#9d9d9d] rounded-full px-4 w-full max-w-lg">
        <Search className="text-[#9d9d9d]" size={25} />
        <Input
          className="bg-transparent border-none !placeholder-slate-500 focus:outline-none"
          placeholder="........"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant={"default"}
          className="bg-[#000] flex items-center gap-2 text-blue-500"
        >
          <UploadIcon size={25} />
          <span>{language === "vi" ? "Đăng tải" : "Upload"}</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center gap-2 text-blue-500"
        >
          <VideoRecorderIcon />
          <span>{language === "vi" ? "Ghi hình" : "Record"}</span>
        </Button>
        <UserButton />
      </div>
    </header>
  );
};

export default InfoBar;
