import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setParamsThunk } from "../redux/userParams/operations.js";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const age = data.get("age");
    const height = data.get("height");
    const weight = data.get("weight");
    const chestCircumference = data.get("chestCircumference");
    const waistCircumference = data.get("waistCircumference");
    const hipCircumference = data.get("hipCircumference");
    const bicepsCircumference = data.get("bicepsCircumference");
    const calfCircumference = data.get("calfCircumference");
    const neckCircumference = data.get("neckCircumference");


    dispatch(
      setParamsThunk({
        age,
        height,
        weight,
        chestCircumference,
        waistCircumference,
        hipCircumference,
        bicepsCircumference,
        calfCircumference,
        neckCircumference
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="age"
        name="age"
        label="Age"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="height"
        name="height"
        label="Height"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="weight"
        name="weight"
        label="Weight"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="chestCircumference"
        name="chestCircumference"
        label="Chest circumference"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="waistCircumference"
        name="waistCircumference"
        label="Waist circumference"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        id="hipCircumference"
        name="hipCircumference"
        label="Hip circumference"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="bicepsCircumference"
        name="bicepsCircumference"
        label="Biceps circumference"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="calfCircumference"
        name="calfCircumference"
        label="Calf circumference"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        id="neckCircumference"
        name="neckCircumference"
        label="Neck circumference"
        variant="outlined"
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        save
      </Button>
    </form>
  );
};
