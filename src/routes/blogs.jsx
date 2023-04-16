import React, { useEffect } from "react";
import NavBar from "../components/NavBar.jsx";

import BlogCard from "../components/BlogCard.jsx";

const importModules = import.meta.glob("../mdx/*.mdx", {
  import: "frontMatter",
  eager: true,
});
const blogs = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const frontMatters = Object.entries(importModules).map(([path, module]) => {
      return module;
    });
    setPosts(frontMatters);
  }, []);
  return (
    <div>
      <NavBar />
      <div id="blogs-container">
        {posts.map((post, index) => (
          <BlogCard key={index} frontMatter={post} />
        ))}
      </div>
    </div>
  );
};

export default blogs;
