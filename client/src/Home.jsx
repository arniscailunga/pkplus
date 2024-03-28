import imgMenager from "./assets/Menager.jpg"


const Home = () => {
    return (
        <>
       
            <div className=" grid grid-cols-2 grid-rows-2 gap-4flex items-center py-6 px-6">
                <div className="bg-[D9D9D9] text-blue-900 font-semibold w-[15%] flex flex-col items-center">
                    <div className="text-red-500 text-center font-bold text-2xl mb-1"><span className="text-blue-900">PK</span>plus</div>
                    <p className="text-blue-900">plus propre plus proche</p>
                </div>
                <div className=" text-blue-900 flex justify-between w-[85%]">
                    <h3>Ménage</h3>
                    <h3>Jardinage</h3>
                    <h3>Gardinagee</h3>
                    <button className="border-2 p-2 rounded-full border-red-400">Connexion</button>
                    <h3 className=" bg-blue-700  text-white border-2 p-2 rounded-full" >Simuler mon devis</h3>
                </div>
            </div>
            <div className="flex gap-x-6">
                <div className="bg-blue-900 text-white ">
                    <div className="max-w-[1284px] mx-auto">
                        <div className="flex justify-between py-6 gap-x-6 w-full">
                            <div className="w-[50%]"></div>

                        </div>
                        <div className="flex items-center gap-x-5">
                            <h2>Acceuil</h2>
                            <h2>Appropos</h2>
                            <h2>Nos service</h2>
                            <h2>Nos conseils</h2>
                        </div>
                    </div>
                    <div className="  text-white-900 font-semibold  text-justify flex flex-col ">
                        <h1 className="my-6 text-center">Votre agence d'homme/de femme de ménage : les services PKplus+</h1>
                        <p>En faisant appel à une agence de femmes/d’hommes de ménage,
                            exigez plus qu’une simple mise en relation ! Le réseau PKplus, p
                            résent partout en France, vous fait bénéficier de services à forte valeur ajoutée.
                            Votre agence locale, c’est une équipe soudée qui prend en charge tous vos besoins,
                            avec une préoccupation en tête : votre entière satisfaction. Découvrez comment PKplus
                            vous offre de déléguer votre ménage à domicile en toute simplicité, résultats de qualité professionnelle à la clé…</p> 
                    </div>
                </div>
                <div>
                    <img src={imgMenager} alt="photo d'un menager" className="w-full" />

                </div>
            </div>
        </>
    );
};

export default Home