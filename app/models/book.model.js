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
  //////Dang
Book.allbooksperwarehouse = (month,year,result) => {

    sql.query(`
    SELECT books.ISBN, warehouse.Name, SUM(store_information.Quantity)
    FROM warehouse, books, store_information, sub_order, total_order
    WHERE MONTH(total_order.Date) = ? AND YEAR(total_order.Date) = ?  
      and books.ISBN = sub_order.ISBN 
      and sub_order.Order_ID=total_order.order_ID 
      and store_information.Book_ID = books.ISBN 
      and store_information.Warehouse_name= warehouse.Name
    GROUP BY ISBN, Name;
    `,[month,year],(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
};
Book.mostexportedbookinmonth = (month,year,result) => {

  sql.query(`
  SELECT books.ISBN,warehouse.Name, SUM(sub_order.Quantity)
  FROM books, sub_order, total_order, warehouse,store_information
  WHERE MONTH(total_order.Date) = ? AND YEAR(total_order.Date) = ?  
  and books.ISBN = sub_order.ISBN 
  and sub_order.Order_ID=total_order.order_ID 
  and store_information.Book_ID = books.ISBN 
  and store_information.Warehouse_name= warehouse.Name
  GROUP BY ISBN, Name
  ORDER BY SUM(sub_order.Quantity) DESC;
  `,[month,year],(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};
Book.getbookbygenre = (month,year,result) => {
  let endmonth= parseInt(month) +1;

  month = month>10?month:"0"+month;
  endmonth = endmonth>10?endmonth:"0"+endmonth;
  sql.query(`SELECT * FROM 
              (SELECT  al.Genre, ROW_NUMBER() OVER (PARTITION BY Genre ORDER BY Genre) AS row_num 
                FROM (SELECT b.Genre FROM(
                  SELECT * FROM total_order AS t NATURAL JOIN sub_order AS s 
                  WHERE t.Status ='successful') inf JOIN books AS b ON b.ISBN = inf.ISBN 
                  WHERE inf.Date >'${year}-${month}-00 00:00:00'AND inf.Date <'${year}-${endmonth}-00 00:00:00'
                  AND inf.ID_user = 254) al) aa WHERE row_num>1;

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
Book.mostbookspuschased = (month,year,id_user,result) => {
  sql.query(`SELECT sub_order.Order_ID, total_order.Date, SUM(sub_order.Quantity)
  FROM sub_order, total_order,books
  WHERE MONTH(total_order.Date) = ? AND YEAR(total_order.Date) = ?  and books.ISBN = sub_order.ISBN and sub_order.Order_ID=total_order.order_ID AND ID_user = ?
  GROUP BY Date
  ORDER BY SUM(sub_order.Quantity) DESC;

  `,[month,year,id_user],(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};
Book.getprintedandebookmade = (month,year,id_user,result) => {
  sql.query(`SELECT *
  FROM sub_order, total_order,books
  WHERE MONTH(total_order.Date) = ? AND YEAR(total_order.Date) = ?  
  and books.ISBN = sub_order.ISBN and sub_order.Order_ID=total_order.order_ID 
  AND ID_user = ?
  `,[month,year,id_user],(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};


module.exports = Book;

  /*


    */