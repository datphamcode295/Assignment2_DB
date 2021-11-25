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

Author.samecategory = (data, result) => {
  sql.query(`SELECT * FROM ( SELECT * FROM book_writer AS bw JOIN books AS b ON bw.ID_information = b.ISBN) As al JOIN author AS a ON a.ID = al.Author_ID WHERE al.Genre= ?;`,[data], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    // not found Tutorial with the id
    result(null,res);
  });
};

Author.samenumberofkeyword = (data, result) => {
  sql.query(`SELECT * FROM(
              (SELECT*FROM(
                (SELECT * FROM book_writer AS bw JOIN books AS b ON bw.ID_information = b.ISBN) 
                  AS al JOIN author AS a ON a.ID = al.Author_ID) ) AS d JOIN keywords AS kw ON d.ISBN = kw.Book_ID) 
                WHERE kw.keywords =?;`
  ,[data], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    // not found Tutorial with the id
    result(null,res);
  });
};


module.exports = Author;
