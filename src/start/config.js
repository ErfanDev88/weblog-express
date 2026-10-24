import helmet from "helmet"
import { limiter } from "../utils/rate-limiter.js"
import e from "express"

export default function configurationMiddleware(app){
    app.use(e.json())
    app.use(helmet())
    app.use(limiter)
}