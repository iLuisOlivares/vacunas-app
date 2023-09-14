import React from 'react'
import logo from '../../../public/logo.png'

async function getUser(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

const page = async ({ params, nombre = "Lucas", raza = "maltese", edad = "6", observaciones, especie = "no especifica", genero = "no especifica", color = "no especifica", alergias, fecha_n = "no especifica", nacionalidad = "no especificas" }) => {
    const url = "https://dog.ceo/api/breed/maltese/images/random/"
    const data = await getUser(url)
    return (
        <div className='container bg-slate-50'>

            <div className='flex justify-between'>

                <div className='w-full p-5'>
                    <h1 className='text-3xl'>{nombre}</h1>
                    <h3 className='pb-2 text-md text-slate-600'>{raza.toLocaleUpperCase()}</h3>
                    <hr />

                    <div className='pt-3 flex w-full justify-right gap-10' >
                        <div>
                            <p className='text-sm'> <b>Genero:</b>  {genero}</p>
                            <p className='text-sm'><b>Edad:</b> {edad}</p>
                        </div>
                        <div>
                            <p className='text-sm'><b>Especie:</b> {especie}</p>
                            <p className='text-sm'><b>Color:</b> {color}</p>
                        </div>
                        <div>
                            <p className='text-sm'><b>nacionalidad:</b> {nacionalidad}</p>
                            <p className='text-sm'><b>fecha nacimiento:</b> {fecha_n}</p>

                        </div>

                    </div>
                    {
                        observaciones &&
                        <div>
                            <h3 className='pt-5 text-xl'>Observaciones</h3>
                            <hr />
                            <p className='text-sm'>{observaciones}</p>
                        </div>
                    }
                    {alergias &&
                        <div>
                            <h3 className='pt-5 text-xl'>Alergias</h3>
                            <hr />
                            <p className='text-sm'> {alergias}</p>
                        </div>
                    }

                    <div className='w-auto'>
                        <h3 className='pt-5 text-xl'>Registros</h3>
                        <hr className='pb-5 ' />
                        <table class="table-fixed w-full items-center text-center">
                            <thead>
                                <tr className='bg-darkseagreen'>
                                    <th>Vacuna</th>
                                    <th>numero de lote</th>
                                    <th>fecha</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white10'>
                                <tr>
                                    <td>Vacuna #1</td>
                                    <td>#4332-14</td>
                                    <td>14/09/2023</td>
                                </tr>
                                <tr >
                                    <td>Vacuna #2</td>
                                    <td>#4332-14</td>
                                    <td>14/09/2023</td>
                                </tr>
                                <tr>
                                    <td>Vacuna #3</td>
                                    <td>#4332-14</td>
                                    <td>14/09/2023</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

                <img className=' h-80 p-5 bg-cover' src={data.message} alt="" />

            </div>
        </div>
    )
}

export default page