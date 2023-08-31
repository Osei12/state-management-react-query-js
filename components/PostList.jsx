"use client";
import { deletePost, fetchPosts } from "@/app/api/Posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
export default function PostList() {
  const router = useRouter();
  const {
    isLoading,
    error,
    isError,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
    // console.log(id);
  };

  if (isLoading) return "Loading .....";
  if (isError) return `${error.message}`;

  return (
    <div>
      {posts.map((post) => (
        <div className="" key={post.id}>
          <h4
            onClick={() => router.push(`/post/${post.id}`)}
            className="bg-slate-400 cursor-pointer hover:scale-105 duration-300 ease-linear px-4 py-5 mt-3 mb-2 rounded "
          >
            {post.title}
          </h4>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => handleDelete(post.id)}
              className="w-12 bg-red-500 px-4 py-2 rounded"
            >
              <FaTrash className="text-white" />
            </button>
            <button
              onClick={() => router.push(`/post/edit/${post.id}`)}
              className=" bg-purple-400 px-4 py-2 text-white inline-flex items-center rounded"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
