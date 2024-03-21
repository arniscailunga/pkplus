import imgGardinage2 from "./assets/Gardinage2.jpg"
import imgGardinage1 from "./assets/Gardinage1.jpg"

export default function Services() {
    return (
        <>
            <h1>Nos services</h1>
            <div className="w-[50%]">
                <img src={imgGardinage2} alt="photo d'un menager" className="w-full" />
            </div>
            <div className="text-blue">
                <h1>Des hommes gardiens expert</h1>
                <P>Toutes nos femmes de ménage sont salariées par MerciPlus. Cela vous garantit des prestations de qualité :
                    nos intervenantes sont toutes rigoureusement recrutées avec contrôle de références systématique.</P>
            </div>
            <div>
                <p>Elles sont suivies tout au long de leur carrière, notamment pour s’assurer du bon déroulé de chaque prestation.
                    Chaque femme de ménage s’engage à respecter un protocole de conduite lors des rendez-vous
                    (respect des horaires, de la confidentialité, du matériel etc.).</p>
            </div>
            <div>
                <p> Pour répondre à votre recherche de repassage à domicile et vous proposer un service d’expert,
                    nos femmes de ménage sont régulièrement formées par MerciPlus.
                    Ces formations ont pour objectif de permettre à nos intervenantes de monter en compétences. </p>
            </div>
            <div>
                <p>Elles perfectionnent ainsi leur maîtrise de tous les types de fer (fer à repasser classique, centrale vapeur).
                    C’est également l’occasion de découvrir de nouvelles techniques de repassage ou pliage,
                    pour gagner en rapidité et en efficacité.</p>
            </div>
            <div className="w-[50%]">
                <img src={imgGardinage1} alt="photo d'un menager" className="w-full" />
            </div>
        </>
    )
}