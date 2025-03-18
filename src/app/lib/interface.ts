export interface Response<T> {
    code: string;
    msg: string;
    data: T;
}

export type Token = {
    at: string;
    rt: string;
}