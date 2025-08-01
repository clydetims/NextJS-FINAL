
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hope Foundation',
  description: 'Building Better Communities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <div className="min-h-screen">
          <Header/>
           <main className="">{children}</main>
          <Footer/>
      </div>
  )
}
