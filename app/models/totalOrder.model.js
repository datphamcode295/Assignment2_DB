const sql = require("./db.js");



// constructor
const TotalOrder = function(totalOrder) {
  this.shipping_address = totalOrder.shipping_address
  
};


TotalOrder.updateById = (id, totalOrder, result) => {
    sql.query(
        "UPDATE total_order SET Shipping_address = ? WHERE order_ID = ?",
      [totalOrder.shipping_address, id],
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
  
        console.log("updated user: ", { id: id, ...totalOrder });
        result(null, { id: id, ...totalOrder });
      }
    );
  };

  TotalOrder.updateStatusById = (id, totalOrder, result) => {
    sql.query(
        "UPDATE total_order SET Status = ? WHERE order_ID = ?",
      ["pending", id],
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
  
        console.log("updated user: ", { id: id, ...totalOrder });
        result(null, { id: id, ...totalOrder });
      }
    );
  };

module.exports = TotalOrder;
