"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import CreateFolder from "@/components/global/create-folder";
import CreateWorkspace from "@/components/global/create-workspace";
import Folders from "@/components/global/folders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

// Define the expected type for `params`
type Params = { workspaceId: string };

type Props = {
  params: Promise<Params>;
};

const Page = ({ params }: Props) => {
  const { language } = useLanguage();
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);

  useEffect(() => {
    params
      .then((resolvedParams) => {
        setWorkspaceId(resolvedParams.workspaceId);
      })
      .catch((err) => {
        console.error("Failed to resolve params:", err);
      });
  }, [params]);

  if (!workspaceId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Tabs defaultValue="videos" className="mt-6">
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2 pl-0">
            <TabsTrigger
              className="p-[13px] px-6 rounded-2xl data-[state=active]:bg-[#4c81ac] data-[state=active]:text-[#fff]"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="p-[13px] px-6 rounded-2xl data-[state=active]:bg-[#4c81ac] data-[state=active]:text-[#fff]"
            >
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateFolder workspaceId={workspaceId} />
          </div>
        </div>
        <section className="py-9">
          <TabsContent value="videos">
            <Folders workspaceId={workspaceId} />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default Page;
