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
      return <AccountBox />;
    case "Password":
      return <Password />;
    case "Difference":
      return <Difference />;
    case "ExitToAppSharp":
      return <ExitToAppSharp />;
    case "Payments":
      return <Payments />;
    case "Home":
      return <Home />;
    case "List":
      return <List />;
    default:
      return <></>;
  }
};

export default IconDynamic;
