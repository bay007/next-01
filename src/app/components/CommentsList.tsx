"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Acme } from "next/font/google";
import Image from "next/image";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

const fetchCommentsFromPost = (id: string): Promise<Comment[]> => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

  return fetch(url).then((res) => {
    return res.json();
  });
};

const font = Acme({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function CommentsList() {
  const [comments, setComments] = useState<Comment[]>([]);

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    fetchCommentsFromPost(id as string).then((r) => {
      setComments(r);
    });
  }, [id]);

  return (
    <ul className={font.className + " flex flex-col  my-2 text-xs bg-gray-700"}>
      {comments?.map(({ id, name, email, body }) => (
        <li className="py-5 border-b px-12" key={id}>
          <h1 className="font-bold">
            <Image
              alt={name}
              width={30}
              height={30}
              src={`https://i.pravatar.cc/300?u=${email}`}
            />
            {name} <span className="text-sm">({email})</span>
          </h1>

          <div className="text-sm">{body}</div>
        </li>
      ))}
    </ul>
  );
}
