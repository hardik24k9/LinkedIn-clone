/* eslint-disable no-unused-vars */
import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("S&P 500 reaches all time high", "Top News - 9099 readers")}
      {newsArticle("Coronavirus: US updates", "Top News - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
      {newsArticle("Bitcoin Breaks $55k", "Crypto - 8000 readers")}
      {newsArticle("React v.17 is here!", "Code - 123 readers")}
    </div>
  );
}

export default Widgets;
