import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Sol OFM',
  description: 'Sol OFM',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
