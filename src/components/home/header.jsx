"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
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
import { usePathname, useRouter } from "next/navigation";
import { createTheme } from "@mui/material";

const headerTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#1a1919",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            backgroundColor: "#1a1919",
          },
        },
      },
    },
  },
});

const pages = [
  { title: "INICIO", onClick: "redirectPage", path: "/" },
  { title: "SERVICIOS", onClick: "redirectPage", path: "/servicios" },
  // { title: "INSTRUCTIVOS", onClick: "redirectPage", path: "/instructivos" },
  // { title: "INFORMACION", onClick: "redirectPage", path: "/informacion" },
  { title: "GACETAS", onClick: "redirectPage", path: "/gacetas" },
  { title: "CONTÁCTANOS", onClick: "redirectPage", path: "/contactanos" },
  { title: "NOSOTROS", onClick: "redirectPage", path: "/nosotros" },
  { title: "INGRESAR", onClick: "handleOpenModal", path: "" },
];
const modules = [
  { title: "INICIO", onClick: "redirectPage", path: "/" },
  { title: "SERVICIOS", onClick: "redirectPage", path: "/servicios" },
  // { title: "INSTRUCTIVOS", onClick: "redirectPage", path: "/instructivos" },
  // { title: "INFORMACION", onClick: "redirectPage", path: "/informacion" },
  { title: "GACETAS", onClick: "redirectPage", path: "/gacetas" },
  { title: "CONTÁCTANOS", onClick: "redirectPage", path: "/contactanos" },
  { title: "NOSOTROS", onClick: "redirectPage", path: "/nosotros" },
  { title: "APP SIARTEC", onClick: "redirectPage", path: "/app" },
  { title: "CERRAR SESIÓN", onClick: "onClick", path: "/" },
];

export default function MenuHome() {
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openChildren, setOpenChildren] = React.useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const redirectPage = (path) => {
    router.push(path);
  };
  const generateActions = (props) => {
    props.value === "handleOpenModal"
      ? handleOpen()
      : props.value === "redirectPage"
      ? redirectPage(props.path)
      : props.value === "onClick"
      ? signOut()
      : console.log("error option menu");
  };
  let optionsMenu;
  !session
    ? (optionsMenu = pages)
    : path[1] !== "app"
    ? (optionsMenu = modules)
    : (optionsMenu = pages);
  // if (session) {
  //   if (path[1] !== "app") {
  //     return (
  //       <>
  //         <AppBar position="fixed" theme={headerTheme}>
  //           <Container maxWidth="xl">
  //             <Toolbar disableGutters>
  //               <Box
  //                 component="img"
  //                 sx={{
  //                   width: 120,
  //                   maxHeight: { xs: 233, md: 167 },
  //                   maxWidth: { xs: 350, md: 250 },
  //                   display: { xs: "none", md: "flex" },
  //                   mr: 1,
  //                 }}
  //                 alt="The house from the offer."
  //                 src="/img/logo.png"
  //               />
  //               <Typography
  //                 variant="h6"
  //                 noWrap
  //                 component="a"
  //                 href="#app-bar-with-responsive-menu"
  //                 sx={{
  //                   mr: 2,
  //                   display: { xs: "none", md: "flex" },
  //                   fontFamily: "monospace",
  //                   fontWeight: 700,
  //                   letterSpacing: ".3rem",
  //                   color: "inherit",
  //                   textDecoration: "none",
  //                 }}
  //               ></Typography>

  //               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //                 <IconButton
  //                   size="large"
  //                   aria-label="account of current user"
  //                   aria-controls="menu-appbar"
  //                   aria-haspopup="true"
  //                   onClick={handleOpenNavMenu}
  //                   color="inherit"
  //                 >
  //                   <MenuIcon />
  //                 </IconButton>
  //                 <Menu
  //                   theme={headerTheme}
  //                   id="menu-appbar"
  //                   anchorEl={anchorElNav}
  //                   anchorOrigin={{
  //                     vertical: "bottom",
  //                     horizontal: "left",
  //                   }}
  //                   keepMounted
  //                   transformOrigin={{
  //                     vertical: "top",
  //                     horizontal: "left",
  //                   }}
  //                   open={Boolean(anchorElNav)}
  //                   onClose={handleCloseNavMenu}
  //                   sx={{
  //                     display: { xs: "block", md: "none" },
  //                   }}
  //                 >
  //                   {pages.map((page) => (
  //                     <Button
  //                       key={page.title}
  //                       onClick={() =>
  //                         generateActions({
  //                           value: page.onClick,
  //                           path: page.path,
  //                         })
  //                       }
  //                       sx={{ my: 2, color: "white", display: "block" }}
  //                     ></Button>
  //                   ))}
  //                 </Menu>
  //               </Box>

  //               <Box
  //                 component="img"
  //                 sx={{
  //                   width: 120,
  //                   maxHeight: { xs: 233, md: 167 },
  //                   maxWidth: { xs: 350, md: 250 },
  //                   display: { xs: "flex", md: "none" },
  //                   mr: 1,
  //                 }}
  //                 alt="The house from the offer."
  //                 src="/img/logo.png"
  //               />
  //               <Typography
  //                 variant="h5"
  //                 noWrap
  //                 component="a"
  //                 href="#app-bar-with-responsive-menu"
  //                 sx={{
  //                   mr: 2,
  //                   display: { xs: "flex", md: "none" },
  //                   flexGrow: 1,
  //                   fontFamily: "monospace",
  //                   fontWeight: 700,
  //                   letterSpacing: ".3rem",
  //                   color: "inherit",
  //                   textDecoration: "none",
  //                 }}
  //               ></Typography>
  //               <Box
  //                 display="flex"
  //                 flexGrow={12}
  //                 sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
  //               ></Box>
  //               <Box
  //                 sx={{
  //                   flexGrow: 1,
  //                   marginRight: "1",
  //                   display: { xs: "none", md: "flex" },
  //                 }}
  //               >
  //                 {modules.map((module) => (
  //                   <Button
  //                     key={module.title}
  //                     onClick={() =>
  //                       generateActions({
  //                         value: module.onClick,
  //                         path: module.path,
  //                       })
  //                     }
  //                     sx={{ my: 2, color: "white", display: "block" }}
  //                   >
  //                     {module.title}
  //                   </Button>
  //                 ))}
  //               </Box>
  //             </Toolbar>
  //           </Container>
  //         </AppBar>
  //         <SignInOutModal
  //           open={open}
  //           setOpen={setOpen}
  //           openChildren={openChildren}
  //           setOpenChildren={setOpenChildren}
  //         >
  //           <TabSignInOutContainer></TabSignInOutContainer>
  //         </SignInOutModal>
  //       </>
  //     );
  //   }
  // } else {
  //   return (
  //     <>
  //       <AppBar position="fixed" theme={headerTheme}>
  //         <Container maxWidth="xl">
  //           <Toolbar disableGutters>
  //             <Box
  //               component="img"
  //               sx={{
  //                 width: 120,
  //                 maxHeight: { xs: 233, md: 167 },
  //                 maxWidth: { xs: 350, md: 250 },
  //                 display: { xs: "none", md: "flex" },
  //                 mr: 1,
  //               }}
  //               alt="The house from the offer."
  //               src="/img/logo.png"
  //             />
  //             <Typography
  //               variant="h6"
  //               noWrap
  //               component="a"
  //               href="#app-bar-with-responsive-menu"
  //               sx={{
  //                 mr: 2,
  //                 display: { xs: "none", md: "flex" },
  //                 fontFamily: "monospace",
  //                 fontWeight: 700,
  //                 letterSpacing: ".3rem",
  //                 color: "inherit",
  //                 textDecoration: "none",
  //               }}
  //             ></Typography>

  //             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //               <IconButton
  //                 size="large"
  //                 aria-label="account of current user"
  //                 aria-controls="menu-appbar"
  //                 aria-haspopup="true"
  //                 onClick={handleOpenNavMenu}
  //                 color="inherit"
  //               >
  //                 <MenuIcon />
  //               </IconButton>
  //               <Menu
  //                 theme={headerTheme}
  //                 id="menu-appbar"
  //                 anchorEl={anchorElNav}
  //                 anchorOrigin={{
  //                   vertical: "bottom",
  //                   horizontal: "left",
  //                 }}
  //                 keepMounted
  //                 transformOrigin={{
  //                   vertical: "top",
  //                   horizontal: "left",
  //                 }}
  //                 open={Boolean(anchorElNav)}
  //                 onClose={handleCloseNavMenu}
  //                 sx={{
  //                   display: { xs: "block", md: "none" },
  //                 }}
  //               >
  //                 {pages.map((page) => (
  //                   <Button
  //                     key={page.title}
  //                     onClick={() =>
  //                       generateActions({
  //                         value: page.onClick,
  //                         path: page.path,
  //                       })
  //                     }
  //                     sx={{ my: 2, color: "white", display: "block" }}
  //                   >
  //                     {page.title}
  //                   </Button>
  //                 ))}
  //               </Menu>
  //             </Box>
  //             <Box
  //               component="img"
  //               sx={{
  //                 width: 120,
  //                 maxHeight: { xs: 233, md: 167 },
  //                 maxWidth: { xs: 350, md: 250 },
  //                 display: { xs: "flex", md: "none" },
  //                 mr: 1,
  //               }}
  //               alt="The house from the offer."
  //               src="/img/logo.png"
  //             />
  //             <Typography
  //               variant="h5"
  //               noWrap
  //               component="a"
  //               href="#app-bar-with-responsive-menu"
  //               sx={{
  //                 mr: 2,
  //                 display: { xs: "flex", md: "none" },
  //                 flexGrow: 1,
  //                 fontFamily: "monospace",
  //                 fontWeight: 700,
  //                 letterSpacing: ".3rem",
  //                 color: "inherit",
  //                 textDecoration: "none",
  //               }}
  //             ></Typography>
  //             <Box
  //               display="flex"
  //               flexGrow={12}
  //               sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
  //             ></Box>
  //             <Box
  //               sx={{
  //                 flexGrow: 1,
  //                 marginRight: "1",
  //                 display: { xs: "none", md: "flex" },
  //               }}
  //             >
  //               {pages.map((page) => (
  //                 <Button
  //                   key={page.title}
  //                   onClick={() =>
  //                     generateActions({ value: page.onClick, path: page.path })
  //                   }
  //                   sx={{ my: 2, color: "white", display: "block" }}
  //                 >
  //                   {page.title}
  //                 </Button>
  //               ))}
  //             </Box>
  //           </Toolbar>
  //         </Container>
  //       </AppBar>
  //       <SignInOutModal
  //         open={open}
  //         setOpen={setOpen}
  //         openChildren={openChildren}
  //         setOpenChildren={setOpenChildren}
  //       >
  //         <TabSignInOutContainer></TabSignInOutContainer>
  //       </SignInOutModal>
  //     </>
  //   );
  // }

  return (
    <>
      <AppBar position="fixed" theme={headerTheme}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
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
                theme={headerTheme}
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
                {optionsMenu.map((page) => (
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
                ))}
              </Menu>
            </Box>
            <Box
              component="img"
              sx={{
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
              {optionsMenu.map((page) => (
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
