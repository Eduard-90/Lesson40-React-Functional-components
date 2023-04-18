import React from "react";

function ArticleAuthor(props) {
  return (
    <div className="article__author">
      <p className="article__author--name">{props.text.author}</p>
      <p className="article__author--date">{props.text.published}</p>
      <p className="article__author--theme">{props.text.theme}</p>
    </div>
  );
}
export default ArticleAuthor;
