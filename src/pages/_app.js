import '@/styles/globals.css'
import { Inter, Sarabun, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
