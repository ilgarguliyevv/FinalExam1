const express = require("express")
const router = express.Router()
const cardController = require("../controllers/cardControllers.js")

router.get("/card", cardController.getAllCard)
router.get("/card/:id", cardController.getCardById)
router.post("/card", cardController.postCard)
router.patch("/card/:id", cardController.patchCardById)
router.delete("/card/:id", cardController.deleteCard)


module.exports = router