import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  nacionalidade: { type: String }
}, { versionKey: false });

const autor = mongoose.Model("autores", autorSchema);

export { autor, autorSchema };