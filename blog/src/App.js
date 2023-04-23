import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>This is my blog</h1>
      <a href="#">Login</a>
    </header>
  );
}

function Links() {
  return (
    <div className="links">
      <a href="#">Home</a>
      <a href="#">About Me</a>
      <a href="#">Contact Me</a>
    </div>
  );
}

function Rectangle(props) {
  return (
    <div className="rectangle">
      <a href="#">{props.title}</a>
      <p>{props.description}</p>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="left-column">
      <Links />
      <Rectangle title="This is my life" description="If you want to know more about me, call me" />
      <Rectangle title="Peace" description="I believe in peace" />
      <Rectangle title="Heart" description="Love, Love and Love" />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="right-column">
      <Rectangle title="Soul" description="The name of my dog :)" />
      <Rectangle title="Dance" description="My best hobby" />
    </div>
  );
}

function Blog() {
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-content">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default Blog;

