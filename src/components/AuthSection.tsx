import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import image from "../assets/31266204_7786995.svg";

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const AuthSection = () => {
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "greenyellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={image} alt="Your coach" style={{ width: "300px" }} />
      <Typography sx={{ fontSize: "96px" }}>YourCoach</Typography>
      <ButtonBox>
        <Button variant="text">Sign Up</Button>
        <Button variant="contained">Log In</Button>
      </ButtonBox>
    </Box>
  );
};