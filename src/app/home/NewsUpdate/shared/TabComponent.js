"use client";

import { newsUpdate } from "@/app/data";

const TabContentComponent = ({ heading, description, href }) => {
  return (
    <div className="news-item-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center shadow rounded-theme p-5 mb-3">
      <div className="flex-news-item">
        <h4>{heading}</h4>
        <small>{description}</small>
      </div>
      <div className="flex-news-btn">
        <a href={href} className="theme-btn-component btn-theme border-theme">
          Read more
        </a>
      </div>
    </div>
  );
};

const TabItemComponent = () => {
  return (
    <>
      {newsUpdate.map((news, key) => (
        <TabContentComponent {...news} key={key} />
      ))}
      <p>pagination Component</p>
    </>
  );
};


export default TabItemComponent;
