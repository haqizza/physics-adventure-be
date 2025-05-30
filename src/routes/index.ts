import { Application } from "express";
import studentAnswerRoutes from "./studentAnswer.routes";
import entryRoutes from "./entry.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/answer", studentAnswerRoutes)
    app.use("/", entryRoutes)
  }
}