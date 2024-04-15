import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import ButtonRe from "./button.jsx/ButtonRe";
const DeleteItems = ({ items }) => {
  const { date } = items;

  const [show, setShow] = useState(false);
  const [deleteId, setDelete] = useState(date);

  const handleDelete = () => setDelete();

  const handleClose = () => setShow(false);

  return (
    <div>
      {" "}
      <ButtonRe>
        <Button variant="outline-danger" onClick={() => setShow(true)}>
          Delete
        </Button>
      </ButtonRe>
      <Modal show={show} onHide={handleClose} animation={false}>
        <div className="text-center mb-2">
          Are you sure You want to delete this item?
        </div>
        <div className="flex justify-end w-[95%] gap-3 mb-3">
          <div>
            <ButtonRe className="">
              <Button variant="outline-secondary" onClick={handleClose}>
                No
              </Button>{" "}
            </ButtonRe>
          </div>
          <div>
            <ButtonRe onClick={handleDelete}>
              {" "}
              <Button variant="outline-danger">Yes</Button>{" "}
            </ButtonRe>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteItems;
