import React from "react";
import "./BlogPost.css";

//Images
import PImg1 from "./img/postimg1.jpg";
import PImg2 from "./img/postimg2.jpg";
import PImg3 from "./img/postimg3.jpg";

function index() {
  return (
    <div className="blogpost-wrapper">
      <h1>blog posts</h1>
      <div className="blogpost-inner">
        <BlogCard
          img={PImg1}
          title="Few quips galvanized the mock jury box"
          text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog."
        />
          <BlogCard
          img={PImg2}
          title="A quick movement of the enemy will jeopardize six gunboats"
          text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog."
        />
          <BlogCard
          img={PImg3}
          title="Brawny gods just flocked up to quiz and vex him"
          text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog."
        />
      </div>
    </div>
  );
}

const BlogCard = ({ img, title, text }) => {
  return (
    <div className="blog-card">
      <img src={img} alt="aa" />
      <div className="data">
        <p>april 1, 2021</p>
        <p>In UNCATEGORIZED</p>
      </div>
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
      <a href="/">Continue Reading</a>
    </div>
  );
};

export default index;
