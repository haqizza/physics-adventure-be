import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import { logger } from './middleware/errorLogging';

const FE_HOST: string = process.env.FE_HOST || 'localhost';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: FE_HOST
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use((err: any, req: any, res: any, next: any) => {
      logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(err.status || 500).send('Something broke!');
    });

    process.on('uncaughtException', function(event) {
      console.log('An error has occured. error is: %s and stack trace is: %s', event, event.stack);
      console.log("Process will restart now.");
      process.exit(1);
    })
  }
}
