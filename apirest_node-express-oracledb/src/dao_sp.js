const oracledb = require("oracledb");
cns = {
  user: "carlos",
  password: "car47yo0Ora",
  connectString: "MSI-CA/XE",
};

async function executeSP(p_cod, res) {
  const conn = oracledb.getConnection(cns);
  const plsql = `BEGIN pkg_test_producto.get_producto(:cod, :cursor); END;`;

  result = await (await conn).execute(plsql, {
    cod: p_cod,
    cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
  });
  console.log(result.implicitResults);
}

exports.executeSP = executeSP;

// executeSP = async (p_cod, rs) => {
//   const connection = oracledb.getConnection(cns);
//   connection.execute(
//     "BEGIN pkg_test_producto.get_producto(:cod, :cursor); END;",
//     {
//       cod: p_cod,
//       cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
//     },
//     (err, result) => {
//       console.log(result.implicitResults);
//     }
//   );
// };

// executeSP = async (p_cod, res) => {
//   let conn = await oracledb.getConnection(cns);
//   const result = await conn.execute(
//     "BEGIN pkg_test_producto.get_producto(:cod, :cursor); END;",
//     {
//       cod: p_cod,
//       cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
//     }
//   );

//   const resultSet = result.outBinds.cursor;
//   res.contentType("application/json").status(200);
//   res.send(JSON.stringify(resultSet.rows));

//   // let rows;
//   // do {
//   //   rows = await resultSet.getRows(numRows); // get numRows rows at a time
//   //   if (rows.length > 0) {
//   //     console.log("getRows(): Got " + rows.length + " rows");
//   //     console.log(rows);
//   //   }
//   // } while (rows.length === numRows);

//   // always close the ResultSet
//   await resultSet.close();
// };
