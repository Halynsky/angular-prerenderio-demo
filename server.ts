import * as express from 'express';
import * as path from "path";

(async () => {

  const app: express.Application = express();

  app.use(require('prerender-node').set('prerenderToken', 'jMWhilZTqX31YvC649bq'));

  app.use('/', express.static(path.join(__dirname, 'dist')))

  // UI Controller for Angular app
  app.get(`/my-page-prerendered`, (req, res) => {
    res.sendFile('my-page-prerendered.html', { root: path.join(__dirname, 'dist/assets') });
  });

  app.get(/^(?!api).*/, (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'dist') });
  });

  // run server
  app.listen(process.env.PORT, () => {
    console.log("Server is started in " + process.env.NODE_ENV + " mode");
    console.log('Server listening on port ' + process.env.PORT + '!');
  });

})()
