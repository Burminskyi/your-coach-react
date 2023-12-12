import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import image from "../assets/LEFT-Mandem-01.png";
import { Link } from "react-router-dom";

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "30px",
});

export const AuthSection = () => {
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "#70aad4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* <img src={image} alt="Your coach" style={{ maxWidth: "200px" }} /> */}
      <Typography
        sx={{
          fontSize: "96px",
          fontFamily: "Nova Square",
          textAlign: "center",
        }}
      >
        Your Coach
      </Typography>
      <ButtonBox>
        <Link to="/register">
          <Button variant="outlined" size="large" color="secondary">
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" size="large" color="secondary">
            Sign in
          </Button>
        </Link>
      </ButtonBox>
    </Box>
  );
};
