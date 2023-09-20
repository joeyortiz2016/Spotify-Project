import express from 'express';
import router from './spotify/spotify.routes.js';

const app = express();

const port = 3000;

app.use(router);

const server = app.listen(port, () => {
  console.log('listening on port', port);
});


