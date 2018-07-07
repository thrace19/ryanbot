const express = require("express")
const expressApp = express()
expressApp.get("/", (req, res) => res.json("OK"))
expressApp.listen(process.env.PORT)
