import { ReactNode } from "react";

export type TabItem = {
  key: string;
  label: string;
  children: ReactNode
};

export type Response<T> = {
  code: number;
  message: string;
  data: T;
}

export type AccessToken = {
    access_token: string;
}

export type AnyParams = {
    [key: string]: string;
}

export * from './note';
export * from './tag';
export * from './category';