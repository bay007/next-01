import PostDetail from "../../components/PostDetail";

export default function postDetail({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center">
      <PostDetail />
      {children}
    </main>
  );
}
