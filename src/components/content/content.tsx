"use client";

import { useEffect, useRef } from "react";
import * as marked from 'marked';
import { TProp } from "src/interface";

export default function Content(props: TProp) {
  const {
    selectedPost
  } = props;

  const id  = selectedPost?._id as string || ''
  const markdownRef = useRef<HTMLDivElement>(null)

  console.log(id)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://mango.881103.xyz/posts/find`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: {
            _id: id,
          },
          options: {
            _id: 1,
            title: 1,
            categoryId: 1,
            published: 1,
            content: 1,
          },
        }),
      });
      const data = await res.json();
      if (markdownRef.current) {
        markdownRef.current.innerHTML = marked.parse(decodeURIComponent(data[0].content || '')) as string;
      }
    }
    
    if (id) {
      fetchPosts();
    } else {
      if (markdownRef.current) {
      markdownRef.current.innerHTML = ''
    }
    }
  }, [id]);



  return <section>
    <div className="max-w-full prose" ref={markdownRef}></div>
  </section>;
}
