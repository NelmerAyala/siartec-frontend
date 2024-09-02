"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SignInOutModal from "./modal";
import TabSignInOutContainer from "./tab-sign";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";

const pages = [
  { title: "INICIO", onClick: "redirectPage", path: "/" },
  { title: "SERVICIOS", onClick: "redirectPage", path: "/servicios" },
  { title: "INSTRUCTIVOS", onClick: "redirectPage", path: "/instructivos" },
  { title: "GACETAS", onClick: "redirectPage", path: "/gacetas" },
  { title: "CONTÁCTANOS", onClick: "redirectPage", path: "/contactanos" },
  { title: "INGRESAR", onClick: "handleOpenModal", path: "" },
];
const modules = [
  { title: "INICIO", onClick: "redirectPage", path: "/" },
  { title: "SERVICIOS", onClick: "redirectPage", path: "/servicios" },
  { title: "INSTRUCTIVOS", onClick: "redirectPage", path: "/instructivos" },
  { title: "GACETAS", onClick: "redirectPage", path: "/gacetas" },
  { title: "CONTÁCTANOS", onClick: "redirectPage", path: "/contactanos" },
  { title: "APP SIARTEC", onClick: "redirectPage", path: "/app" },
  { title: "CERRAR SESIÓN", onClick: "onClick", path: "/" },
];

export default function MenuHome() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const [openChildren, setOpenChildren] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const redirectPage = (path) => {
    router.push(path);
  };

  const pathname = usePathname();
  const path = pathname.split("/");

  const generateActions = (props) => {
    props.value === "handleOpenModal"
      ? handleOpen()
      : props.value === "redirectPage"
      ? redirectPage(props.path)
      : props.value === "onClick"
      ? signOut()
      : console.log("error option menu");
  };
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    if (path[1] !== "app") {
      return (
        <>
          <AppBar position="fixed">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
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
                  alt="The house from the offer."
                  src="/img/logo.png"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                ></Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page.title}
                        onClick={() =>
                          generateActions({
                            value: page.onClick,
                            path: page.path,
                          })
                        }
                        sx={{ my: 2, color: "white", display: "block" }}
                      ></Button>
                      // <Link key={page.title} href={page.path}>
                      //   {page.title}
                      // </Link>
                    ))}
                  </Menu>
                </Box>

                <Box
                  component="img"
                  sx={{
                    // height: 60,
                    width: 120,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    display: { xs: "flex", md: "none" },
                    mr: 1,
                  }}
                  alt="The house from the offer."
                  src="/img/logo.png"
                />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                ></Typography>
                <Box
                  display="flex"
                  flexGrow={12}
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                ></Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    marginRight: "1",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {modules.map((module) => (
                    <Button
                      key={module.title}
                      onClick={() =>
                        generateActions({
                          value: module.onClick,
                          path: module.path,
                        })
                      }
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {module.title}
                    </Button>
                    // <Link key={module.title} href={module.path}>
                    //   {module.title}
                    // </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <SignInOutModal
            open={open}
            setOpen={setOpen}
            openChildren={openChildren}
            setOpenChildren={setOpenChildren}
          >
            <TabSignInOutContainer></TabSignInOutContainer>
          </SignInOutModal>
        </>
      );
    }
  } else {
    return (
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <Image sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
                alt="The house from the offer."
                src="/img/logo.png"
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      onClick={() =>
                        generateActions({
                          value: page.onClick,
                          path: page.path,
                        })
                      }
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.title}
                    </Button>
                    // <Link key={page.title} href={page.path}>
                    //   {page.title}
                    // </Link>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Box
                component="img"
                sx={{
                  // height: 60,
                  width: 120,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
                alt="The house from the offer."
                src="/img/logo.png"
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
              <Box
                display="flex"
                flexGrow={12}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              >
                {/* whatever is on the left side */}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  marginRight: "1",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    onClick={() =>
                      generateActions({ value: page.onClick, path: page.path })
                    }
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <SignInOutModal
          open={open}
          setOpen={setOpen}
          openChildren={openChildren}
          setOpenChildren={setOpenChildren}
        >
          <TabSignInOutContainer></TabSignInOutContainer>
        </SignInOutModal>
      </>
    );
  }
}
