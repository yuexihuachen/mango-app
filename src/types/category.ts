import { Response } from "~/types/index";

export type Category = {
    id?: number;
    name: string;
    alias: string;
    orderid: string;
}

export type InitCategory = {
    category: Partial<Category>,
    loading: boolean;
    fetchResult: Partial<Response<Category>>;
}