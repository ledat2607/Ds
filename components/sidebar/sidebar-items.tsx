import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  href: string;
  selected: boolean;
  notifications?: number;
};

const SidebarItem = ({ href, icon, selected, title, notifications }: Props) => {
  return (
    <li className="cursor-pointer my-[10px]">
      <Link
        href={href}
        className={cn(
          "flex items-center justify-between group rounded-lg hover:bg-[#1D1D1D] hover:-translate-y-2 duration-300",
          selected ? "bg-[#ddd7d7]" : ""
        )}
      >
        <div className="flex items-center gap-2 transition-all p-[5px] cursor-pointer text-white">
          {icon}
          <span
            className={cn(
              "font-medium group-hover:text-[#f1f1f1] transition-all truncate w-32",
              selected ? "text-[#1f50f3]" : "text-[#9e9d9d]"
            )}
          >
            {title}
          </span>
        </div>
        {}
      </Link>
    </li>
  );
};

export default SidebarItem;
