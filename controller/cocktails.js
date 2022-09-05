const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.get("/api/cocktails", (req, res) => {});

router.get("/api/liquors", (req, res) => {
  const sql = "SELECT * FROM liquor";
  db.query(sql).then((dbRes) => {
    res.json(dbRes.rows);
  });
});

router.get("/api/cabinet", (req, res) => {});

router.post("/api/cabinet", (req, res) => {
  const { user_id, liquor_id, volume } = req.body;
  const sql = `
    INSERT INTO cabinet_contents(user_id, liquor_id, volume) 
    VALUES($1, $2, $3)
  `;
  db.query(sql, [user_id, liquor_id, volume])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).json({});
    });
});

router.delete("/api/cabinet/:id", (req, res) => {
  const id = req.params.id;
});

module.exports = router;
