export async function fetchPosts() {
  const res = await fetch("http://localhost:3001/posts");
  return res.json();
}
export async function fetchPost(id) {
  const res = await fetch(`http://localhost:3001/posts/${id}`);
  return res.json();
}

export async function createPost(newPost) {
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return res.json();
}

export async function updatePost(updatedPost) {
  const res = await fetch(`http://localhost:3001/posts/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  return res.json();
}
export async function deletePost(id) {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
