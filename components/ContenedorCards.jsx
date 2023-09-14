"use client";
import MascotaCard from "@/components/MascotaCard";
import { useEffect, useState } from "react";



const ContenedorCards = ({ data }) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient ? <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-sm leading-6">
                {
                    data.message.map((mascota, index) => (<MascotaCard key={index} nombre="Lucas" raza="maltese" img={mascota} />))
                } </ul> : <div>loading...</div>}

        </>


    )
}

export default ContenedorCards