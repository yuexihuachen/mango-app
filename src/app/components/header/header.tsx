"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { proxyCategory } from "@/lib/categorys";

type TCategory = {
  _id: string;
  name: string;
  alias: string;
  order: number;
};

export default function Header() {
  const router = useRouter();
  const params = useParams();
  const param = params?.slug as string || "JavaScript";
  const [categorys, setCategorys] = useState<TCategory[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://mango.881103.xyz/categorys/find`, {
        method: "POST",
        body: JSON.stringify({})
      });
      const data = await res.json();
      proxyCategory.category = data.find((c: TCategory) =>  c.name === param)
      const newData = data.sort((a: TCategory,b: TCategory) => a.order - b.order)
      setCategorys(newData)
    }
    fetchPosts();
    
  }, []);

  const linkPage = (category: TCategory) => {
    proxyCategory.category = category
    router.push(category.name)
  }

  return (
    <>
    <div className="z-[101] lg:border-b bg-white">
      <header className="flex m-auto bg-white max-w-screen-2xl lg:px-8">
        <div className="flex items-center w-[19rem] py-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="w-7 h-7 text-gradient-to-r from-purple-500 to-pink-500"
            width={28}
            height={28}
            priority
          />
          <span onClick={() => {}} className="pl-3.5 text-xl font-bold text-slate-900">
            星辰大海
          </span>
        </div>
        <div className="flex items-center">
          <nav className="h-full text-base font-medium leading-6 text-slate-700">
            <ul className="flex items-center h-full space-x-8">
              {categorys.map((category: TCategory) => {
                return (
                  <li
                    key={category._id}
                    onClick={() => linkPage(category)}
                    className={`inline-flex items-center h-full border-b-2 cursor-pointer hover:text-purple-700 ${
                      param === category.name
                        ? "border-purple-700 text-purple-700"
                        : "hover:border-purple-700 border-b-white"
                    }`}
                  >
                    <>
                      <span className="">{category.alias}</span>
                    </>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {!categorys.length && (
          <>
            <div className="w-8/12 h-8 my-auto text-center rounded bg-slate-50 text-slate-500"></div>
          </>
        )}
      </header>
    </div>
  </>
  );
}
