const sql = require("./db.js");



// constructor
const TotalOrder = function(totalOrder) {
  this.shipping_address = totalOrder.shipping_address
  this.date = totalOrder.date,
  this.is_banking = totalOrder.is_banking
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
  ////dang
  TotalOrder.findlistbycardinaday = (date, result) =>{
    sql.query("SELECT * FROM total_order WHERE Date = ? AND is_banking = 0",[date],(err,res) =>{
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
      console.log("total order:",res);
      result(null, res);
    });
  };
  
  TotalOrder.findpaidbycardwithtroubleforoneday = (date,result) =>{
    sql.query("SELECT * FROM total_order WHERE Date = ? and is_banking = 0 AND (Status='unsuccessful' or Status ='error')",[date],(err,res)=>{
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
      console.log("total order:",res);
      result(null, res);
    });
  };
  
  
module.exports = TotalOrder;
