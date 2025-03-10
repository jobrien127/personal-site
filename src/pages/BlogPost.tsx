import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder for fetching blog post data
  const blogPost = {
    title: `Blog Post ${id}`,
    content: `This is the content for blog post ${id}.`,
  };

  return (
    <div className="blog-post">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
