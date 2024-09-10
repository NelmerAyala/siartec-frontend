import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import MenuApp from "@/components/app/menu";
import FooterApp from "@/components/app/footer";

export default async function LayoutApp({ children }) {
  const session = await getServerSession(nextAuthOptions);
  session.roles = [
    "R_PROFILE",
    "U_PROFILE",
    "U_PASSWORD",
    "R_TAX_STAMPS",
    "C_TAX_STAMPS",
    "C_PAYMENTS",
  ];

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <MenuApp session={session}>
        {children}
        <FooterApp />
      </MenuApp>
    </>
  );
}
