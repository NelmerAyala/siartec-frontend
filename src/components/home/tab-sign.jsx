import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import SignupPage from "./signup";
import SigninPage from "./signin";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: "0.5rem" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const paperStyle = { width: 500, margin: "1px auto" };

const TabSignInOutContainer = React.forwardRef(function TabSignInOutContainer(
  props,
  ref
) {
  // export default function TabSignInOutContainer () {

  const [messageCreate, setMessageCreate] = React.useState("");
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="tabs sign in or sign up"
            >
              <Tab label="INGRESAR" {...a11yProps(0)} />
              <Tab label="REGISTRAR" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <SigninPage
              setMessageCreate={setMessageCreate}
              messageCreate={messageCreate}
              handleChangeTab={handleChangeTab}
              openChildren={props.openChildren}
              setOpenChildren={props.setOpenChildren}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SignupPage
              handleChangeTab={handleChangeTab}
              setMessageCreate={setMessageCreate}
            />
          </CustomTabPanel>
        </Box>
      </Paper>
    </>
  );
});

export default TabSignInOutContainer;
