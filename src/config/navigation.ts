import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { DashboardIcon } from "@radix-ui/react-icons";
import { NavigationTypes } from "@/types/nav";
import {
  FilePlus2,
  MailsIcon,
  SendIcon,
} from "lucide-react";

export const navigationConfig: NavigationTypes = {
  mainNav: [
  ],
  sidebarNav: [
    // {
    //   title: "Main Menu",
    //   items: [
    //     {
    //       title: "Dashboard",
    //       href: "/dashboard",
    //       items: [],
    //       icon: DashboardIcon,
    //     },
    //   ],
    // },
    // {
    //   title: "Tagihan",
    //   items: [
    //     {
    //       title: "Data Tagihan",
    //       href: "/admin/tagihan",
    //       items: [],
    //       icon: FilePlus2,
    //     }
    //     // {
    //     //   title: "All Order",
    //     //   href: "/orders",
    //     //   items: [],
    //     //   icon: ShoppingCartIcon,
    //     // },

    //     // {
    //     //   title: "Canceled Order",
    //     //   href: "/orders/canceled",
    //     //   items: [],
    //     //   icon: FileX,
    //     // },
    //   ],
    // },
    // {
    //   title: "Messages",
    //   items: [
    //     {
    //       title: "New Messages",
    //       href: "/messages/new",
    //       icon: SendIcon,
    //       items: [],
    //     },
    //     {
    //       title: "Recent Messages",
    //       href: "/messages",
    //       icon: MailsIcon,
    //       label: "9+",
    //       items: [],
    //     },
    //   ],
    // },
  ],
};
