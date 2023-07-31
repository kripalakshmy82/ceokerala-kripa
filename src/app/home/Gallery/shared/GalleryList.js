"use client";

import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { AppBox, InfoCard } from "@/app/_components";

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
            {data.map(({ id, ...rest }) => (
              <InfoCard
                key={id}
                {...rest}
                className="p-5"
                playIcon={activeKey === "videos"}
              />
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
