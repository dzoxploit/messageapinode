"use strict";

const { Player } = require("../models");

// Create a new player
exports.createPlayer = async (req, res) => {
  try {
    const { first_name, last_name, address, phone_number } = req.body;
    const player = await Player.create({
      first_name,
      last_name,
      address,
      phone_number,
    });
    res.status(201).json({ player });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json({ players });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single player by ID
exports.getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.json({ player });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a player by ID
exports.updatePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;
    const { first_name, last_name, address, phone_number } = req.body;
    const player = await Player.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    // Update player attributes
    player.first_name = first_name || player.first_name;
    player.last_name = last_name || player.last_name;
    player.address = address || player.address;
    player.phone_number = phone_number || player.phone_number;

    await player.save();

    res.json({ player });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a player by ID
exports.deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    await player.destroy();

    res.json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
