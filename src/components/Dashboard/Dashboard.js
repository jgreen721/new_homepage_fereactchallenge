import React from "react";
import TopRow from "./TopRow";
import MainSection from "./MainSection";
import HeadlinesColumn from "./HeadlinesColumn";
import Articles from "./Articles";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-container">
      <TopRow>
        <MainSection />
        <HeadlinesColumn />
      </TopRow>
      <Articles />
    </div>
  );
};

export default Dashboard;
