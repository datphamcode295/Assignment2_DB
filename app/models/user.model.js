const sql = require("./db.js");


// constructor
const User = function(user) {
  this.name = user.name;
  this.date_of_birth = user.date_of_birth ;
  this.id = user.id;
  this.is_staff = user.is_staff;
};


User.updateById = (id, user, result) => {
    sql.query(
        "UPDATE users SET Name = ?, Date_of_birth = ? WHERE id = ?",
      [user.name, user.date_of_birth, id],
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
  
        console.log("updated user: ", { id: id, ...user });
        result(null, { id: id, ...user });
      }
    );
  };

module.exports = User;
