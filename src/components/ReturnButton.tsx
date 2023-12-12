import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type ReturnButtonProps = {
  navigationParams: string;
};

export const ReturnButton: FC<ReturnButtonProps> = ({ navigationParams }) => {
  return (
    <>
      <NavLink to={navigationParams}>
        <IconButton
          aria-label="return-to-mainpage"
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
      </NavLink>
    </>
  );
};
