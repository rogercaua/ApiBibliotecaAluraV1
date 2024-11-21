import app from "./app.js"
import mongoose from "mongoose";
import "dotenv/config"

const PORT = 6969;

const DB = process.env.DB_URL

mongoose.connect(DB)
.then(() => console.log("conectado ao banco de dados"))
.catch(err => console.log("Erro ao conectar ao banco de dados:", err))


app.listen(PORT, () => {
  console.log('Server listening on port 6969')
})

