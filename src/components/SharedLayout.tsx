import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import { selectAuthenticationStatus } from "../redux/auth/selectors";

type CustomTheme = {
  palette: {
    mode: "light" | "dark";
  };
};

const SharedLayout = () => {
  const authenticated = useSelector(selectAuthenticationStatus);
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const darkTheme: CustomTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  if (!authenticated) return <Navigate to="/" />;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <div
          style={{
            maxWidth: "1470px",
            margin: "auto",
            position: "relative",
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Box flex={5} p={4} sx={{ minHeight: "100vh" }}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </Box>
          </Stack>
          {/* <Add /> */}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default SharedLayout;
