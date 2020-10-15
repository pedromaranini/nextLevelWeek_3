import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota
// Recurso

// Método HTTP = GET, POST, PUT, DELETE
// Parãmetros = 
// GET = BUSCAR INFORMAÇÃO
// POST = CRIANDO INFORMAÇÃO NOVA
// PUT = EDITAR UMA INFORMAÇÃO
// DELETE - DELETAR UMA INFORMAÇÃO

app.listen(3333);