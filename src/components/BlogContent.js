import React from "react";

function BlogContent(props) {
  if(!props.isPublished){
    return null;
  } else{
    return (
      <div id="blog-content">{props.articleText}
        <h1>{props.isPublished}</h1>
        <p>minutesToRead: {props.minutesToRead} </p>
      </div>
    )
  }
}

export default BlogContent;
