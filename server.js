import express from 'express';
import path from 'path';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel').default;
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const PORT = 7700;
const PUBLIC_PATH = `${__dirname}/src`;
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

const targetEntry = `http://localhost:${PORT}/`;

if (isDevelopment) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
}

app.all('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  console.log(`Open your browser at ${targetEntry}`);
});
