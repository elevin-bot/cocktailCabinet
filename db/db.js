const pg = require("pg");

const db = new pg.Pool({
  database: "cocktail_cabinet",
});

module.exports = db;
