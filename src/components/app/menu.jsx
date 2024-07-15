"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ALL_PRIVILEGES from "@/common/PRIVILEGES";
import { IconDynamic } from "../common/icon_dynamic";
import { signOut } from "next-auth/react";
import Link from "next/link";

const drawerWidth = 240;

function MenuApp(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const MENU_APP = Object.keys(ALL_PRIVILEGES.PRIVILEGES);
  const MENU_APP_PROFILE = MENU_APP.filter(
    (item) => ALL_PRIVILEGES.PRIVILEGES[item].module === "profile"
  );
  const MENU_APP_NATURAL = MENU_APP.filter(
    (item) => ALL_PRIVILEGES.PRIVILEGES[item].module === "natural"
  );

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          sx={{
            // height: 60,
            width: 120,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            display: { xs: "none", md: "flex" },
            mr: 1,
          }}
          alt="logo siartec"
          src="/img/logo.png"
        />
        <Box
          component="img"
          sx={{
            // height: 60,
            width: 60,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            display: { xs: "flex", md: "none" },
            mr: 1,
          }}
          alt="logo siartec"
          src="/img/logo_letra.png"
        />
      </Toolbar>
      <Divider />
      <List>
        {MENU_APP_NATURAL.map((option, index) =>
          props.session.roles.includes(
            ALL_PRIVILEGES.getPrivilegesByName(option).code
          ) ? (
            <Link
              href={ALL_PRIVILEGES.getPrivilegesByName(option).path}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconDynamic
                      iconName={ALL_PRIVILEGES.getPrivilegesByName(option).icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={ALL_PRIVILEGES.getPrivilegesByName(option).name}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <></>
          )
        )}
      </List>
      <Divider />
      <List>
        {MENU_APP_PROFILE.map((option, index) =>
          props.session.roles.includes(
            ALL_PRIVILEGES.getPrivilegesByName(option).code
          ) ? (
            <Link
              href={ALL_PRIVILEGES.getPrivilegesByName(option).path}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconDynamic
                      iconName={ALL_PRIVILEGES.getPrivilegesByName(option).icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={ALL_PRIVILEGES.getPrivilegesByName(option).name}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <></>
          )
        )}
      </List>
      <Divider />
      <List>
        <ListItem key={0} disablePadding>
          <ListItemButton onClick={() => signOut()}>
            <ListItemIcon>
              <IconDynamic iconName={"ExitToAppSharp"} />
            </ListItemIcon>
            <ListItemText primary={"Cerrar Sesión"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sistema Automatizado de Recaudación Tributaria del Estado Carabobo
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

MenuApp.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MenuApp;
