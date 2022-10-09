const express = require("express")

const namesCtrl = require('../controllers/names')

const router = express.Router()

router.post("/create-name", namesCtrl.createName)
router.get("/", namesCtrl.getNames)

module.exports = router;