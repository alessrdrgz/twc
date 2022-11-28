import '@styles/tailwind.css'
import Header from '@components/Header'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
