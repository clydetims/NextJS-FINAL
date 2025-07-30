import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return(
        <div className="min-h-screen">
            <Header />
            <main className="">{children}</main>
            <Footer/>
        </div>
    )
}