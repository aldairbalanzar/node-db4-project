const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'hey!'})
});

server.use('/api/recipes', recipesRouter);

module.exports = server;