import { CardContent, Typography } from "@mui/material";
import React from "react";

export const ParamsCard = ({ params }) => {
  const {
    date,
    weight,
    chestCircumference,
    waistCircumference,
    hipCircumference,
    bicepsCircumference,
    calfCircumference,
    neckCircumference,
  } = params;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      {date && <strong style={{marginBottom:"12px"}}>{date.slice(0, 10)}</strong>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap:"4px"
        }}
      >
        <p>Weight: {weight} kg</p>
        <p>Chest: {chestCircumference} sm</p>
        <p>Waist: {waistCircumference} sm</p>
        <p>Hip: {hipCircumference} sm</p>
        <p>Biceps: {bicepsCircumference} sm</p>
        <p>Calf: {calfCircumference} sm</p>
        <p>Neck: {neckCircumference} sm</p>
      </div>
    </div>
  );
};
