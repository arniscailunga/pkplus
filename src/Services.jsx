import imgGardinage2 from "./assets/Gardinage2.jpg"
import imgGardinage1 from "./assets/Gardinage1.jpg"

export default function Services() {
    return (
        <div className="flex gap-x-12 px-24 py-12">
            <div className="flex flex-col gap-y-6 justify-center w-[50%] h-[959px]">
                <img src={imgGardinage2} alt="photo d'un menager" className="w-full object-cover  h-[50%]" />
                <img src={imgGardinage1} alt="photo d'un menager" className="w-full object-cover h-[50%]" />
            </div>
            <div className="text-blue-900 font-semibold w-[50%] text-justify flex flex-col justify-around">
                <h1 className="text-blue-900 font-bold text-2xl text-center">Des hommes gardiens <strong className="text-red-900">experts</strong></h1>
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
                <div className="border-2 border-blue-400 p-3 rounded-[15px] w-[380px] mx-auto text-center">En savoir plus sur les hommes de gardinages</div>
            </div>
        </div>
    )
}