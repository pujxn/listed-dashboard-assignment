"use client";

import './globals.css'
import { SessionProvider, session } from "next-auth/react"


import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}><SessionProvider session={session}>{children}</SessionProvider></body>
    </html>

  )
}
