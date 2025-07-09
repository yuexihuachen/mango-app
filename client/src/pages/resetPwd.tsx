import { useState } from 'react';
import httpRequest from '@/utils/httpClient';
import { Response } from '@/types/index';
import { message, Button } from 'antd';

const ResetPwd = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [btnName, setBtnName] = useState<string>('发送验证码');
    const [btnLoading, setBtnLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    const forgetPwd = async () => {
        if (!email || !code || !pwd || !confirmPwd) {
            messageApi.warning('重置密码数据不能为空');
            return false;
        }
        if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/g.test(email)) {
            messageApi.info('请输入正确的邮箱')
            return false;
        }
        if (pwd !== confirmPwd) {
            messageApi.warning('两次输入密码不一致');
            return false;
        }

        const res = (await httpRequest.post(`/forgetPwd`, {
            code,
            password: pwd,
            email: email
        })) as Response<{}>;
        if (res.code !== 0) {
            messageApi.error('重置失败');
        } else {
            messageApi.success('重置成功');
        }
    };

    const sendCode = async () => {
        if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/g.test(email)) {
            messageApi.info('请输入正确的邮箱')
        } else {
            setBtnLoading(true);
            setBtnName('发送中')
            const res = (await httpRequest.post(`/sendemail`, {
                to: email,
                subject: '验证码',
            })) as Response<null>;
            setBtnLoading(false);
            if (res.code !== 0) {
                setBtnName('发送失败')
            } else {
                setBtnName('发送成功')
            }
        }
    };

    return (
        <>
            {contextHolder}
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        width={40}
                        height={40}
                        className="w-10 h-10 mx-auto"
                        alt="logo"
                        src="/logo-home.svg"
                    />
                    <h2 className="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
                        重置密码
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-900 text-sm/6"
                            >
                                邮箱:
                            </label>
                            <div className="grid mt-2 grid-cols-[70%_2%_28%]">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <span></span>
                                <Button loading={btnLoading} className='!bg-indigo-600 !h-9' type='primary' size='middle'
                                    onClick={sendCode}>
                                    {btnName}
                                </Button>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="code"
                                className="block font-medium text-gray-900 text-sm/6"
                            >
                                验证码:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="code"
                                    name="code"
                                    type="text"
                                    onChange={(e) => setCode(e.target.value)}
                                    value={code}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password2"
                                    className="block font-medium text-gray-900 text-sm/6"
                                >
                                    密码:
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password2"
                                    name="password2"
                                    onChange={(e) => setPwd(e.target.value)}
                                    type="password"
                                    value={pwd}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block font-medium text-gray-900 text-sm/6"
                                >
                                    确认密码:
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    onChange={(e) => setConfirmPwd(e.target.value)}
                                    type="password"
                                    value={confirmPwd}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={forgetPwd}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                保存
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPwd;
