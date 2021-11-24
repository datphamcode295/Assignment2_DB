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

Author.bestInDay = (year,month,day,result) => {
  sql.query(`
  SELECT Author.Name, SUM(Sub_Order.Quantity)
  FROM Author, Book_writer,Sub_Order, Total_Order,Books 
  WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and 
  Total_Order.Date < '${year}-${month}-${day} 23:59:59'
  and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID and 
  Books.ISBN = Book_writer.ID_information and Book_writer.Author_ID = Author.ID
  GROUP BY Name
  ORDER BY SUM(Sub_Order.Quantity) DESC;
  `,(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("author: ", res);
    result(null, res);
  });
};


Author.bestInMonth = (year,month,result) => {
  sql.query(`
  SELECT Author.Name, SUM(Sub_Order.Quantity)
  FROM Author, Book_writer,Sub_Order, Total_Order,Books
  WHERE MONTH(Total_Order.Date) = ${month} AND YEAR(Total_Order.Date) = ${year}  and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID and 
  Books.ISBN = Book_writer.ID_information and Book_writer.Author_ID = Author.ID
  GROUP BY Name
  ORDER BY SUM(Sub_Order.Quantity) DESC;
  `,(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("author: ", res);
    result(null, res);
  });
};

module.exports = Author;
