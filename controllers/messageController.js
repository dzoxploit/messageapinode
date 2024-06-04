"use strict";

const { Message } = require("../models");

// Create a new player
exports.createMesage = async (req, res) => {
  try {
    const { first_name, last_name, message } = req.body;
    const messages = await Message.create({
      first_name,
      last_name,
      message,
    });
    res.status(201).json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all players
exports.getAllMessage = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single player by ID
exports.getMessageById = async (req, res) => {
  try {
    const messageId = req.params.id;
    const messages = await Message.findByPk(messageId);

    if (!messages) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a player by ID
exports.updateMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    const { first_name, last_name, message } = req.body;
    const messages = await Message.findByPk(messageId);

    if (!messages) {
      return res.status(404).json({ error: "Player not found" });
    }

    // Update player attributes
    messages.first_name = first_name || player.first_name;
    messages.last_name = last_name || player.last_name;
    messages.message = message || player.messages;

    await messages.save();

    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a player by ID
exports.deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    const messages = await Message.findByPk(messageId);

    if (!messages) {
      return res.status(404).json({ error: "message not found" });
    }

    await player.destroy();

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
