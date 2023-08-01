"use client";

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";

import {
  AppBox,
  AppCard,
  AppText,
  AppButton,
  AppPagination,
} from "@/app/_components";

const NewsListItem = ({
  title,
  description,
  link: { href, title: linkTitle, anchorTitle },
}) => {
  const newsListItemcx = classNames({
    "p-5": true,
    "d-flex flex-lg-row flex-md-row flex-sm-column flex-column": true,
    "justify-content-between align-items-center": true,
  });

  return (
    <AppCard isShadow>
      <AppBox className={newsListItemcx}>
        <AppBox className="news-info">
          <AppText
            render={() => (
              <>
                <h4>{title}</h4>
                <small>{description}</small>
              </>
            )}
          />
        </AppBox>
        <AppBox className="news-read-more">
          <AppButton
            variant="themeBtn"
            title={linkTitle}
            href={href}
            anchorTitle={anchorTitle}
          />
        </AppBox>
      </AppBox>
    </AppCard>
  );
};

const NewsList = ({ activeKey, data }) => {
  return (
    <>
      {data.map((news, key) => (
        <AppBox className="mb-3" key={key}>
          <NewsListItem {...news} />
        </AppBox>
      ))}
      <AppPagination />
    </>
  );
};

export default NewsList;
