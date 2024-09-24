import {
  AccountBox,
  Password,
  Difference,
  ExitToAppSharp,
  Payments,
  List,
  Home,
} from "@mui/icons-material";

export const IconDynamic = ({ iconName }) => {
  switch (iconName) {
    case "AccountBox":
      return <AccountBox sx={{ color: "background.paper" }} />;
    case "Password":
      return <Password sx={{ color: "background.paper" }} />;
    case "Difference":
      return <Difference sx={{ color: "background.paper" }} />;
    case "ExitToAppSharp":
      return <ExitToAppSharp sx={{ color: "background.paper" }} />;
    case "Payments":
      return <Payments sx={{ color: "background.paper" }} />;
    case "Home":
      return <Home sx={{ color: "background.paper" }} />;
    case "List":
      return <List sx={{ color: "background.paper" }} />;
    default:
      return <></>;
  }
};

export default IconDynamic;
