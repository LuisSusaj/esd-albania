import { ReactNode } from "react";
export interface MenuItemProps {
  children: ReactNode;
  isLast?:boolean;
  to:string;
}
