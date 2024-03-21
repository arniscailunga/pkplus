import imgFacebook from "./assets/facebook.png"
import imgInstagram from "./assets/instagram.png"
import imgGroup from "./assets/Group.png"
import imgEllipse from "./assets/Ellipse.png"
 import imgHome from "./assets/Home.png"
import imgSerenite from "./assets/Serenite.png"
import imgChercher from "./assets/Chercher.png"




const Footer = () => {
    return (

        <>
            <div className='bg-slate-300 border-e-red-100 text-blue-900 font-semibold p-6 flex justify-around'>
                <div className="flex items-center gap-x-5">
                    <img src={imgGroup} alt="suivez nos actualité" />
                    <span>qualités</span>
                </div>
                <div className="flex items-center gap-x-5">
                    <img src={imgSerenite} alt="suivez nos actualité" />
                    <span>Séverénité</span>
                </div>
                <div className="flex items-center gap-x-5">
                    <img src={imgHome} alt="suivez nos actualité" />
                    <span>Proximité</span>
                </div>
                <div className="flex items-center gap-x-5">
                    <img src={imgEllipse} alt="suivez nos actualité" />
                    <span>Simplicité</span>
                </div> 
            </div>
            <div className="bg-blue-900 p-12 text-white">
                <div className="flex justify-between">
                    <div className="bg-white h-max p-3 rounded-[15px]">
                        <div className="text-red-500 text-center font-bold text-2xl mb-3"><span className="text-blue-900">PK</span> plus</div>
                        <p className="text-blue-900">plus propre plus proche</p>
                    </div>
                    <div className=" ">
                        <h3 className="text-white text center ">Suivez nos actualités</h3>
                        <div className="flex gap-x-6">
                            <img src={imgFacebook} alt="suivez nos actualité" className="w-12 h-12 border-2 rounded-full border-red-700 p-2" />
                            <img src={imgInstagram} alt="photo d'un menager" className="w-12 h-12 border-2 rounded-full border-red-700 p-2" />
                        </div>
                    </div>
                    <div >
                        <h3 className="my-6">Je trouve mon agence approximité de</h3>
                        <div className="flex items-center">
                            <input type="search" placeholder="Ville ou code postal" className="p-2 rounded-[15px] text-center" />
                            <img src={imgChercher} alt="photo d'un menager" className="w-12 h-12 p-2 rounded-full bg-blue-900 -ml-8" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-x-24 my-12 ">
                    <div>
                        <h3 className="my-6">vous etes à la recherche d'un emploi</h3>
                        <div className="border-2 p-2  rounded-[15px]">Accedez à nos offres </div>
                    </div>
                    <div>
                        <h3 className="my-6">vous souhaitez entreprendre</h3>
                        <div className="border-2 p-2 border-color-blue-300 rounded-[15px]">Dévenez franchisé </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>PKplus et vous</h3>
                        <p>Qui sommes nous?</p>
                        <p>Blog</p>
                        <p>Connectez vous</p>
                    </div>
                    <div>
                        <h3>Nos prestation</h3>
                        <p>Ménage à domicile</p>
                        <p>Jardinage à domicile</p>
                        <p>Gardinage à domicile</p>
                    </div>
                    <div>
                        <h3>Liens utile</h3>
                        <p>Mention legale</p>
                    </div>
                </div>
                
            </div>
            <div className='bg-blue-950 text-white p-6 flex justify-between'>
                <h3 className="text-white">2024 PKplus</h3>
                <h1 >Plan du site|Mention legale|Politique de confidentialité|Paramètres de cokies</h1>

            </div>
        </>
    );
};

export default Footer;