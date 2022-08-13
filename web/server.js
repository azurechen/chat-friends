const functions = require('firebase-functions');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  conf: { distDir: '.next' },
});

const nextjsHandler = server.getRequestHandler();
exports.nextServer = functions
  .runWith({
    minInstances: 5,
  })
  .https.onRequest((req, res) => {
    return server.prepare().then(() => nextjsHandler(req, res));
  });
