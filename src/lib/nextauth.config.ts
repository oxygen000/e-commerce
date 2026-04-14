import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "frash cart",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            body: JSON.stringify(credentials),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const finalRes = await res.json();

        console.log("finalRes", finalRes);

        if (finalRes.message === "success") {
          return {
            id: finalRes.user._id,
            name: finalRes.user.name,
            email: finalRes.user.email,
            realTokenFromBackend: finalRes.token,
          };
        }

        return null;
      },
    }),
  ],

 callbacks: {
  jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.realTokenFromBackend = user.realTokenFromBackend;
    }
    return token;
  },

  session({ session, token }) {
    session.user.id = token.id as string;
    session.user.token = token.realTokenFromBackend as string;
    return session;
  },
},

  pages: {
    signIn: "/Login",
  },
};
