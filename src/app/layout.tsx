import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Created with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
