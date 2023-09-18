'use client'
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href?: string;
  to?: string,
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?:
    | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    | LucideIcon;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface NavigationTypes {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}