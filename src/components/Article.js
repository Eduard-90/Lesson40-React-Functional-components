import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children}
    <ArticleBody show={props.show} text={props.text} />
    <ArticleAuthor /> 
    </>
    );
  }
  export default Article;


