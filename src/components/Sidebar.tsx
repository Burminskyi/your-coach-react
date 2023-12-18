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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";

type SidebarProps = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const Sidebar: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
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
      </Box>
    </Box>
  );
};
