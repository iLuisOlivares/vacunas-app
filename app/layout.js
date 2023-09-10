import { Montserrat } from "next/font/google";
import Link from "next/link";


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
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/fetch">post</Link>
          </li>
        </ul>

        {children}</body>
    </html>
  )
}
