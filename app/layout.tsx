import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora'
})

export const metadata: Metadata = {
  title: 'La Stone Spa - Luxury Wellness Experience',
  description: 'Discover pure luxury and rejuvenation at La Stone Spa. Premium treatments, natural ingredients, and tranquility.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8B7355',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} scroll-smooth`}>
      <body className="antialiased bg-cream">
        {children}
      </body>
    </html>
  )
}
