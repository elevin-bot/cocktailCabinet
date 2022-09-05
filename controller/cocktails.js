const express = require("express");
const db = require("../db/db");
const router = express.Router();

// Get cocktails for which all required alcohol exists in the cabinet with sufficient volume
router.get("/api/cocktails", async (req, res) => {
  // const id = req.session.id;
  const id = 1
  // result = await db.query('select id from users where email = $1', [email])
  // const id = result.rows[0].id
  // console.log(id)

  const sql = `select name, description from cocktail where id not in 
                  (select cocktail_id
                   from   cocktail_ingredients ci
                   where  not exists (select 1 from cabinet_contents cc
                                    where cc.user_id = $1
                                    and   cc.liquor_id = ci.liquor_id
                                    and   cc.volume >= ci.volume)
                  )`

  const result = await db.query(sql, [id])
  console.log(result.rows)                    
  res.json()
});

// Get full liquor list to be used in a drop down list for user to select when adding to cabinet
router.get("/api/liquor", async (req, res) => {
  result = await db.query('select id, name from liquor order by name')
  console.log(result.rows)                    
  res.json()
});

// Get cabinet contents for the logged on user
router.get("/api/cabinet", async (req, res) => {
  const sql = `select l.name, cc.volume
               from   cabinet_contents cc
               join   liquor l on l.id = cc.liquor_id
               where  cc.user_id = $1
               order by l.name
              `
  const result = await db.query(sql, [req.session.id])
  console.log(result.rows)                    
  res.json()
});

// 
router.post("/api/cabinet", (req, res) => {
  const {} = req.body;
});

router.put("/api/cabinet", (req, res) => {
  const {} = req.body;
});

router.delete("/api/cabinet/:id", (req, res) => {
  const id = req.params.id;
});

module.exports = router;
