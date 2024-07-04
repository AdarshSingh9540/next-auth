'use client'
import { SessionProvider } from 'next-auth/react'


function providers({children}: {
    children:React.ReactNode
}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default providers