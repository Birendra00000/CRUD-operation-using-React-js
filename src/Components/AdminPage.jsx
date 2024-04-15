import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ViewItems from "./ViewItems";
import EditItems from "./EditItems";
import ButtonRe from "./button.jsx/ButtonRe";
import Button from "react-bootstrap/Button";

// import DeleteItems from "./DeleteItems";

const AdminPage = ({ formData, setFormData }) => {
  const updateFormData = (updatedItem) => {
    // Find the index of the item to be updated
    const index = formData.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      // Create a copy of the formData array
      const updatedFormData = [...formData];
      // Update the item at the found index with the updated item
      updatedFormData[index] = updatedItem;
      // Update the state with the updated formData
      setFormData(updatedFormData);
    }
  };

  return (
    <>
      <table className="flex flex-col justify-center mt-4 overflow-x-scroll">
        <thead className=" ">
          <tr className="grid grid-rows-18 grid-flow-col gap-2 text-center text-sm lg:text-lg  ">
            <th className="w-[50px]">S.N.</th>
            <th className="w-[100px]">Name</th>
            <th className="w-[100px]">Age</th>
            <th className="w-[200px]">City</th>
            <th className="w-[200px]">Email</th>
            <th className="w-[100px]">Phone</th>
            <th className="w-[150px]">Position</th>
            <th className="w-[100px]">Start Date</th>
            <th className="w-[300px]">Action</th>
          </tr>
        </thead>
        {formData &&
          formData.map((item, index) => {
            return (
              <>
                <tbody>
                  <tr
                    className="grid grid-rows-9 grid-flow-col gap-2 text-center text-sm lg:text-lg"
                    key={item.date}
                  >
                    {console.log("Item", item.id)}
                    <th className="w-[50px]">{index++}</th>
                    <td className="w-[100px]">{item.name}</td>
                    <td className="w-[100px]">{item.age}</td>
                    <td className="w-[200px]">{item.city}</td>
                    <td className="w-[200px]">{item.email}</td>
                    <td className="w-[100px]">{item.phone}</td>
                    <td className="w-[150px]">{item.position}</td>
                    <td className="w-[100px]">{item.date}</td>
                    <td className="w-[300px] flex gap-x-2 justify-center">
                      {" "}
                      <ViewItems items={item} />
                      <EditItems items={item} onUpdate={updateFormData} />
                      <ButtonRe>
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            setFormData(
                              formData.filter((a) => a.id == !item.id)
                            );
                          }}
                          className=" text-black w-[90px] h-10 text-center"
                        >
                          Delete
                        </Button>
                      </ButtonRe>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
      </table>
    </>
  );
};

export default AdminPage;
