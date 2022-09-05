const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.get("/api/cocktails", async (req, res) => {
  // const email = req.session.email;
  let result = {}
  const email = 'tester@testemail.com'
  result = await db.query('select id from users where email = $1',[email])
  const id = result.rows[0].id
  console.log(id)

  const sql = `select name from cocktail where id not in 
                  (select cocktail_id
                  from cocktail_ingredients ci
                  where not exists (select 1 from cabinet_contents cc
                                    where cc.user_id = $1
                                    and   cc.liquor_id = ci.liquor_id
                                    and   cc.volume >= ci.volume)
                  );`

  result = await db.query(sql, [id])
  console.log(result.rows)                    
  res.json()
});

router.get("/api/liquers", (req, res) => {});

router.get("/api/cabinet", (req, res) => {});

router.post("/api/cabinet", (req, res) => {
  const {} = req.body;
});

router.delete("/api/cabinet/:id", (req, res) => {
  const id = req.params.id;
});

module.exports = router;
