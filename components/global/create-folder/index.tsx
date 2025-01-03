import React from "react";

type Props = { workspaceId: string };

const CreateFolder = ({ workspaceId }: Props) => {
  console.log(workspaceId);
  return <div>CreateFolder</div>;
};

export default CreateFolder;
