import React from "react";

type Props = {
  videoId: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
};

const CopyLink = ({ videoId }: Props) => {
  return <div>CopyLink</div>;
};

export default CopyLink;
