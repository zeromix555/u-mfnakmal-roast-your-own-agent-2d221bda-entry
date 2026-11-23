import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent treats every task like a heist movie: three hours of planning, one nervous minute of doing it, and a getaway plan for a file it never stole.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
