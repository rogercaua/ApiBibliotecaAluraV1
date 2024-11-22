  import { autor } from "../models/autor.js";
 

class autorController {

  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res
      .status(200)
      .json({autor: listaAutores});
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message}- falha na requicicao` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(200)
        .json({ message: "Autor Cadastrado com sucesso", Autor: novoAutor });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message}- falha ao cadastrar Autor` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const autor = await autor.findById(req.params.id);
      res
      .status(200)
      .json(autor);
    } catch (err) {
      res
      .status(401)
      .son({ message: `${err.message}- falha na requicicao do autor` });
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const autor = await autor.findByIdAndUpdate(req.params.id, req.body);
      res
      .status(200)
      .json({message: "autor atualizado"});
    } catch (err) {
      res
      .status(401)
      .json({ message: `${err.message}- falha na requicicao do autor` });
    }
  }

  static async deletarAutorPorId(req, res) {
    try {
      const autor = await autor.findByIdAndDelete(req.params.id);
      res
      .status(200)
      .json({message: "autor deletado"});
    } catch (err) {
      res
      .status(401)
      .json({ message: `${err.message}- falha na requicicao` });
    }
  }
  
}

export default autorController;
