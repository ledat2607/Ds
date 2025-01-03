import { onAuthenticateUser } from "@/actions/user";
import {
  getAllUserVideos,
  getNotifications,
  getWorkspaceFolders,
  getWorkSpaces,
  verifyAccessToWorkspace,
} from "@/actions/workspace";
import { redirect } from "next/navigation";
import React from "react";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GlobalHeader from "@/components/global-header";
import { LanguageProvider } from "@/app/context/LanguageContext";
import Sidebar from "@/components/sidebar";

// Import LanguageProvider từ context đã tạo

type Props = { params: { workspaceId: string }; children: React.ReactNode };

const Layout = async ({ params: { workspaceId }, children }: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user?.workspace) redirect("/auth/sign-in");
  if (!auth.user?.workspace.length) redirect("/auth/sign-in");
  const hasAccess = await verifyAccessToWorkspace(workspaceId);

  if (hasAccess.status !== 200) {
    redirect(`/dashboard/${auth.user.workspace[0].id}`);
  }
  if (!hasAccess.data?.workspace) return null;

  const query = new QueryClient();

  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAllUserVideos(workspaceId),
  });

  await query.prefetchQuery({
    queryKey: ["user-workspaces"],
    queryFn: () => getWorkSpaces(),
  });

  await query.prefetchQuery({
    queryKey: ["user-notifications"],
    queryFn: () => getNotifications(),
  });

  return (
    <LanguageProvider>
      <HydrationBoundary state={dehydrate(query)}>
        <div className="flex min-h-screen max-w-screen">
          <Sidebar actionWorkspaceId={workspaceId} />
          <div className="w-[90%] pt-28 p-6">
            <GlobalHeader workspace={hasAccess.data.workspace} />
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </HydrationBoundary>
    </LanguageProvider>
  );
};

export default Layout;
