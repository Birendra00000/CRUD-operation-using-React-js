import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImCross } from "react-icons/im";

const ViewItems = ({ items }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="outline-success"
        className="text-black w-[90px] text-center h-10"
        onClick={handleShow}
      >
        View
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <div className="w-[95%] flex justify-end h-[50px] items-center">
          <Button
            variant="outline-warning"
            className=" w-10 h-8 flex justify-center items-center"
            onClick={handleClose}
          >
            <ImCross />
          </Button>{" "}
        </div>
        <form
          action="
"
          className="flex flex-col gap-2  h-[240px] justify-center"
        >
          <div className="grid grid-cols-3 text-center">
            <label className="col-span-1">FirstName</label>
            <input
              type="text"
              className="border border-amber-600 col-span-2 w-2/3"
              name="name"
              value={items.name}
              // onChange={handleChange}
            />
          </div>
          <br />
          <div className="grid grid-cols-3 text-center">
            <label className="col-span-1">Age</label>
            <input
              type="number"
              className="border border-amber-600 col-span-2 w-2/3 "
              name="age"
              value={items.age}
              // onChange={handleChange}
            />{" "}
            <br />
          </div>
          <div className="grid grid-cols-3 text-center">
            {" "}
            <label className="col-span-1">City</label>
            <input
              type="text"
              className="border border-amber-600 col-span-2 w-2/3"
              name="city"
              value={items.city}
              // onChange={handleChange}
            />{" "}
            <br />
          </div>
          <div className="grid grid-cols-3 text-center">
            <label className="col-span-1">Email</label>
            <input
              type="email"
              className="border border-amber-600 col-span-2 w-2/3"
              name="email"
              value={items.email}
              // onChange={handleChange}
            />{" "}
            <br />
          </div>
          <div className="grid grid-cols-3 text-center">
            <label className="col-span-1">PhoneNumber</label>
            <input
              type="text"
              className="border border-amber-600 col-span-2 w-2/3"
              name="phone"
              value={items.phone}
              // onChange={handleChange}
            />{" "}
            <br />
          </div>
          <div className="grid grid-cols-3 text-center">
            {" "}
            <label className="col-span-1">Position</label>
            <input
              type="text"
              className="border border-amber-600 col-span-2 w-2/3"
              name="position"
              value={items.position}
              // onChange={handleChange}
            />{" "}
            <br />
          </div>
          <div className="grid grid-cols-3 text-center">
            <label className="col-span-1">Date</label>
            <input
              type="date"
              className="border border-amber-600 col-span-2 w-2/3"
              name="date"
              value={items.date}
              // onChange={handleChange}
            />{" "}
          </div>
          <br />
        </form>
        <div className="flex gap-4 justify-center items-center">
          <Button
            variant="outline-primary"
            // onClick={handleFormData}
            className="w-20 text-center ml-auto mr-auto mb-2 "
            disabled
          >
            Submit{" "}
          </Button>{" "}
        </div>
      </Modal>
    </>
  );
};

export default ViewItems;
