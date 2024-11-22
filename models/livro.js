import mongoose from "mongoose";
import { autorSchema } from "../models/autor.js"

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  autor: autorSchema,
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number }
}, { versionKey: false});

// primeiro parametro "livros" refere-se a colecao dentro do mongo
const livro = mongoose.model("livros", livroSchema);

export default livro;