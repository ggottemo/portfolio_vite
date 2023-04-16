import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ frontMatter }) => {
  const { title, date, tags, excerpt, slug, fileName } = frontMatter;

  return (
    <div className="blog-card">
      <h2 className="blog-card-title">
        <Link to={`/blog/${fileName}`} className="blog-card-title-link">
          {title}
        </Link>
      </h2>
      <p className="blog-card-date">{date}</p>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="blog-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
