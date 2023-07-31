"use client";

import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { AppBox } from "@/app/_components";

const GalleryCard = ({ imgUrl, alt, href, heading, description, type }) => {
  return (
    <div className="card card-item theme-card overflow-hidden border-0 shadow-sm position-relative">
      <img src={imgUrl} className="card-img-top" alt={alt} />
      {type === "videos" && (
        <span className="m-auto d-block position-absolute video-icon">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#5f4bdb"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </span>
      )}
      <div className="card-body p-5 theme-gap">
        <h5 className="card-title">
          <a
            href={href}
            className="stretched-link text-decoration-none text-dark"
          >
            {heading}
          </a>
        </h5>
        <p className="card-text mb-0">{description}</p>
      </div>
    </div>
  );
};

const GalleryList = ({ activeKey, data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
          <AppBox className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
            {data.map((item, key) => (
              <GalleryCard type={activeKey} key={key} {...item} />
            ))}
          </AppBox>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button className="theme-btn-component btn-theme btn-theme-fill border-0 shadow">
              See more {activeKey === "images" ? "Images" : "Videos"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default GalleryList;
