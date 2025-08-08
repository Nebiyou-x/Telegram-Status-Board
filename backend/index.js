// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let statuses = []; // Simple in-memory storage

// POST /status - Save status & respond
app.post("/status", (req, res) => {
    const { userId, name, status } = req.body;
    if (!status || status.trim() === "") {
        return res.status(400).json({ error: "Status cannot be empty" });
    }

    const entry = { userId, name, status, time: new Date() };
    statuses.unshift(entry); // Add to top
    statuses = statuses.slice(0, 50); // Keep latest 50

    console.log("New status:", entry);
    res.json({ success: true, message: "Status posted!" });
});

// GET /latest - Last 3 public statuses
app.get("/latest", (req, res) => {
    res.json(statuses.slice(0, 3));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
