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
            <ListItemButton component="a" href="#calendar">
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#workouts">
              <ListItemIcon>
                <PlaylistAdd />
              </ListItemIcon>
              <ListItemText primary="My workouts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#statistics">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#exercises">
              <ListItemIcon>
                <FitnessCenter />
              </ListItemIcon>
              <ListItemText primary="Exercises" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#favorites">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
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
