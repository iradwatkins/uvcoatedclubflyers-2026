import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UV Coated Club Flyers - Premium Glossy Flyers',
  description: 'High-shine UV coated flyers for nightclubs, events, and promotions. Premium finish that stands out.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
