import React from "react";
import "./App.css";
import Header from './header.js';
import Links from "./links"
import Column from "./column"


const left_posts = [
    {title: "This is my life", description: "If you want to know more about me, call me"},
    {title: "Peace", description: "I believe in peace"},
    {title: "Heart", description: "Love, Love and Love"},
];

const right_posts = [
    {title: "Soul", description: "The name of my dog :)"},
    {title: "Dance", description: "My best hobby"},
];
function Blog() {
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-content">
        <Links/>
        <Column posts={left_posts} className="left-column"/>
        <Column posts={right_posts} className="right-column"/>
      </div>
    </div>
  );
}

export default Blog;

