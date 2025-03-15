const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Seu arquivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware customizado para permitir o filtro 'like' em campos aninhados
server.use((req, res, next) => {
  // Verifica se há um filtro 'like' aplicado no campo aninhado
  if (req.query['pessoais.nome_like']) {
    const nomeLike = req.query['pessoais.nome_like'].toLowerCase();
    
    // Filtra os dados de 'funcionario' com base no nome
    const funcionarios = router.db.get('funcionario').value().filter(funcionario => {
      return funcionario.pessoais && funcionario.pessoais.nome.toLowerCase().includes(nomeLike);
    });
    
    // Sobrescreve os dados com os resultados filtrados
    res.locals.data = funcionarios;
  }

  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
