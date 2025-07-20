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

export type OptionalParams = {
    [key: string]: string;
}

export type TPagination = {
  pageIndex: number;
  pageSize: number;
  total: number;
}

export * from './note';
export * from './tag';
export * from './category';