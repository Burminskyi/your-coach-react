import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Loader } from "./Loader";

type CustomTheme = {
  palette: {
    mode: "light" | "dark";
  };
};

const SharedLayout = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const darkTheme: CustomTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Stack>
          {/* <Add /> */}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default SharedLayout;
