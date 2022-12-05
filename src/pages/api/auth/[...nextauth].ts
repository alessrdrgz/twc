import NextAuth, { User } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { prisma } from '@utils/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login
        } as User
      }
    })
  ],
  callbacks: {
    async session({ session, user }) {
      user && session && (session.user = user)
      return session
    }
  }
}
export default NextAuth(authOptions)
