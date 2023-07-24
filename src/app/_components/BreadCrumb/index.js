"use client"
import { Breadcrumb } from "react-bootstrap";

const AppBreadCrumb = ({ href, currentTitle }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href={href}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{currentTitle}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default AppBreadCrumb;
