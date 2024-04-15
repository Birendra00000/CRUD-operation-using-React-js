import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import AdminPage from "./AdminPage";

function CreateUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [data, setData] = useState({
    firstName: "",
    age: "",
    city: "",
    email: "",
    phone: "",
    position: "",
    date: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [formData, setFormData] = useState([]);
  console.log("Data", formData);
  const handleFormData = () => {
    setFormData([
      ...formData,
      {
        name: data.firstName,
        age: data.age,
        email: data.email,
        city: data.city,
        phone: data.phone,
        position: data.position,
        date: data.date,
      },
    ]);
    setData({
      firstName: "",
      age: "",
      email: "",
      city: "",
      phone: "",
      position: "",
      date: "",
    });
    handleClose();
  };

  return (
    <>
      <div className=" w-full flex flex-col ">
        <div className="h-[150px] flex items-center justify-center ">
          <div className="flex justify-center">
            {" "}
            <Button
              variant="primary"
              onClick={() => setShow(true)}
              className=" text-blue-700 w-[150px] text-center text-sm lg:text-lg"
            >
              New User
            </Button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            className=" "
          >
            <form
              action="
"
              className="flex flex-col gap-2 h-[250px] lg:h-[300px] justify-center "
            >
              <div className="grid grid-cols-3 text-center">
                <label className="col-span-1 text-sm lg:text-lg">
                  FirstName
                </label>
                <input
                  type="text"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="grid grid-cols-3 text-center">
                <label className="col-span-1 text-sm lg:text-lg">Age</label>
                <input
                  type="number"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="age"
                  value={data.age}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div className="grid grid-cols-3 text-center">
                {" "}
                <label className="col-span-1 text-sm lg:text-lg">City</label>
                <input
                  type="text"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div className="grid grid-cols-3 text-center">
                <label className="col-span-1 text-sm lg:text-lg">Email</label>
                <input
                  type="email"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div className="grid grid-cols-3 text-center">
                <label className="col-span-1 text-sm lg:text-lg">
                  PhoneNumber
                </label>
                <input
                  type="text"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div className="grid grid-cols-3 text-center">
                {" "}
                <label className="col-span-1 text-sm lg:text-lg">
                  Position
                </label>
                <input
                  type="text"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
                  name="position"
                  value={data.position}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div className="grid grid-cols-3 text-center">
                <label className="col-span-1 text-sm lg:text-lg">Date</label>
                <input
                  type="date"
                  className="border border-amber-600 col-span-2 w-2/3 text-sm lg:text-lg"
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
              className="w-20 text-center ml-auto mr-auto mb-2 text-sm lg:text-lg"
            >
              Submit{" "}
            </Button>{" "}
          </Modal>
        </div>
      </div>
      <AdminPage formData={formData} setFormData={setFormData} />
    </>
  );
}

export default CreateUser;
