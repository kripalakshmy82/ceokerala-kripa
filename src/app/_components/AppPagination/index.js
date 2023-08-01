import { AppBox } from "../Elements";
import { Pagination } from "react-bootstrap";

export default function AppPagination() {
  return (
    <AppBox className="pagination-wrap">
      <Pagination className="pagination justify-content-center m-0">
        <Pagination.Prev disabled />
        <Pagination.Item className="border-0 text-center">{1}</Pagination.Item>
        <Pagination.Item active className="border-0 text-center page-link-active">{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item className="border-0 text-center">{10}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </AppBox>
  );
}
