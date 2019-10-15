const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}, URL: ${req.URL}`);

  next();
  console.timeEnd('Request');
});

function checkProjectExist(req, res, next) {

  if(!req.body.title) {
    return res.status(400).json({ error: 'User name is required' });
  };

  return next();
}

