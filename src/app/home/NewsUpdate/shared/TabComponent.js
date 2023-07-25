"use client";

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { AppBox } from "@/app/_components";

import { newsUpdate } from "@/app/data";

// Use the default Pagination Component In react bootstrap
// And change this in to an root component
// url : https://react-bootstrap.netlify.app/docs/components/pagination

function Pagination() {
  return (
    <div className="pagination-wrap">
      <ul className="pagination justify-content-center m-0">
        <li className="page-item disabled">
          <a className="page-link border-0">
            <i>
              <img src="./icons/chevron-left.svg" alt="" />
            </i>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link border-0 text-center" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link page-link-active border-0 text-center text-white"
            href="#"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link border-0 text-center" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link border-0" href="#">
            Next{" "}
            <i>
              <img src="./icons/chevron-right.svg" alt="" />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

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

const TabItemComponent = ({ activeKey }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    return () => {
      setLoading(true);
    };
  }, [activeKey]);

  return (
    <>
      {loading ? (
        <AppBox className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" size="lg" />
        </AppBox>
      ) : (
        <>
          {newsUpdate.map((news, key) => (
            <TabContentComponent {...news} key={key} />
          ))}
          <Pagination />
        </>
      )}
    </>
  );
};

export default TabItemComponent;
