"use client";
import { useMutationData } from "@/hooks/useMutationData";
import { useSearch } from "@/hooks/useSearch";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import Loader from "../global/loader";

type Props = {
  workspaceId: String;
};

const WorkspaceSearch = ({ workspaceId }: Props) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");

  // Load ngôn ngữ từ localStorage khi component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "vi";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  const { query, onSearchQuery, isFetching, onUsers } = useSearch(
    "get-users",
    "USERS"
  );

  // const {} = useMutationData();

  return (
    <div className="flex flex-col gap-y-5">
      <Input
        onChange={onSearchQuery}
        value={query}
        className="bg-transparent outline-none text-white"
        placeholder={
          language === "vi" ? "Tìm kiếm người dùng...." : "Search user...."
        }
      />
      <div></div>
      {isFetching ? (
        <div className="flex flex-col gap-y-2">
          <Skeleton className="w-full h-8 rounded-full" />
        </div>
      ) : !onUsers ? (
        <p className="text-center text-sm text-[#f5f0f0]">
          {language === "vi" ? "Không tìm thấy người dùng" : "No user found"}
        </p>
      ) : (
        <div>
          {onUsers?.map((user) => (
            <div
              className="flex gap-x-2 items-center border-2 w-full p-2 rounded-2xl cursor-pointer"
              key={user.id}
            >
              <Avatar>
                <AvatarImage src={user.image as string} />
                <AvatarFallback>
                  <User className="text-blue-500" size={15} />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h3 className="text-bold text-md capitalize">
                  {user.firstname} {user.lastname}
                </h3>
                <p className="lowercase text-[9px] bg-white p-1 rounded-lg text-[#1e1e1e]">
                  {user.subscription?.plan}
                </p>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <Button
                  variant={"default"}
                  onClick={() => {}}
                  className="w-5/12"
                >
                  <Loader state={false} className="text-black">
                    Invite
                  </Loader>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkspaceSearch;
