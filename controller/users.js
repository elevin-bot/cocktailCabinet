const express = require("express");
const { generateHash, isValidPassword } = require("../util/hash");
const db = require("../db/db");

const router = express.Router();

router.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = generateHash(password);

  const sqlCheckDuplicate = `
  SELECT FROM users
  WHERE email = $1
  `;
  db.query(sqlCheckDuplicate, [email])
    .then((dbRes) => {
      if (dbRes.rows.length === 1) {
        res.status(400).json({ message: "sorry user already exists" });
      } else {
        const sql = `INSERT INTO users(name, email, password) VALUES($1, $2, $3)`;
        db.query(sql, [name, email, hashedPassword])
          .then(() => {
            res.json({ message: "signup successfully" });
          })
          .catch((err) => {
            res.status(500).json({});
          });
      }
    })
    .catch((err) => {
      res.status(500).json({});
    });
});

router.post("/api/session", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE id=$1";
  db.query(sql, [email])
    .then((dbRes) => {
      if (dbRes.rows.length === 0) {
        return res.status(400).json({
          message:
            "The e-mail address and/or password you specified are not correct.",
        });
      }
      const user = dbRes.rows[0];
      const hashedPassword = user.password;
      if (isValidPassword(password, hashedPassword)) {
        req.session.email = email;
        req.session.id = user.id;
        req.session.name = user.name;
        return res.json({});
      }

      return res.status(400).json({
        message:
          "The e-mail address and/or password you specified are not correct.",
      });
    })
    .catch((err) => {
      res.status(500).json({});
    });
});



router.get("/api/session", (req, res) => {
  const id = req.session.id;
  const name = req.session.name;

  // if (!email) {
  //   return res.status(401).json({ message: "Not logging in" });
  // } else {
  //   return res.json({ email: email });
  // }
  if (!id || !name) {
    return res.status(401).json({ message: "Unable to log in "});
  } else {
    return res.json({ id: id, name: name });
  }
});

module.exports = router;
