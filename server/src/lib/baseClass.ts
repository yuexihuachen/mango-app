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
    public success(args: Omit<Response<any>, 'code'> & {total?: number}) {
        const success:Response<any> & {total?: number} = {
            code: 0,
            msg: '',
            data: {}
        };
        success.msg = args.msg;
        success.data = args.data;
        if (args?.total) {
            success.total = args.total;
        }
        return success;
    }
}

export default BaseClass;