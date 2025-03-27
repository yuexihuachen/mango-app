export type Response<T> = {
    code: number;
    msg: string;
    data: T;
}

export type SigninData = {
    at: string;
    rt: string;
}

export type Modal = {
    title?: string;
    content?: string;
    show: boolean;
}

export type Toast = {
    content: string;
    show: boolean;
}

export type GloablStatus = {
    loading?: boolean;
    toast?: Toast;
    tab?: string;
    
}

export type At = {
    at: string;
}

