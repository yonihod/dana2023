import Navbar from '@/components/Navbar'
import './globals.scss'
import { Inter } from 'next/font/google'
import { ContextProvider } from './context/ContextProvider'
import Blob from '@/components/Blob'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galiko Design',
  description: 'Galiko Design, a design studio based in Israel.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ContextProvider>
          <Navbar />
          <Blob />
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
