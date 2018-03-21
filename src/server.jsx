import Express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './components/App';
import Html from './containers/Html';

const server = new Express();

server.use(Express.static('dist'));

server.get('*', (req, res) => {
  const context = {};

  const appHtml = ReactDOM.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const html = ReactDOM.renderToString(<Html component={appHtml} />);

  res.status(200);
  res.send(html);
});

server.listen(3000, () => console.log('Big time app listening on port 3000!'));
