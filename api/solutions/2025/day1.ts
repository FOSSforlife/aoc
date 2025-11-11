import { Hono } from "hono";
import { loadInput } from "../../lib/parsing";

type InputType = Array<[number, number]>;

function logic(input: InputType): number {
  return input[0][0];
}

function parse(contents: string): InputType {
  return contents
    .split("\n")
    .map((line) => [Number(line.slice(0, 5)), Number(line.slice(8, 13))]);
}

const handler = new Hono();

handler.get("/part1", async (c) => {
  const contents = await loadInput("2025/day1_1.txt");
  const input = parse(contents);
  const solution = logic(input);
  return c.text(solution.toString());
});

handler.get("/test", async (c) => {
  return c.text((2 + 2).toString());
});

handler.get("/", async (c) => {
  return c.text("online");
});

export default handler;
