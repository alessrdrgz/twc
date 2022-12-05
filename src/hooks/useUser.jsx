import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export function useUser() {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (session && session.user) setUser(session.user)
  }, [session, user])

  return user
}
