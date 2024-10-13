import { Dispatch, SetStateAction } from "react";

export type TCategory = {
  _id: string;
  name: string;
  alias: string;
  order: number;
};

export type AnyParams = {
  [prop: string]: unknown;
};

export type TProps = {
  setSelectedPost: Dispatch<SetStateAction<Partial<TPost>>>;
  selectedPost: Partial<TPost>;
};

export type TPost = {
  categoryId: string;
  published: number;
  title: string;
  _id: string;
  content?: string;
};
  
export type TProp = Pick<TProps ,'selectedPost'>