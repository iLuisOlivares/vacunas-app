import Link from 'next/link';

export const metadata = {
    title: 'Tienda de vacunas',
    description: 'Tienda de VacunasApp',
    keywords: 'vacunas, mascotas, perros, gatos, veterinaria, vacunasapp'
}
const TiendaLayout = ({ children }) => {

    return <div>

        <h3>Layout de tienda</h3>
        <ul>
            <li>
                <Link href="/">home</Link>
            </li>
            <li>
                <Link href="/login">login</Link>
            </li>
        </ul>

        {children}
    </div>
}

export default TiendaLayout;