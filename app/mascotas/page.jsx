
import ContenedorCards from "@/components/ContenedorCards";


async function getMascotas(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;

}
const MascotasPage = async () => {
    const url1 = "https://dog.ceo/api/breed/maltese/images/random/4"
    const data = await getMascotas(url1);


    return (
        <div>

            <ContenedorCards data={data} />
        </div >
    )
}

export default MascotasPage