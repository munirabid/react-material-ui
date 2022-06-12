import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const categories = [
  {
    id: "Components",
    children: [
      {
        id: "Functional",
        icon: <PeopleIcon />,
        path: "/functional",
      },
      { id: "Logical", icon: <DnsRoundedIcon />, path: "/logical" },
      { id: "Physical", icon: <PermMediaOutlinedIcon />, path: "/physical" },
    ],
  },
  {
    id: "Architecture",
    children: [
      { id: "Trees", icon: <SettingsIcon />, path: "/trees" },
      { id: "Allocations", icon: <TimerIcon />, path: "/allocations" },
      { id: "Communality", icon: <PhonelinkSetupIcon />, path: "/communality" },
    ],
  },
  {
    id: "Definations",
    children: [
      { id: "Units", icon: <SettingsIcon />, path: "/units" },
      { id: "Item Flow", icon: <TimerIcon />, path: "/itemflow" },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { pathname } = useLocation();
  console.log(pathname);
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Learning
        </ListItem>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => (
              <Link to={path} style={{ textDecoration: "none" }}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    selected={pathname.includes(path) ? true : false}
                    sx={item}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
