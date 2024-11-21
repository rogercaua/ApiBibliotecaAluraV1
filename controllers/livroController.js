import livro from "../models/livro.js";

class LivroController {

  static async listarLivros(req, res) {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
  };

  static async cadastrarLivro(req, res) {
    const novoLivro = await livro.create(req.body)
    res.status(200).json({message: "Livro Cadastrado com sucesso", Livro: novoLivro})
  }catch(err) {
    res.status(500).json({message: `${err.message}- falha ao cadastrar livro`})
  }

  static async buscarLivros(req,res) {
    try {
      const livro = await livro.findOneById(req.params.id)
      res.status(200).json(livro);
    } catch(err) {
      res.status(401).json("error:",err)
    }
  }

};

export default LivroController;