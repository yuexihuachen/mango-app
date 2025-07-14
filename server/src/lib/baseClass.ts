import { Response } from "@/types/index";

class BaseClass {
    public failed<T>(msg: string): Response<T> {
        let failed = {
            code: -1,
            msg: '',
            data: {} as T
        };
        failed.msg = msg;
        return failed;
    }
    public success(args: Omit<Response<any>, 'code'>):Response<any> {
        const success = {
            code: 0,
            msg: '',
            data: {}
        };
        success.msg = args.msg;
        success.data = args.data;
        return success;
    }
}

export default BaseClass;