import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de usuários');

  // JSON

  res.json([
    'user01',
    'user02',
    'user03',
    'user04'
  ]);
});

app.listen(3333);
