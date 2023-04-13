import React from "react";

function ArticleBody(props) {
return (
        <div className="article__body">
          <h3 className="article__description">
            {!props.show && props.text.description }
          </h3>
          <p className="article__text">
            {props.show ? props.text.content : props.text.preview }
          </p>
        </div>)}
export default ArticleBody;