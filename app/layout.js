import { Montserrat } from "next/font/google";
import './global.css'
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'VacunasApp',
  description: 'Aplicacion para guardar las vacunas de tus mascotas',
  keywords: 'vacunas, mascotas, perros, gatos, veterinaria, vacunasapp'
}

const monserrat = Montserrat({
  weight: ['300', '400', '700'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={monserrat.className}>
        <Navbar></Navbar>
        <div className="container mx-auto h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
