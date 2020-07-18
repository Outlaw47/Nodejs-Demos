const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const dao = require("./dao");
const dao_sp = require("./dao_sp");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get("/producto", function (request, response) {
  var opc = parseInt(request.query.opc);
  switch (opc) {
    case 1:
      sql = "SELECT COD, NOMBRE, PU, FECFAB FROM PRODUCTO";
      dao.open(sql, [], false, response);
      break;
    case 2:
      sql = "SELECT COD, NOMBRE, PU, FECFAB FROM PRODUCTO WHERE COD =:cod";
      var cod = parseInt(request.query.cod);
      dao.open(sql, [cod], false, response);
      break;
    case 3:
      sql =
        "INSERT INTO PRODUCTO (NOMBRE, PU, FECFAB)" +
        " VALUES (:nombre, :pu, TO_DATE(:fecfab,'DDMMYYYY'))";
      var nombre = request.query.nombre;
      var pu = parseFloat(request.query.pu);
      var fecfab = request.query.fecfab;
      console.log(fecfab);
      dao.open(sql, [nombre, pu, fecfab], true, response);
      break;
    case 4:
      sql = "DELETE FROM PRODUCTO WHERE COD=:cod";
      var cod = parseFloat(request.query.cod);
      dao.open(sql, [cod], true, response);
      break;
    case 5:
      //execute the SP with ref_cursor:
      sql = "BEGIN pkg_test_producto.get_producto(:cod, :cursor); END;";
      var cod = parseInt(request.query.cod);
      //dao.open(sql, [cod], true, response);
      dao_sp.executeSP(cod, response);
      break;
    default:
      response.contentType("application/json").status(200);
      response.send(JSON.stringify("Opcion no valida."));
  }
  response.end;
});

app.use(router);
app.listen(3000, function () {
  console.log("Servidor Web - http://localhost:3000");
});
