import helmet from "helmet";
import { limiter } from "../utils/rate-limiter.js";
import e from "express";
import bodyParser from "body-parser";

export default function configurationMiddleware(app) {
  app.use(e.json());
  app.use(helmet());
  app.use(limiter);
  app.use(e.urlencoded({ extended: true }));
}
