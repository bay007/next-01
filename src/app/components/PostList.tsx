"use client";

import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    return res.json();
  });
};
const OnLike = () => {
  alert("I like");
};

import { useEffect, useState } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((r) => {
      setPosts(r);
    });
  }, []);

  return (
    <article className="flex flex-col items-center my-2">
      <ul>
        {posts.map(({ id, title, body }) => (
          <>
            <li className="py-5 border" key={id}>
              <Link href="/posts/[post]" as={`/posts/${id}`} key={id}>
                <h1 className="font-bold">{title}</h1>
              </Link>
              <div className="text-sm">{body}</div>
              <div className="flex justify-between">
                <button className="px-5 text-red-600 text-2xl" onClick={OnLike}>
                  ♥
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </article>
  );
};
