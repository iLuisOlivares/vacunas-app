import Link from 'next/link'
import React from 'react'

const MascotaCard = ({ nombre, raza, img }) => {
    return (
        <li className='flex bg-amber-100  h-50 p-5 items-center gap-10 content-between justify-around'>
            <div >
                <h1 className='text-xl'> {nombre}</h1>
                <p className='text-sm pb-4 text-slate-700'>{raza}</p>
                <Link href={"/"} className='text-sm pt-5 text-emerald-600 underline decoration-1'>vacunas</Link>
            </div>
            <img className='w-40 h-40 ring-2 ring-green-200 object-cover rounded-full' src={img} alt="mascota" />
        </li>
    )
}

export default MascotaCard
