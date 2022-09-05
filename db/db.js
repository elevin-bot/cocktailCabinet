const pg = require("pg");

const db = new pg.Pool({
  database: "cocktail_db",
});

module.exports = db;
