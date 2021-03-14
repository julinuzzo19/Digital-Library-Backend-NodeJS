var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use("/api/alquiler", require("./routes/alquiler"));
app.use("/api/cliente", require("./routes/cliente"));
app.use("/api/libro", require("./routes/libro"));

module.exports = app;
