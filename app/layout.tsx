import "./globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
