const sql = require("./db.js");


// constructor
const CreditCard = function(creditCard) {
  this.ownner_name = creditCard.ownner_name,
  this.bank = creditCard.bank,
  this.bank_branch = creditCard.bank_branch,
  this.expired_day = creditCard.expired_day
  
};


CreditCard.updateById = (id, creditCard, result) => {
    sql.query(
        "UPDATE credit_card SET ownner_name = ? , bank = ?, bank_branch = ?, expired_day = ?  WHERE ID_user = ?",
      [creditCard.ownner_name, creditCard.bank,creditCard.bank_branch, creditCard.expired_day, id],
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
  
        console.log("updated user: ", { id: id, ...creditCard });
        result(null, { id: id, ...creditCard });
      }
    );
  };

module.exports = CreditCard;
