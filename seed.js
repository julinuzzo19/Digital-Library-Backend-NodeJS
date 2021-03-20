var mongoose = require("mongoose");
var Libro = require("./models/libro");

async function seed() {
  if ("mongodb://localhost:27017/digital-library-mongodb") {
    mongoose.connect("mongodb://localhost:27017/digital-library-mongodb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    var libros = [
      new Libro({
        isbn: "1",
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        editorial: "Reynal & Hitchcock",
        stock: 0,
        imagen:
          "https://imagessl4.casadellibro.com/a/l/t7/94/9788478887194.jpg",
      }),
      new Libro({
        isbn: "2",
        titulo: "Harry Potter",
        autor: "J. K. Rowling",
        editorial: "Salamandra",
        stock: 21,
        imagen:
          "https://images-na.ssl-images-amazon.com/images/I/91HHems0BVL.jpg",
      }),

      new Libro({
        isbn: "3",
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        editorial: "Doubleday",
        stock: 23,
        imagen:
          "https://www.planetadelibros.com.ar/usuaris/libros/fotos/167/m_libros/portada_el-codigo-da-vinci_dan-brown_201505260959.jpg",
      }),
      new Libro({
        isbn: "4",
        titulo: "El Señor de los Anillos",
        autor: "J.R.R.Tolkien",
        editorial: "Reynal & Hitchcock",
        stock: 31,
        imagen:
          "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
      }),
      new Libro({
        isbn: "5",
        titulo: "Lo que el viento se llevó",
        autor: "Margaret Mitchell",
        editorial: "Macmillan Publishers",
        stock: 32,
        imagen: "https://m.media-amazon.com/images/I/517buCKnBjL.jpg",
      }),
    ];

    await libros[0].save();
    await libros[1].save();
    await libros[2].save();
    await libros[3].save();
    await libros[4].save();
  

    mongoose.disconnect();
    console.log("Database Seeded");
  }
}
seed();
