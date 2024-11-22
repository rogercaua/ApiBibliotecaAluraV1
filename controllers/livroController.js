import livro from "../models/livro.js";

class LivroController {

  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res
      .status(200)
      .json({livro: listaLivros});
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message}- falha na requicicao` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autor = await autor.findById(req.body.id)
      const livroCompleto =  {...novoLivro, autor: {...autor._doc} }
      const livroCriado = livro.create(livroCompleto)
      res
        .status(200)
        .json({ message: "Livro Cadastrado com sucesso", Livro: livroCriado });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message}- falha ao cadastrar livro` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const livro = await livro.findById(req.params.id);
      res
      .status(200)
      .json(livro);
    } catch (err) {
      res
      .status(401)
      .son({ message: `${err.message}- falha na requicicao do livro` });
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const livro = await livro.findByIdAndUpdate(req.params.id, req.body);
      res
      .status(200)
      .json({message: "Livro atualizado"});
    } catch (err) {
      res
      .status(401)
      .json({ message: `${err.message}- falha na requicicao do livro` });
    }
  }

  static async deletarLivroPorId(req, res) {
    try {
      const livro = await livro.findByIdAndDelete(req.params.id);
      res
      .status(200)
      .json({message: "Livro deletado"});
    } catch (err) {
      res
      .status(401)
      .json({ message: `${err.message}- falha na requicicao` });
    }
  }

  static async buscarLivroPorEditora(req, res) {
    const editora = req.query.editora
    try{
      const livrosPorEditora = await livro.find({ editora: editora})
      res
        .status(200)
        .json(livrosPorEditora)
    }catch (err) {
      res
      .status(401)
      .json({ message: `${err.message}- falha na requicicao` });
    }
  }
  
}

export default LivroController;
