"use client";
import { createPost } from "@/app/api/Posts";
import PostForm from "@/components/PostForm";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";

import { v4 as uuidv4 } from "uuid";

export default function AddNewPost() {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ querykey: ["posts"] });
      console.log("success");
    },
  });

  const handleAddPost = (formData) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...formData,
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold">New Post</h2>
      <PostForm onSubmit={handleAddPost} InitialValue={{}} />
    </div>
  );
}
