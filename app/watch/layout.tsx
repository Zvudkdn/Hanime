import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <header className="border-b">
          <nav className="container mx-auto px-4 h-14 flex items-center gap-6">
            <Link href="/" className="text-lg font-bold">
              Anime Site
            </Link>
            <Link href="/" className="hover:text-primary">
              Trending
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}

