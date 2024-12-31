import { FileDuoToneBlack } from "./icons/file-duo-tone-black";
import { Home } from "./icons/home";

export const MENU_ITEMS = (
  workspaceId: string
): {
  titleVN: string;
  titleEN: string;
  href: string;
  icon: React.ReactNode;
}[] => [
  {
    titleVN: "Trang chủ",
    titleEN: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Home />,
  },
  {
    titleVN: "Thư viện của tôitôi",
    titleEN: "My Libary",
    href: `/dashboard/${workspaceId}`,
    icon: <FileDuoToneBlack />,
  },
  {
    titleVN: "Trang chủ",
    titleEN: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Home />,
  },
  {
    titleVN: "Trang chủ",
    titleEN: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Home />,
  },
];
