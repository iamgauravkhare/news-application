import React from "react";

import Side from "../../sideContent/side/Side";
import Comment from "../comment/Comment";
import Sponsored from "../Sponsored/Sponsored";
import AllNews from "../All_News/AllNews";
import NewsFeature from "../NewsFeature/NewsFeature";
import "./style.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <NewsFeature />
            <Comment />
            <Sponsored />
            <AllNews />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
