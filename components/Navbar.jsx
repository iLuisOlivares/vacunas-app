import Link from "next/link"

const Navbar = () => {
    return (

        <>
            <nav className="bg-white10 py-4 px-10 items-center flex justify-between mb-4  ">
                <Link href={"/"} >
                    <div className="">
                        <h1 className="flex items-end    text-3xl font-bold border-double rounded-full   
                        border-y-darkseagreen border-x-sky-800 text-darkseagreen300 border-8 p-2">
                            VanPet
                            <img className="h-10" src="https://res.cloudinary.com/iluiss/image/upload/v1694729473/Recuerdos%20Lucas/v20oxqeyvw5i11cbblhc.png" alt="" />
                        </h1>
                    </div>
                </Link>

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