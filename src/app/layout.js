import { Inter } from "next/font/google";
import "./globals.css";
import AppMui from "@/mui/AppMui";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MenuHome from "@/components/home/header";
import Footer from "@/components/home/footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siartec",
  description:
    "Sistema Automatizado de Recaudación Tributaria del Estado Carabobo",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <GoogleOAuthProvider
        clientId={"" + process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      >
        <html lang="es">
          <body className={inter.className}>
            <AppMui>
              {/* <header>
                <MenuHome></MenuHome>
              </header>
              <main>{children}</main>
              <footer>
                <Footer></Footer>
              </footer> */}
              {children}
            </AppMui>
          </body>
        </html>
      </GoogleOAuthProvider>
    </SessionWrapper>
  );
}
