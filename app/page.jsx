import PostList from "@/components/PostList";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <h1 className="font-bold text-3xl mt-7">Awesome Blog</h1>
      <PostList />
    </main>
  );
}
