import React, { useEffect, useState } from "react";

const HeadlinesColumn = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("test.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHeadlines(res.headlines);
      });
  }, []);
  return (
    <div className="headlines-column">
      <h1 className="headlines-header">New</h1>
      <ul className="headlines-list">
        {headlines.map((h) => (
          <li key={h.id} className="headlines-item">
            <h2 className="headlines-h2">{h.title}</h2>
            <p className="headlines-blurb">{h.blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadlinesColumn;
