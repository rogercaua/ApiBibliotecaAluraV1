import express from 'express';
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes
  .get('/livros',LivroController.listarLivros)
  .get('livros/:id', LivroController.listarLivroPorId)
  .get('/livros/busca',LivroController.buscarLivroPorEditora)
  .post('/livros', LivroController.cadastrarLivro)
  .patch('/livros/:id', LivroController.atualizarLivroPorId)
  .delete('/livros/id', LivroController.deletarLivroPorId);
  
export default routes;