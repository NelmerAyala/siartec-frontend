// imports
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/services/auth/signin";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      //esto es para tener un provider personalizado(Autenticacion manual)
      name: "Credentials",
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
        console.log(
          "Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@Nel24297146@"
        );
        try {
          const user = await auth({
            email: credentials.email,
            password: credentials.password,
          });
          // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          }

          return { msg: "User not found" };
        } catch (error) {
          console.log(error);
        }
      },
    }),
    // CredentialsProvider({
    //   //esto es para tener un provider personalizado(Autenticacion manual)
    //   name: "credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "usuario@google.com",
    //     },
    //     password: {
    //       label: "Contraseña",
    //       type: "password",
    //       placeholder: "*******",
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const user = await auth({
    //       email: credentials.email,
    //       password: credentials.password,
    //     });

    //     if (user) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       return user;
    //     }

    //     return null;
    //   },
    // }),
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
