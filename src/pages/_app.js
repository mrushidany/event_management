import '@/styles/globals.css'

import { Inter, Sarabun, Roboto } from 'next/font/google'

const inter = Inter({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const sarabun = Sarabun({
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sarabun',
})

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sarabun',
})



export default function App({ Component, pageProps }) {
  return (
    <main className={`${sarabun.variable} ${inter.variable} ${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  ) 
}
