"use client";
import { fetchPost } from "@/app/api/Posts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function PostDetail({ params }) {
  const { id } = params;
  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });
  if (isLoading) return "Loading .....";
  if (isError) return `${error.message}`;
  console.log(post);
  return (
    <main>
      <div>
        <Link className="underline text-blue-400" href="/">
          Back to posts
        </Link>

        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
    </main>
  );
}
