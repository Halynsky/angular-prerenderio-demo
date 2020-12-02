import * as express from 'express';
import * as path from "path";

(async () => {

  const server: express.Application = express();

  server.use('/', express.static(path.join(__dirname, 'dist')))

  // UI Controller for Angular app
  server.get(`/my-page-prerendered`, (req, res) => {
    res.sendFile('my-page-prerendered.html', { root: path.join(__dirname, 'dist/assets') });
  });

  server.get(/^(?!api).*/, (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'dist') });
  });

  // run server
  server.listen(process.env.PORT, () => {
    console.log("Server is started in " + process.env.NODE_ENV + " mode");
    console.log('Server listening on port ' + process.env.PORT + '!');
  });

})()
