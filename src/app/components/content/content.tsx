"use client";

import { useEffect, useState } from "react";

type TPost = {
  categoryId: string;
  published: number;
  title: string;
  _id: string;
  content?: string;
};

type TProps = {
  selectedPost: Partial<TPost>
}

export default function Content(props: TProps) {
  const {
    selectedPost
  } = props;

  const [note, setNote] = useState<Partial<TPost>>({})

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
            _id: selectedPost._id,
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
      setNote(data[0])
    }

    if (selectedPost?._id) {
      fetchPosts();
    }
  }, [selectedPost?._id]);



  return <section>
    {decodeURIComponent(note!.content || '')}
  </section>;
}
