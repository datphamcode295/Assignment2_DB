const sql = require("./db.js");


// constructor
const Book = function(book) {
  this.isbn = book.isbn,
  this.title = book.title,
  this.isDigital = book.isDigital,
  this.genre = book.genre,
  this.status = book.status,
  this.year_of_publication = book.year_of_publication

};


Book.getAllGenre = (genre,result) => {
    sql.query(`SELECT * FROM books WHERE Genre = "${genre}"`,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

Book.getAllAuthor = (author,result) => {
    sql.query(`
    SELECT al.* 
    FROM (
    SELECT * FROM
    book_writer AS bw
    JOIN books AS b
    ON bw.ID_information = b.ISBN
    ) AS al
    JOIN author AS a
    ON a.ID = al.Author_ID
    WHERE a.name = '${author}';
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

  Book.getAllKeyword = (keyword,result) => {
    sql.query(`
    SELECT * 
    FROM books b
    JOIN keywords kw
    ON b.ISBN = kw.Book_ID
    WHERE kw.keywords = '${keyword}';
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

  Book.getAllYear = (year,result) => {
    let endyear= parseInt(year) +1;
    sql.query(`
    SELECT * FROM books
    WHERE books.Year_of_publication > '${year}-01-01' AND books.Year_of_publication < '${endyear}-01-01'
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM(
        SELECT * 
        FROM total_order AS t
        NATURAL JOIN sub_order AS s
        WHERE t.Status = 'successful') inf
        JOIN books AS b
        ON b.ISBN = inf.ISBN
        WHERE inf.Date > '1989-${month}-00' AND inf.Date < '1989-${endmonth}-00' AND inf.ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllTransMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00'  AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllCancelMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00' AND Status = 'cancel' AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllPendingMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00' AND Status = 'pending' AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  module.exports = Book;