import NextAuth, { type NextAuthOptions } from "next-auth";
import { env } from "../../../env/server.mjs";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      // if (session.user) {
      //   session.user.id = user.id;
      // }
      console.log("user from session", user);
      console.log("session from session", session);
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
