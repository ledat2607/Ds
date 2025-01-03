import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Loader from "../loader";
import FolderDuotone from "@/components/icons/folder-duotone";

type Props = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const Folder = ({ name, id, optimistic, count }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex hover:bg-neutral-800 cursor-pointer transition duration-150 items-center gap-2 justify-between w-[250px] py-2 px-2 rounded-lg border-[1px]"
      )}
    >
      <Loader state={false}>
        <div className="flex flex-col gap-4 ">
          <p
            className="text-neutral-300"
            onDoubleClick={() => console.log(`check`)}
          >
            {name}
          </p>
          <span className="text-sm text-neutral-300">{count || 0} videos</span>
        </div>
      </Loader>
      <FolderDuotone />
    </div>
  );
};

export default Folder;
