const express = require('express');
const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) =>
  res.send('Hello from TP DevOps — version ' + (process.env.APP_VERSION || 'dev'))
);

module.exports = app;
