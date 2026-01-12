import {
  type LucideIcon,
  HouseIcon,
  ReceiptIcon,
  FolderOpenIcon,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";
import { PATH } from "./PATH";

export interface IMenu {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const MENU = {
  primary: [
    {
      label: "Dashboard",
      path: PATH.dashboard,
      icon: HouseIcon,
    },
    {
      label: "Transactions",
      path: PATH.transactions,
      icon: ReceiptIcon,
    },
    {
      label: "Ledgers",
      path: PATH.ledgers,
      icon: FolderOpenIcon,
    },
    {
      label: "Contacts",
      path: PATH.contacts,
      icon: UsersIcon,
    },
  ],
  secondary: [
    {
      label: "Settings",
      path: PATH.settings,
      icon: SettingsIcon,
    },
    {
      label: "Sign out",
      path: PATH.login,
      icon: LogOutIcon,
    },
  ],
};
