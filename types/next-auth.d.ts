import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    username: string
    email: string
    emailVerified?: Date
    image: string
  }
}
