"use client";

import './globals.css'
import { SessionProvider, session } from "next-auth/react"


import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pujan&apos;s app for listed&apos;s assignment</title>
      </head>
      <body className={`${montserrat.className}`}>
        <SessionProvider session={session}>{children}</SessionProvider></body>
    </html>

  )
}
