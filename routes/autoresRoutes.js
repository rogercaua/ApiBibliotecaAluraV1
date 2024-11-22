import express from 'express';
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes
  .get('/autor',AutorController.listarAutores)
  .get('autor/:id', AutorController.listarAutorPorId)
  .post('/autor', AutorController.cadastrarAutor)
  .patch('/autor/:id', AutorController.atualizarAutorPorId)
  .delete('/autor/id', AutorController.deletarAutorPorId);
  
export default routes;