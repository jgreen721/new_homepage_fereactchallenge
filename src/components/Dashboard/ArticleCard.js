import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-col article-img-col">
        <img className="article-img" src={article.img} alt="img" />
      </div>
      <div className="article-col article-content-col">
        <h1 className="article-h1">0{article.id}</h1>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-blurb">{article.blurb}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
