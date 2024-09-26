import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import MenuApp from "@/components/app/menu";
import FooterApp from "@/components/app/footer";
import { Box } from "@mui/material";

export default async function LayoutApp({ children }) {
  const session = await getServerSession(nextAuthOptions);
  session.roles = [
    "C_NUEVO",
    "R_PROFILE",
    "U_PROFILE",
    "U_PASSWORD",
    "R_TAX_STAMPS",
    "C_TAX_STAMPS",
  ];

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <MenuApp session={session}>
        <Box sx={{ minHeight: "90vh" }}>{children}</Box>
        <FooterApp />
      </MenuApp>
    </>
  );
}
