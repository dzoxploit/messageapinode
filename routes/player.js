const express = require("express");
const playerController = require("../controllers/playerController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/create", authMiddleware, playerController.createPlayer);
router.get("/all", authMiddleware, playerController.getAllPlayers);
router.get("/:id", authMiddleware, playerController.getPlayerById);
router.put("/:id", authMiddleware, playerController.updatePlayer);
router.delete("/:id", authMiddleware, playerController.deletePlayer);

module.exports = router;
