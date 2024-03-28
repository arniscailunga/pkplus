import imgPerson from "./assets/Person.png"

const Header = () => {
    return (
        <div>
            <div className="bg-gray-200 red-500 texte blue-900 flex justify-between">
                <h1>Qui sommes-nous ?</h1>
                <h1>Le blog</h1>
                <h1>Noconseils</h1>
                <h1>Trouver mon agence</h1>
                <h1>Nous rejoindre</h1>
                <h3>
                    <a href="tel:+243850573634">+243 850 573 634</a>
                </h3>
                <img src={imgPerson} alt="phone" />
            </div>

        </div>
    );
};

export default Header;