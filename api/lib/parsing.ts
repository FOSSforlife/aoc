import { readFile } from "fs/promises";
import { join } from "path";

export async function loadInput(path: string): Promise<string> {
  return readFile(join("inputs", path), "utf-8");
}
