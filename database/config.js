// getting-started.js
const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("Conexión a la  base de datos exitoso.");
  } catch (error) {
    console.log(error);
    throw new Error("Error conectandose a la base de datos");
  }
};

module.exports = {
  DBConnection,
};
