import express, { Application } from "express";
import Server from "./src/index";

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason)
})

process.on('uncaughtException', function(event) {
  console.log('An error has occured. error is: %s and stack trace is: %s', event, event.stack)
  console.log("Process will restart now.")
  process.exit(1)
})

const app: Application = express()
const server: Server = new Server(app)
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080
const HOST: string = process.env.HOST || 'localhost'

try {
  app
  .listen(PORT, HOST, function () {
    console.log(`Server is running on port ${PORT}.`)
  })
  .on("error", (err: any) => {
    if (err.code === "ADDRINUSE") {
      console.log("Error: address already in use")
    } else {
      console.log(err)
    }
  })
} catch (error) {
  console.error("Startup failed:", error)
  process.exit(1)
}
