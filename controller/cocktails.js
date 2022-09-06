const express = require("express")
const db = require("../db/db")
const router = express.Router()

// 3. Get full liquor list to be used in a drop down list for user to select when adding to cabinet
router.get("/api/liquor", async (req, res) => {
  result = await db.query('select id, name from liquor order by name')
  console.log(result.rows)                    
  res.json(result.rows)
});

// 4. Get cabinet contents for the logged on user
router.get("/api/cabinet", async (req, res) => {
  const sql = `select l.id, l.name, cc.volume
               from   cabinet_contents cc
               join   liquor l on l.id = cc.liquor_id
               where  cc.user_id = $1
               order by l.name
              `
  const result = await db.query(sql, [req.session.user_id])
  console.log(result.rows)                    
  res.json(result.rows)
});

// 5. Get cocktails for which all required alcohol exists in the cabinet with sufficient volume
router.get("/api/cocktails", async (req, res) => {
  // const id = req.session.user_id;
  // result = await db.query('select id from users where email = $1', [email])
  // const id = result.rows[0].id
  // console.log(id)

  const sql = `select cocktail_id, name, description from cocktail where id not in 
                  (select cocktail_id
                   from   cocktail_ingredients ci
                   where  not exists (select 1 from cabinet_contents cc
                                    where cc.user_id = $1
                                    and   cc.liquor_id = ci.liquor_id
                                    and   cc.volume >= ci.volume)
                  )`

  const result = await db.query(sql, [req.session.user_id])
  console.log(result.rows)                    
  res.json(result.rows)
});

// 6. Update volumes in cabinet for the chosen recipe
router.put("/api/cabinet/:id", async (req, res) => {
  const cocktail_id = req.params.id

  try {
    // Update volumes in cabinet
    const sql = `UPDATE cabinet_contents cc
                 SET    volume = cc.volume - ci.volume
                 FROM   cocktail_ingredients ci 
                 WHERE  ci.liquor_id = cc.liquor_id
                 AND    cc.user_id = $1
                 AND    ci.cocktail_id = $2`
    dbRes = await db.query(sql, [req.session.user_id, cocktail_id])

    // Delete bottles if volume zero or less
    dbRes = await db.query("DELETE FROM cabinet_contents WHERE user_id = $1 AND volume <= 0;", [req.session.user_id])
    dbRes.json({})
  }
  catch(err) {
    dbRes.status(500).json({})
  }
})

// 7a. Add liquor to cabinet
router.post("/api/cabinet", async (req, res) => {
  const { liquor_id, volume } = req.body
  
  try {
    const sql = "INSERT INTO cabinet_contents(user_id, liquor_id, volume) VALUES($1, $2, $3)"
    const dbRes = db.query(sql, [req.session.user_id, liquor_id, volume])
    dbRes.json({})
  }
  catch(err) {
    dbRes.status(500).json({})
  }
})

// 7b. Update liquor volume in cabinet
router.put("/api/cabinet", async (req, res) => {
  const { liquor_id, volume } = req.body;

  try {
    const sql = "UPDATE cabinet_contents set volume = $3) WHERE user_id = $1 and liquor_id = $2"
    const dbRes = await db.query(sql, [req.session.user_id, liquor_id, volume])
    dbRes.json({})
  }
  catch(err) {
    dbRes.status(500).json({})
  }
})

// 7c. Delete liquor from cabinet
router.delete("/api/cabinet/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE from cabinet_contents where user_id = $1 and liquor_id = $2", [req.session.user_id, id]).then(result => res.json({}))
})

// 8. Add new cocktail
router.post("/api/cocktail", async (req, res) => {
  const { name, description, procedure } = req.body
  const cocktailIngredients = req.query.arr
  
  try {
    const sql = "INSERT INTO cocktail(name, description, procedure) VALUES($1, $2, $3) RETURNING id"
    const dbRes = await db.query(sql, [name, description, procedure])
    console.log(dbRes.id)
    const cocktail_id = dbRes.id
    
    // Insert cocktail Ingredients
    cocktailIngredients.forEach(element => {
      const sql = "INSERT INTO cocktail_ingredients(cocktail_id, liquor_id, volume) VALUES($1, $2, $3)"
      const dbRes = db.query(sql, [cocktail_id, element.liquor_id, element.volume])  
    })
    dbRes.json({})
  }
  catch(err) {
    dbRes.status(500).json({})
  }
})

module.exports = router;
