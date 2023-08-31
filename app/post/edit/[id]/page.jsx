"use client";
import { fetchPost, updatePost } from "@/app/api/Posts";
import PostForm from "@/components/PostForm";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function EditPost({ params }) {
  const router = useRouter();
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

  const queryClient = useQueryClient();

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ querykey: ["posts"] });
      console.log("success");
      router.push("/");
    },
  });

  console.log(post);
  if (isLoading) return "Loading .....";
  if (isError) return `${error.message}`;

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({
      id,
      ...updatedPost,
    });
  };
  return (
    <div>
      <PostForm InitialValue={post} onSubmit={handleSubmit} />
    </div>
  );
}
