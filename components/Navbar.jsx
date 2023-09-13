import Link from "next/link"

const Navbar = () => {
    return (

        <>
            <nav className="bg-slate-100 py-5 px-20 items-center flex justify-between mb-4 ">
                <Link href={"/"} > <h1 className="text-3xl font-bold">VacunasApp</h1 > </Link>
                <ul className="flex gap-2">
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/mascotas">mascotas</Link>
                    </li>
                    <li>
                        <Link href="/fetch">post</Link>
                    </li>
                </ul>
            </nav >


        </>


    )
}

export default Navbar