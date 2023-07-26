"use client";

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";

import { AppBox, AppCard, AppText, AppButton } from "@/app/_components";

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
            Next
            <i>
              <img src="./icons/chevron-right.svg" alt="" />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

const NewsListItem = ({ heading, description, href }) => {
  const newsListItemcx = classNames({
    "p-5 mb-3": true,
    "d-flex flex-lg-row flex-md-row flex-sm-column flex-column": true,
    "justify-content-between align-items-center": true,
  });

  return (
    <AppCard className={newsListItemcx} isShadow>
      <AppBox className="news-info">
        <AppText
          render={() => (
            <>
              <h4>{heading}</h4>
              <small>{description}</small>
            </>
          )}
        />
      </AppBox>
      <AppBox className="news-read-more">
        <AppButton variant="themeBtn" title="Read more" href={href} />
      </AppBox>
    </AppCard>
  );
};

const NewsList = ({ activeKey }) => {
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
            <NewsListItem {...news} key={key} />
          ))}
          <Pagination />
        </>
      )}
    </>
  );
};

export default NewsList;