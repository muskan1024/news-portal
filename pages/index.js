import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import Footer from '@/components/Footer'
import Opinions from '@/components/Opinions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Feed />
      <Opinions />
      <Footer />
    </main>
  )
}
