import { PostList } from "../components/PostList";

export default function Posts() {
  return (
    <main className="flex flex-col p-5">
      <div>Posts:</div>
      <PostList />
    </main>
  );
}
