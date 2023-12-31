import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "@/node_modules/next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="flex justify-center p-14">
        <ul className="flex gap-4">
          <li><Link href="/" style={{color: "black",}}>Home</Link></li>
          <li><Link href="/showcase" style={{color: "black",}}>Showcase</Link></li>
          <li><Link href="/about" style={{color: "black",}}>About Us</Link></li>
        </ul>
      </nav>
      {children}</body>
    </html>
  )
}
