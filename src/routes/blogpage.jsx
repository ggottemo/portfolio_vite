import { useLoaderData } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar.jsx";

export const loader = async ({ params }) => {
  const { slug } = params;
  console.log(`slug: ${slug}`);
  const module = await import(`../mdx/${slug}.mdx`);
  return module.default;
};

const BlogPage = () => {
  const Content = useLoaderData();

  return (
    <div>
      <NavBar />
      <div id="blogs-container">
        <Content />
      </div>
    </div>
  );
};

export default BlogPage;
