const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.get("/api/cocktails", (req, res) => {});

router.get("/api/liquers", (req, res) => {
  const sql = "SELECT * FROM liquer_list";
  db.query(sql).then((dbRes) => {
    res.json(dbRes.rows);
  });
});

router.get("/api/cabinet", (req, res) => {
  const sql = "SELECT * FROM cabinet_contents";
  db.query(sql).then((dbRes) => {
    res.json(dbRes.rows);
  });
});

router.post("/api/cabinet", (req, res) => {
  const { user_id, liquer_id, volume } = req.body;
  const sql = `
    INSERT INTO cabinet_contents(user_id, liquer_id, volume) 
    VALUES($1, $2, $3)
  `;
  db.query(sql, [user_id, liquer_id, volume])
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
