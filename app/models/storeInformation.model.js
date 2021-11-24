const sql = require("./db.js");


// constructor
const StoreInformation = function(storeInformation) {
  this.book_id = storeInformation.book_id,
  this.houseware_name = storeInformation.houseware_name,
  this.quantity = storeInformation.quantity
};


StoreInformation.updateById = (storeInformation, result) => {
    console.log(`UPDATE Store_information SET Quantity = ${storeInformation.quantity} WHERE Book_ID = ${storeInformation.book_id} AND Warehouse_name = "${storeInformation.houseware_name}"`);
    sql.query(
        `UPDATE Store_information SET Quantity = ${storeInformation.quantity} WHERE Book_ID = "${storeInformation.book_id}?" AND Warehouse_name = "${storeInformation.houseware_name}"`,
      [storeInformation.quantity, storeInformation.book_id, storeInformation.houseware_name],
      (err, res) => {
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
  
        console.log("updated user: ", {book_id: storeInformation.book_id,houseware_name: storeInformation.houseware_name, quantity: storeInformation.quantity, ...storeInformation});
        result(null, {book_id: storeInformation.book_id,houseware_name: storeInformation.houseware_name, quantity: storeInformation.quantity, ...storeInformation });
      }
    );
  };

module.exports = StoreInformation;
