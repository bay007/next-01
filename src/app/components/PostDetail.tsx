"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPost = (id: string): Promise<Post> => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return fetch(url).then((res) => {
    return res.json();
  });
};

export default function PostDetail() {
  const [post, setPost] = useState<Post>();

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    fetchPost(id as string).then((r) => {
      console.log(r);
      setPost(r);
      return r;
    });
  }, [id]);

  return (
    <article className="my-2">
      <div className="flex flex-col">
        <h1 className="font-bold text-green-400">{post?.title}</h1>
        <div className="text-sm">{post?.body}</div>
      </div>
      <div className="flex flex-row justify-end">
        {post && (
          <Link
            className="px-5 text-blue-600 underline"
            href="/posts/[post]/comments"
            as={`/posts/${id}/comments`}
          >
            Ver commentarios
          </Link>
        )}
      </div>
    </article>
  );
}
