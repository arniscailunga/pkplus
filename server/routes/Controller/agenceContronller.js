const getAgences = (req, res) => {
    res.send('Lire');
}

const postAgences = (req, res) => {
    res.send('Creer');
}
const putAgences = (req, res) => {
    res.send('Mettre à jour');
}

const deleteAgences = (req, res) => {
    res.send('Suprimer');
}






module.exports = {
    getAgences,postAgences, putAgences, deleteAgences
}