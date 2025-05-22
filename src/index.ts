import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";

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
  }
}
