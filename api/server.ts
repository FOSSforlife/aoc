import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { apiRoute } from "./routes";

const app = new Hono();
const appName = "aoc";
const port = 9000;

app.use("/", serveStatic({ path: "web/index.html" }));
// app.use("/*", serveStatic({ root: "web/" }));

app.route("/api/", apiRoute());

serve({
  fetch: app.fetch,
  port,
  hostname: "0.0.0.0",
  serverOptions: {},
});
console.log(`${appName} is running on ${port}`);
