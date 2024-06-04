const express = require("express");
const messageController = require("../controllers/messageController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/create", authMiddleware, messageController.createMesage);
router.get("/all", authMiddleware, messageController.getAllMessage);
router.get("/:id", authMiddleware, messageController.getMessageById);
router.put("/:id", authMiddleware, messageController.updateMessage);
router.delete("/:id", authMiddleware, messageController.deleteMessage);

module.exports = router;
