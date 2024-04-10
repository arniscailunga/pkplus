const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userRegister = async (req, res) => {
    try {
        const { nom, email, MotDePasse, Age, NiveauEtudes } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        // Si l'utilisateur existe déjà, retourner une erreur
        if (existingUser) {
            return res.status(400).json({ message: "L'utilisateur avec cet email existe déjà." });
        }

        // Créer un nouvel utilisateur dans la base de données
        const newUser = await prisma.user.create({
            data: {
                nom: "prisca",
                email: "arniscailunga3@gmail.com",
                MotDePasse: "arnisca1234",
                Age: parseInt("26"),
                NiveauEtudes: "guaduat"
            }
        });


        // Répondre avec les détails de l'utilisateur créé
        res.status(201).json(newUser);
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création de l'utilisateur." });
    }
};

module.exports = {
    userRegister,
};

