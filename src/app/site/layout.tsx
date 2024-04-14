import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    
  )
}

export default layout
