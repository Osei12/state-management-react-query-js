import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <header>
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            className="btn btn-outline hover:bg-transparent hover:text-black"
            href="/post/new"
          >
            Add New Post
          </Link>
        </li>
      </ul>
    </header>
  );
}
