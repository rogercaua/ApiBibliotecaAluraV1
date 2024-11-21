import express from "express";
import routes from "./routes/index.js";


const app = express();

routes(app)


app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

// app.get('/livros', async (req, res) => {
//   const listaLivros = await livro.find({});
//   res.status(200).json(listaLivros);
// });

app.post('/buscalivro/:id', (req, res) => {
  const index = buscalivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req, res) => {
  const index = buscalivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {
  const index = buscalivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('livro removido com sucesso');
  
})
export default app;