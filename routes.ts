import { Hono } from "hono";
import year2024_day1 from "./solutions/2024/day1";
import year2025_day1 from "./solutions/2025/day1";

export function apiRoute() {
  const api = new Hono();
  // app.route("/api", api);

  api.get("/", (c) => {
    return c.text("API is online");
  });

  api.route("/2024/day1/", year2024_day1);

  api.route("/2025/day1/", year2025_day1);

  return api;
}
