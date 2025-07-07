import { ReactNode } from "react";

export type TabItem = {
  key: string;
  label: string;
  children: ReactNode
};