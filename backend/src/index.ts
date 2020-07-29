import express, { Request, Response } from 'express';

const app = express();

app.get('/', function (req: Request, res: Response) {
  console.log('Hola desde: ', req.url);
  res.send('Hola Mundo, desde node typescript');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
