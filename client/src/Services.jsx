import imgGardinage2 from "./assets/Gardinage2.jpg"
import imgGardinage1 from "./assets/Gardinage1.jpg"

export default function Services() {
    return (
        <div className=" grid grid-cols-2 grid-rows-2 gap-x-12 px-24 py-12">
            <div className="flex flex-col gap-y-6 justify-center h-[959px] col-start-1 col-end-2 row-start-1 row-start-3">
                <img src={imgGardinage2} alt="photo d'un menager" className="w-full h-full object-cover  " />
                <img src={imgGardinage1} alt="photo d'un menager" className="w-full h-full object-cover " />
            </div>
            <div className="text-blue-900 font-semibold text-justify flex flex-col justify-around col-start-2 col-end-3 row-start-1 row-start-3">
                <h1 className="text-blue-900 font-bold text-2xl text-center">Des hommes gardiens <strong className="text-red-400">experts</strong></h1>
                <div>
                    <p>
                        Tous nos hommes de gardinage sont salariés par PKPlus. Cela vous garantit des prestations de qualité : nos intervenants sont toutes rigoureusement recrutées avec contrôle de références systématique.
                    </p>
                    <p>
                        Ills sont suivis tout au long de leur carrière, notamment pour s’assurer du bon déroulé de chaque prestation.Chaque homme de ménage s’engage à respecter un protocole de conduite lors des rendez-vous (respect des horaires, de la confidentialité, du matériel etc.).
                    </p>
                    <p>
                        Pour répondre à votre recherche de gardinage à domicile et vous proposer un service d’expert, nos hommes de gardinage sont régulièrement formés par PKPlus.Ces formations ont pour objectif de permettre à nos intervenantes de monter en compétences.
                    </p>
                    <p>
                        Iles perfectionnent ainsi leur maîtrise de tous les types de parcelle( résidence,commerciales, industrielles, de travaux public ). C’est également l’occasion de découvrir de nouvelles techniques de gardinage,  pour gagner en rapidité et en efficacité.
                    </p>
                </div>
                <div className="border-2 border-blue-400 p-3 rounded-full w-[380px] mx-auto text-center">En savoir plus sur les hommes de gardinages</div>
            </div>
        </div>
    )
}