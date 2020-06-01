// ----- JS de conexion a Oracle ----- //
const objOracle = require("oracledb");
cns = {
  user: "carlos",
  password: "car47yo0Ora",
  connectString: "MSI-CA/XE",
};

error = (err, rs, cn) => {
  if (err) {
    console.log(err.message);
    rs.contentType("application/json").status(500);
    rs.send(err.message);
    if (cn != null) close(cn);
    return -1;
  }
};

open = (sql, binds, dml, rs) => {
  objOracle.getConnection(cns, (err, cn) => {
    if (error(err, rs, null) == -1) return;
    cn.execute(sql, binds, { autoCommit: dml }, (err, result) => {
      if (error(err, rs, cn) == -1) return;
      rs.contentType("application/json").status(200);
      if (dml) rs.send(JSON.stringify(result.rowsAffected));
      else {
        console.log(result.metaData);
        rs.send(JSON.stringify(result.rows));
      }
      close(cn);
    });
  });
};

close = (cn) => {
  cn.release((err) => {
    if (err) {
      console.log(err.message);
    }
  });
};

exports.open = open;
exports.close = close;
