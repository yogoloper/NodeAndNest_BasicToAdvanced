import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server {
  public app: express.Express;

  constructor() {
    const app: express.Express = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }
  private setMiddleware() {
    /**
     * logging middleware
     */
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('This is logging middleware');
      next();
    });

    /**
     * json middleware
     */
    this.app.use(express.json());

    this.setRoute();
    /**
     * 404 middleware
     */
    this.app.use((req, res, next) => {
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();

    const port: number = 8000;
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
