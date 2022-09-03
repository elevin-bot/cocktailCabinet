const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.get("/api/cocktails", (req, res) => {});

router.get("/api/liquers", (req, res) => {});

router.get("/api/cabinet", (req, res) => {});

router.post("/api/cabinet", (req, res) => {
  const {} = req.body;
});

router.delete("/api/cabinet/:id", (req, res) => {
  const id = req.params.id;
});

module.exports = router;
