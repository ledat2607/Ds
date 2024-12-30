"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

type Props = { actionWorkspaceId: string };

const Sidebar = ({ actionWorkspaceId }: Props) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "vi";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const router = useRouter();
  const onValueChange = (value: string) => {
    router.push(`/dashboard/${value}`);
  };
  return (
    <div className="bg-slate-900 flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-slate-800 p-4 gap-4 justify-center items-center mb-4 absolute top-0 left-0 right-0 flex">
        <Image
          src={"/opal-logo.svg"}
          alt=""
          className=""
          width={40}
          height={40}
        />
        <p className="text-2xl lg:block hidden">Opal</p>
      </div>
      <Select defaultValue={actionWorkspaceId} onValueChange={onValueChange}>
        <SelectTrigger className="mt-16 text-white bg-transparent">
          <SelectValue>
            {language === "vi" ? "Lựa chọn không gian" : "Select Workspace"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel className="text-white">
              {language === "vi" ? "Không gian làm việc" : "Workspace"}
            </SelectLabel>
            <Separator />
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sidebar;
