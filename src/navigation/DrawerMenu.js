import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  GridOn,
  Home,
  Info,
  LocalFlorist,
} from "@mui/icons-material";

const DrawerMenu = ({ currUser, open, onClose }) => {
  const nav = useNavigate();

  const profile = (
    <ListItem key="profile" onClick={onClose}>
      <ListItemButton onClick={() => nav("/profile")}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
  );

  const plants = (
    <ListItem key="plants" onClick={onClose}>
      <ListItemButton onClick={() => nav("/plants")}>
        <ListItemIcon>
          <LocalFlorist />
        </ListItemIcon>
        <ListItemText primary="Plants" />
      </ListItemButton>
    </ListItem>
  );

  const gardens = (
    <ListItem key="gardens" onClick={onClose}>
      <ListItemButton onClick={() => nav("/gardens")}>
        <ListItemIcon>
          <GridOn />
        </ListItemIcon>
        <ListItemText primary="Gardens" />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Button startIcon={<Close />} onClick={onClose}>
        Close
      </Button>
      <List>
        <ListItem onClick={onClose}>
          <ListItemButton onClick={() => nav("/")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {currUser ? [profile, plants, gardens] : null}
        <ListItem onClick={onClose}>
          <ListItemButton onClick={() => nav("/about")}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
