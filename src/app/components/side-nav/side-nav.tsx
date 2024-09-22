'use client'
import Image from "next/image";

export default function SideNav() {

    return (
        <nav id="nav" className="lg:text-sm lg:leading-6">
            <div className="sticky top-0 -ml-0.5">
                <div className="h-6 bg-white"></div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                            src="/search.svg"
                            alt="search Logo"
                            width={16}
                            height={16}
                            priority
                        />
                    </div>
                    <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 shadow-sm ring-1 ring-inset ring-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700" />
                </div>
                <div className="bg-gradient-to-b from-white"></div>
            </div>
            <ul>
                <li className="mt-2">
                    <div className={`truncate text-base px-6 py-2 rounded hover:bg-purple-50 text-slate-700 font-medium`}>闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化从用户输入到用户看到页面轻质</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">闭包</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">组件通信</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">性能优化</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">状态管理</div>
                </li>
                <li className="mt-2">
                    <div className="px-6 py-2 text-base font-medium truncate rounded hover:bg-pink-50 text-slate-700">异步操作</div>
                </li>
            </ul>
        </nav >
    );
}