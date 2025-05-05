import { Application } from "express";
import studentAnswerRoutes from "./studentAnswer.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/answer", studentAnswerRoutes);
  }
}