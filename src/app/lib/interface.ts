export interface Response<T> {
    code: string;
    msg: string;
    data: T;
}

export type Token = {
    at: string;
    rt: string;
}

export type ModalProps = {
    title: string;
    content: string;
    open: boolean;
    onOk: () => void;
    onCancel?: () => void;
}