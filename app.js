const express = require('express');

const app = express();

app.use(express.json());

livros = [
  {
    id: 1,
    titulo: 'O Hobbit'
  },
  {
    id: 2,
    titulo: 'Senhor dos Aneis'
  }
]

function buscalivro(id) {
  return livros.findindex( livro => {
    return livro.id === Number(id);
  })
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

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
module.exports = app;