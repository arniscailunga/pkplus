import imgJardinier from "./assets/jardinier001.jpg"
import imgJardinier2 from "./assets/jardinier002.jpg"




1
const About = () => {
    return (
        <div className="bg-blue-900 text-white">
            <div className="max-w-[1284px] mx-auto">
                <div className="flex justify-between py-6 gap-x-6 w-full">
                    <div className="w-[50%]">
                        <h1 className=" gb-blue-900 text white my-6">Acceuil/Nos prestation/Jardinage à domicil</h1>
                        <p>
                            Découvrez nos prestationsde jardinage à domicile   
                        </p>
                        <p>Déléguer vos tâches de jardinage et profiter d’une pa
                            rcelle parfaitement  propre sans aucune contrainte ?
                            C’est possible grâce à PK Plus. Nous  vous propo
                            sons des prestations d’une qualité irréprochable réa
                            lisées par  des hommes et femmmes jardiniers(ères
                            professionnels(lles).Vous gagnez du temps, vous
                            vous  libérez l’esprit et votre extérieur est toujours
                            impeccable et propres.
                        </p>
                    </div>
                    <div className="w-[50%]">
                        <img src={imgJardinier} alt="photo d'un menager" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-between gap-x-6  py-6 w-full">
                    <div className="w-[50%]">
                        <img src={imgJardinier2} alt="photo d'un menager" className="w-full" />
                    </div>
                    <div className="w-[50%]">
                        <h1 className="text white">Notre agence d'homme/de femme de ménage : les services PK</h1>
                        
                        <div className="bg-white m-4 w-full h-[90%] rounded-[15px] h-24">

                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;