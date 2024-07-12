// imports
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth, authGoogle, authGoogleEmail } from "@/services/auth/signin";
import { OAuth2Client } from "google-auth-library";

const handler = NextAuth({
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
        // Add logic here to look up the user from the credentials supplied
        console.log("credentials: " + credentials);
        try {
          let user = await auth({
            email: credentials.email,
            password: credentials.password,
          });
          console.log("user authenticate: " + user);
          // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          }
        } catch (error) {
          console.log("error: " + error);
          return null;
        }
      },
    }),
    CredentialsProvider({
      // this!
      id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
      name: "google-one-tap",

      // This means that the authentication will be done through a single credential called 'credential'
      credentials: {
        credential: { type: "text" },
      },
      // This function will be called upon signIn
      async authorize(credentials, req) {
        const token = credentials.credential;
        const googleAuthClient = new OAuth2Client();
        const ticket = await googleAuthClient.verifyIdToken({
          idToken: token,
          audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        console.log("payloadddddddd: " + JSON.stringify(payload));
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

        // At this point we have deconstructed the payload and we have all the user's info at our disposal.
        // So first we're going to do a check to see if we already have this user in our DB using the email as identifier.
        // let user = await adapter.getUserByEmail!(email);
        let user = await authGoogleEmail({
          email: email,
        });

        // If no user is found, then we create one.
        // if (!user) {
        //   user = await adapter.createUser!({
        //     name: [given_name, family_name].join(" "),
        //     email,
        //     image,
        //     emailVerified: email_verified ? new Date() : null,
        //   });
        // }

        // The user may already exist, but maybe it signed up with a different provider. With the next few lines of code
        // we check if the user already had a Google account associated, and if not we create one.
        // let account = await adapter.getUserByAccount!({
        //   provider: "google",
        //   providerAccountId: sub,
        // });

        // if (!account && user) {
        //   console.log("creating and linking account");
        //   await adapter.linkAccount!({
        //     userId: user.id,
        //     provider: "google",
        //     providerAccountId: sub,
        //     type: "credentials",
        //   });
        // }
        console.log("response USERRR : " + JSON.stringify(user));
        if (user.status === 200) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };

// const authOptions = NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     // GithubProvider({
//     //   clientId: process.env.GITHUB_ID ?? '',
//     //   clientSecret: process.env.GITHUB_SECRET ?? '',
//     // }),
//     // ...add more providers here

//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//     CredentialsProvider({
//       //esto es para tener un provider personalizado(Autenticacion manual)
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "usuario@google.com",
//         },
//         password: {
//           label: "Contraseña",
//           type: "password",
//           placeholder: "*******",
//         },
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = await auth({
//           email: credentials.email,
//           password: credentials.password,
//         });

//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user;
//         }

//         return null;
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     //flujo de  auth.js (esto es como se van ejecutando las funciones)
//     async signIn({ user, account, profile, email, credentials }) {
//       return true;
//     },

//     async jwt({ token, user, account, profile }) {
//       const dbUser = await prisma.user.findUnique({
//         where: { email: token.email ?? "no-email" },
//       });

//       if (dbUser?.isActive === false) throw Error("Usuario no activo");

//       token.roles = dbUser?.roles ?? ["no-roles"];
//       token.id = dbUser?.id ?? "no-uuid";
//       return token;
//     },

//     async session({ session, token, user }) {
//       console.log(token);

//       if (session && session.user) {
//         session.user.roles = token.roles;
//         session.user.id = token.id;
//       }

//       return session;
//     },
//   },
// });
// export { authOptions as GET, authOptions as POST };
