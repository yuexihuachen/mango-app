'use client';
import Image from 'next/image';
import { useState } from 'react';

type TResponse = {
  code: number;
  msg: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function Page() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const login = async () => {
    const response = await fetch(`/login`, {
      method: 'POST',
      body: JSON.stringify({ username: name, password: pwd }),
      headers: {
        "Content-Type": "application/json"
      }
    }) as unknown as TResponse;
    if (!response.code) {
      const data = await fetch(`/api/login`, {
        method: 'POST',
        body: JSON.stringify({ username: name, password: pwd }),
        headers: {
          "Content-Type": "application/json"
        }
      }) as unknown as TResponse;
      console.log(data)
    }

  };


  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={40}
          height={40}
          className="w-10 h-10 mx-auto"
          alt="logo"
          src="/logo-home.svg"
          priority
        />
        <h2 className="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
          账号登录
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block font-medium text-gray-900 text-sm/6"
            >
              用户名:
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                onChange={(e) => setName(e.target.value)}
                autoComplete="username"
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
                密码:
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  忘记密码
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={login}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
