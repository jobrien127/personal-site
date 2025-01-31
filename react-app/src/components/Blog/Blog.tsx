// src/components/Blog.tsx
import React from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'In Progress',
    excerpt: 'Excerpt from future post..',
    date: 'January 15, 2025',
    link: '/blog/how-i-built-my-personal-website',
    content: 'This section is currently under contruction. Please check back later for updates.',
  },
//   {
//     id: 2,
//     title: 'React vs Vue: Which One Should You Learn?',
//     excerpt: 'I compare React and Vue.js, two popular JavaScript frameworks...',
//     date: 'February 1, 2025',
//     link: '/blog/react-vs-vue',
//   },
//   {
//     id: 3,
//     title: 'Exploring the Basics of Machine Learning',
//     excerpt: 'A beginner’s guide to understanding machine learning and how to get started...',
//     date: 'February 10, 2025',
//     link: '/blog/exploring-the-basics-of-machine-learning',
//   },
];

const Blog: React.FC = () => {
  return (
    <section id="blog">
      <h2>My Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <p className="blog-date">{post.date}</p>
            <p className='blog-content'>{post.content}</p>
            <a href={post.link} className="read-more">
              Read more...
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;