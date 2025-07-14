export type TUser = {
    id: number;
    username: string;
    exp: number;
    password?: string;
}

export type Email = {
    to: string;
    subject: string;
    text: string;
}

export type Response<T> = {
    code: number;
    msg: string;
    data: T
}

