import Express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';

const { NODE_PORT } = process.env;

const server = new Express();

server.get('/', (req, res) => {
	res.status(200);
	res.send('Big time!');
})

server.get('/react', (req, res) => {
	res.status(200);
  res.send(
  	ReactDOM.renderToString(
			<h1>Big time!</h1>
  	)
  );
});

server.listen(3000, () => console.log('Big time app listening on port 3000!'))