import '@styles/tailwind.css'
import Header from '@components/Header'
import AuthProvider from '@components/AuthProvider'
import { Bitter } from '@next/font/google'

const font = Bitter({
  weight: '400',
  display: 'swap',
  subsets: ['chinese-simplified'],
  variable: '--font-primary'
})

export default function RootLayout({ children }) {
  return (
    <html className={`${font.variable}`}>
      <head />
      <body className={`fixed inset-0 min-h-screen bg-background font-primary`}>
        <AuthProvider>
          <Header />
          <div className="w-[calc(100%-60px)] h-[calc(100vh-80px)] font-primary">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
