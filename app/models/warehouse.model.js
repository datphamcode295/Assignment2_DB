const sql = require("./db.js");



// constructor
const warehouse = function(warehouse) {
    this.name = warehouse.name,
    this.address = warehouse.address
};

warehouse.findlessthan10perday = (date, result) =>{
    sql.query("SELECT warehouse.name, books.ISBN, store_information.Quantity FROM warehouse, books, store_information, sub_order, total_order WHERE total_order.Date = ? AND books.ISBN = sub_order.ISBN AND sub_order.Order_ID=total_order.order_ID AND store_information.Book_ID = books.ISBN AND store_information.Warehouse_name= warehouse.Name AND store_information.Quantity < 10;",[date],(err,res) =>{
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Warehouse:",res);
      result(null, res);
    });
};

module.exports = warehouse;

/*
SELECT warehouse.Name, books.ISBN, store_information.Quantity 
FROM warehouse, books, store_information, sub_order, total_order 
WHERE total_order.Date ="1989-06-18 04:48:36 " and 
books.ISBN = sub_order.ISBN 
and sub_order.Order_ID = total_order.order_ID 
and store_information.Book_ID = books.ISBN 
and store_information.warehouse_name =warehouse.Name 
and store_information.Quantity < 10;
*/