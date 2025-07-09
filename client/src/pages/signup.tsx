import { useState } from 'react';
import { message } from 'antd';

import httpRequest from '@/utils/httpClient';
import { Response } from '@/types/index';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    const signup = async () => {
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
        const res = (await httpRequest.post(`/register`, {
            code,
            password: pwd,
            confirmPasswrod: confirmPwd,
            username,
            email: email
        })) as Response<{}>;
    
        if (res?.code !== 0) {
            messageApi.success('注册失败');
        } else {
            messageApi.success('注册成功')
        }
    };

    const sendCode = async () => {
        if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/g.test(email)) {
            messageApi.info('请输入正确的邮箱')
            return false;
        }

        const res = (await httpRequest.post(`/sendemail`, {
            to: email,
            subject: '验证码',
        })) as Response<null>;
        let str = '发送成功';
        if (res?.code !== 0) {
            str = '发送失败';
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
                        注册新用户
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
                                <button
                                    type="submit"
                                    onClick={sendCode}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                >
                                    发送验证码
                                </button>
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
                            <label
                                htmlFor="username"
                                className="block font-medium text-gray-900 text-sm/6"
                            >
                                用户名(可选):
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={signup}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                注册
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
