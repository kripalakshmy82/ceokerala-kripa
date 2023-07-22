"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import AppNav from "./components/Nav";
import AppCanvas from "./components/OffCanvas";

const language = [
  { id: 1, option: "English" },
  { id: 2, option: "Malayalam" },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header id="header">
        <AppNav>
          <Form.Select
            className="bg-transparent border-0"
            aria-label="Default select example"
          >
            {language.map(({ id, option }, key) => (
              <option value={id} key={key}>
                {option}
              </option>
            ))}
          </Form.Select>

          <Button
            variant="secondary"
            className="bg-transparent border-0"
            onClick={() => handleShow()}
          >
            <i>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="gray"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1"
              >
                <line x1="21" y1="10" x2="7" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="7" y2="18"></line>
              </svg>
            </i>
          </Button>
        </AppNav>
      </header>
      <AppCanvas show={show} onHide={handleClose} />
    </>
  );
};

export default Header;
