import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("test.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setArticles(res.articles);
      });
  }, []);
  return (
    <div className="articles-row">
      {articles.length &&
        articles.map((a) => <ArticleCard key={a.id} article={a} />)}
    </div>
  );
};

export default Articles;
