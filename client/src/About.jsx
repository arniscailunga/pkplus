import imgJardinier from "./assets/jardinier001.jpg"
import imgJardinier2 from "./assets/jardinier002.jpg"




1
const About = () => {
    return (
        <div className="bg-blue-900 text-white p-6">
            <div className="grid grid-cols-2 grid-rows-2 mx-auto">

                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                    <h1 className=" gb-blue-900 text white my-6">Acceuil/Nos prestation/Jardinage à domicil</h1>
                    <h3 className="text-2xl text-center">
                        Découvrez nos prestations
                        <strong className="text-blue-400">de jardinage à domicile</strong>
                    </h3>
                    <p className="m-6 ">Déléguer vos tâches de jardinage et profiter d’une pa
                        rcelle parfaitement  propre sans aucune contrainte ?
                        C’est possible grâce à PK Plus. Nous  vous propo
                        sons des prestations d’une qualité irréprochable réa
                        lisées par  des hommes et femmmes jardiniers(ères
                        professionnels(lles).Vous gagnez du temps, vous
                        vous  libérez l’esprit et votre extérieur est toujours
                        impeccable et propres.
                    </p>
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                    <img src={imgJardinier} alt="photo d'un menager" className="w-full" />
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                    <img src={imgJardinier2} alt="photo d'un menager" className="w-full" />
                </div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col justify-center ">
                    <div className="bg-white m-4 w-full h-[80%] w-[95%] rounded-[15px] h-24 flex flex-col pt-6 items-center">
                        <h1 className="text-black">Quelle est votre besoin</h1>
                        <div className="bg-blue-200 p-8 my-8">
                            <p>Ménage</p>
                            <div>
                            </div>
                            <div>
                                <h3>Jardinga</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default About;