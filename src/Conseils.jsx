import imgConseil from "./assets/Conseil.jpg"

export default function Conseils() {
    return (
        <>
            <div className=" D9D9D9 w-[50%]">
                <img src={imgConseil} alt="photo d'un menager" className="w-full" />
            </div>
            <div className="my-6">
                <h1>Vous êtes à la recherche
                    d'un emploi ?</h1>
            </div>
            <div className="D9D9D9 text-blue w-[50%]">
                <h3>Nous recrutons !</h3>
                <p>Nos agences recherchent plusieurs centaines d’aides-ménager(e)s,
                    il y a forcément un poste près de chez vous. Postes en CDI à temps partiel,
                    avec une rémunération évolutive et attractive,
                    rejoignez la famille des intervenant(e)s MerciPlus !</p>
                <h3 className=" bg-white-900 text-blue-900 border-color-blue-400 border-2 p-2 rounded-[15px]">Je cherche un travail</h3>
            </div>
        </>
    )
}