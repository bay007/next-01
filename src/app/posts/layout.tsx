import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Posts</Breadcrumb.Item>
      </Breadcrumb>
      {children}
    </>
  );
}
