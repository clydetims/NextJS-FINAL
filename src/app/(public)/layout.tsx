import type { Metadata } from 'next'

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
        <main className="">{children}</main>
      </div>
  )
}