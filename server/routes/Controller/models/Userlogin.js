const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    try {
      

        // Générer un jeton JWT avec les informations de l'utilisateur
        const token = jwt.sign({ userId: newUser.id }, 'votre_secret_key_secrete', { expiresIn: '1h' });

        // Répondre avec les détails de l'utilisateur créé et le jeton JWT
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création de l'utilisateur." });
    }
};

module.exports = {
    userRegister,
};
