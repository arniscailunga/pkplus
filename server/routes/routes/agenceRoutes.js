const express= require("express");
const { getAgences,postAgences,putAgences,deleteAgences } = require("../controlle/agentController");
const router= express.Router();





router.get("/", getAgences)

router.post("/", postAgences)

router.put("/", putAgences)

router.delete("/", deleteAgences)





module.exports= router;