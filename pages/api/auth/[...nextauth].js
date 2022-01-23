import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
   providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
   callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
});