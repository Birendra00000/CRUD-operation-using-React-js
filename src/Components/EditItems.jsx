import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonRe from "./button.jsx/ButtonRe";
import { ImCross } from "react-icons/im";

function EditItems({ items, onUpdate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { name, city, age, email, phone, position, date } = items;
  const [data, setData] = useState({
    name: name,
    city: city,
    age: age,
    email: email,
    phone: phone,
    position: position,
    date: date,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [formData, setFormData] = useState([]);

  const handleFormData = () => {
    setFormData([...formData, onUpdate(data)]);

    handleClose();
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          {" "}
          <ButtonRe>
            <Button
              variant="primary"
              onClick={() => setShow(true)}
              className=" text-black w-[90px] h-10 text-center"
            >
              Edit
            </Button>
          </ButtonRe>
        </div>
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
            className="flex flex-col gap-2  h-[300px] justify-center"
          >
            <div className="grid grid-cols-3 text-center">
              <label className="col-span-1">FirstName</label>
              <input
                type="text"
                className="border border-amber-600 col-span-2 w-2/3"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="grid grid-cols-3 text-center">
              <label className="col-span-1">Age</label>
              <input
                type="number"
                className="border border-amber-600 col-span-2 w-2/3 "
                name="age"
                value={data.age}
                onChange={handleChange}
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
                value={data.city}
                onChange={handleChange}
              />{" "}
              <br />
            </div>
            <div className="grid grid-cols-3 text-center">
              <label className="col-span-1">Email</label>
              <input
                type="email"
                className="border border-amber-600 col-span-2 w-2/3"
                name="email"
                value={data.email}
                onChange={handleChange}
              />{" "}
              <br />
            </div>
            <div className="grid grid-cols-3 text-center">
              <label className="col-span-1">PhoneNumber</label>
              <input
                type="text"
                className="border border-amber-600 col-span-2 w-2/3"
                name="phone"
                value={data.phone}
                onChange={handleChange}
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
                value={data.position}
                onChange={handleChange}
              />{" "}
              <br />
            </div>
            <div className="grid grid-cols-3 text-center">
              <label className="col-span-1">Date</label>
              <input
                type="date"
                className="border border-amber-600 col-span-2 w-2/3"
                name="date"
                value={data.date}
                onChange={handleChange}
              />{" "}
            </div>
            <br />
          </form>
          <Button
            variant="outline-primary"
            onClick={handleFormData}
            className="w-20 text-center ml-auto mr-auto mb-2 "
          >
            Submit{" "}
          </Button>{" "}
        </Modal>
      </div>
    </>
  );
}

export default EditItems;
