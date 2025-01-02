import { Bell, CreditCard, FileDuoToneBlack, Home, Settings } from "./icons";

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
    titleVN: "Thư viện của tôi",
    titleEN: "My Libary",
    href: `/dashboard/${workspaceId}`,
    icon: <FileDuoToneBlack />,
  },
  {
    titleVN: "Thông báo",
    titleEN: "Notificationss",
    href: `/dashboard/${workspaceId}/notifications`,
    icon: <Bell />,
  },
  {
    titleVN: "Hóa đơn thanh toán",
    titleEN: "Bill",
    href: `/dashboard/${workspaceId}/billing`,
    icon: <CreditCard />,
  },
  {
    titleVN: "Cài đặt",
    titleEN: "Settings",
    href: `/dashboard/${workspaceId}/settings`,
    icon: <Settings />,
  },
];
