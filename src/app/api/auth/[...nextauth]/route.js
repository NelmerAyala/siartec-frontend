// imports
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth, authGoogleEmail } from "@/services/auth/signin";
import { OAuth2Client } from "google-auth-library";

const nextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      //esto es para tener un provider personalizado(Autenticacion manual)
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "usuario@google.com",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials, req) {
        let user = await auth({
          email: credentials.email,
          password: credentials.password,
        });

        if (user.user && user.access_token) {
          return user;
        }

        throw new Error(
          JSON.stringify({
            errors: [{ name: user.name, message: user.message }],
            status: false,
          })
        );
      },
    }),
    CredentialsProvider({
      id: "googleonetap",
      name: "google-one-tap",
      credentials: {
        credential: { type: "text" },
      },

      async authorize(credentials, req) {
        const token = credentials.credential;
        const googleAuthClient = new OAuth2Client();
        const ticket = await googleAuthClient.verifyIdToken({
          idToken: token,
          audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
          throw new Error("Cannot extract payload from signin token");
        }

        const {
          email,
          sub,
          given_name,
          family_name,
          email_verified,
          picture: image,
        } = payload;
        if (!email) {
          throw new Error("Email not available");
        }

        let user = await authGoogleEmail({
          email: email,
        });

        // if (!user) {
        //   user = await adapter.createUser!({
        //     name: [given_name, family_name].join(" "),
        //     email,
        //     image,
        //     emailVerified: email_verified ? new Date() : null,
        //   });
        // }

        // let account = await adapter.getUserByAccount!({
        //   provider: "google",
        //   providerAccountId: sub,
        // });

        // if (!account && user) {
        //   await adapter.linkAccount!({
        //     userId: user.id,
        //     provider: "google",
        //     providerAccountId: sub,
        //     type: "credentials",
        //   });
        // }

        if (user.user && user.access_token) {
          return user;
        }

        throw new Error(
          JSON.stringify({
            errors: [{ name: user.name, message: user.message }],
            status: false,
          })
        );
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.user && user.access_token) {
        return user;
      } else {
        throw new Error("invalid credentials");
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token = user;
      }
      return token;
    },
    async session({ session, user, token }) {
      // session.accessToken = token.accessToken;
      session.access_token = token.access_token;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
