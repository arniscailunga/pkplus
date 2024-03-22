import imgConseil from "./assets/Conseil.jpg"

export default function Conseils() {
    return (
        <div className="flex flex-col justify-center h-[80vh]">
            <div className="flex justify-center max-w-[1284px] p-12 gap-x-6 m-auto bg-gray-200 rounded-[15px]">
                <div className="w-[50%] -rotate-6 border-2 border-red-400">
                    <img src={imgConseil} alt="photo d'un menager" className="w-full" />
                </div>
                <div className="w-[50%] text-blue-900 font-bold flex flex-col justify-around">
                    <h1 className="text-2xl text-center">Vous êtes à la recherche
                        <strong className="text-red-900"> d'un emploi ?</strong></h1>
                    <h3 className="text-center text-xl">Nous recrutons !</h3>
                    <p className="ml-12 mb-12 D9D9D9 text-blue">Nos agences recherchent plusieurs centaines d’aides-ménager(e)s,jardiniers,gardiens, 
                            il y a forcément un poste près de chez vous. Postes en CDI à temps partiel,
                            avec une rémunération évolutive et attractive,
                            rejoignez la famille des intervenant(e)s pkPlus !</p>
                </div>
            </div>
            <button className="bg-gray-200 inline-block w-max mx-auto py-3 px-4 border-2 border-blue-300 mb-12 text-blue-900 font-bold rounded-full">Je cherche un travail</button>
        </div>
    )
}