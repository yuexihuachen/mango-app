'use client'

import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Search from '/search.svg'
import { TProps, TPost } from "../../interface";

export default function SideNav(props: TProps) {
    const {
        setSelectedPost,
        selectedPost
    } = props;
    const params = useParams();
    const categoryId = params.id || '67093df6ffbfb0ed0e882c7a'
    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        async function fetchPosts() {
          const res = await fetch(`https://mango.881103.xyz/post/find`, {
            method: "POST",
            mode: "cors", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: {
                categoryId: categoryId
              },
              options: { _id: 1, title: 1, categoryId: 1, published: 1 },
            }),
          });
          const data = await res.json();
          setPosts(data);
          setSelectedPost(data[0])
        }
        
        fetchPosts()
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [categoryId]);


    const selectPost = (post: TPost) => {
        setSelectedPost(post)
    }
      
    return (
        <nav id="nav" className="lg:text-sm lg:leading-6">
            <div className="sticky top-0 -ml-0.5">
                <div className="h-6 bg-white"></div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <img
                            src={Search}
                            alt="search Logo"
                            width={16}
                            height={16}
                        />
                    </div>
                    <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 shadow-sm ring-1 ring-inset ring-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700" />
                </div>
                <div className="bg-gradient-to-b from-white"></div>
            </div>
            <ul>
                {
                    posts.map((post: TPost) => {
                        return <li key={post._id} className="mt-2">
                        <div onClick={() => selectPost(post)} className={`truncate text-base px-6 py-2 rounded text-slate-700 font-medium ${selectedPost._id === post._id ? "bg-purple-100": "hover:bg-purple-50"}`}>
                            {post.title}
                        </div>
                    </li>
                    })
                }
            </ul>
        </nav >
    );
}