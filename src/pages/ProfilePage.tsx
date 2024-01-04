import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setParamsThunk } from "../redux/userParams/operations.js";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().split('T')[0]; 
  const [userParams, setUserParams] = useState({
    date: currentDate,
    age: "",
    height: "",
    weight: "",
    chestCircumference: "",
    waistCircumference: "",
    hipCircumference: "",
    bicepsCircumference: "",
    calfCircumference: "",
    neckCircumference: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setParamsThunk(userParams));

    setUserParams({
      date: currentDate,
      age: "",
      height: "",
      weight: "",
      chestCircumference: "",
      waistCircumference: "",
      hipCircumference: "",
      bicepsCircumference: "",
      calfCircumference: "",
      neckCircumference: "",
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserParams((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="date"
        id="date"
        name="date"
        value={userParams.date}
        onChange={handleInputChange}
      />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="age"
        name="age"
        label="Age"
        variant="outlined"
        value={userParams.age}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="height"
        name="height"
        label="Height"
        variant="outlined"
        value={userParams.height}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="weight"
        name="weight"
        label="Weight"
        variant="outlined"
        value={userParams.weight}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="chestCircumference"
        name="chestCircumference"
        label="Chest circumference"
        variant="outlined"
        value={userParams.chestCircumference}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="waistCircumference"
        name="waistCircumference"
        label="Waist circumference"
        variant="outlined"
        value={userParams.waistCircumference}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        id="hipCircumference"
        name="hipCircumference"
        label="Hip circumference"
        variant="outlined"
        value={userParams.hipCircumference}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="bicepsCircumference"
        name="bicepsCircumference"
        label="Biceps circumference"
        variant="outlined"
        value={userParams.bicepsCircumference}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="calfCircumference"
        name="calfCircumference"
        label="Calf circumference"
        variant="outlined"
        value={userParams.calfCircumference}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="neckCircumference"
        name="neckCircumference"
        label="Neck circumference"
        variant="outlined"
        value={userParams.neckCircumference}
        onChange={handleInputChange}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        save
      </Button>
    </form>
  );
};
