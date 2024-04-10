const express = require('express')
const app = express()
const userModel = require('./routes/Controller/models/Usermodel.js')
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post("/userRegister", userModel.userRegister)

app.listen(port, () => {
  console.log(`Voici mon agence${port}`)
})