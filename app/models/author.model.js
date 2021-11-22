const sql = require("./db.js");


// constructor
const Author = function(author) {
  this.name = author.name,
  this.date_of_birth = author.date_of_birth,
  this.id = author.id
};

Author.findById = (id, result) => {
  sql.query(`SELECT * FROM author WHERE id = '0'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found author: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Author;
