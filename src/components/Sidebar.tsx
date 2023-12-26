import {
  AccountBox,
  BarChart,
  Bedtime,
  Bookmark,
  CalendarMonth,
  FitnessCenter,
  PlaylistAdd,
} from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutThunk } from "../redux/auth/operations";

type SidebarProps = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const Sidebar: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const dispatch = useDispatch();

  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(logoutThunk());
  };

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" sx={{ height: "100vh" }}>
        <List>
          <ListItem disablePadding>
            <Link
              to="/calendar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <CalendarMonth />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/workouts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <PlaylistAdd />
                </ListItemIcon>
                <ListItemText primary="My workouts" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/statistics"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/exercises"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <FitnessCenter />
                </ListItemIcon>
                <ListItemText primary="Exercises" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/favorites"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <Bookmark />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton component="div">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="button">
              <ListItemIcon>
                <Bedtime />
              </ListItemIcon>
              <Switch onChange={handleModeChange} />
            </ListItemButton>
          </ListItem>
        </List>
        <Button onClick={handleLogout}>Log Out</Button>
      </Box>
    </Box>
  );
};
