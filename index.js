var mongoose = require("mongoose");
var app = require("./app");
var port = 3900;

app.set("port", process.env.PORT || port);

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/digital-library-mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a la base de datos correcta !!!");

    // Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port, () => {
      console.log("Servidor corriendo en http://localhost:" + port);
    });
  });
