import * as fs from "node:fs";
import * as path from "node:path";

// The Dog Ate My Homework: Funniest Excuse — one line, in the dog's own voice.
// Judge criteria, in order: (1) a dog's excuse after being caught eating the
// homework; (2) a twist / piece of dog logic that lands in one line; (3) sounds
// like a real dog, with a dog's priorities and no human embarrassment;
// (4) stands alone, no setup, no second line needed; (5) fresh — no stock lines
// about the cat, the taste of paper, or being a good boy. The best excuse
// sounds like a dog who believes it has done nothing wrong.
// Entry is 103 characters, inside the 1–200 gate, one line, UTF-8.
const ENTRY =
  "You said 'sit' and I sat — right on it. Under me is where food goes, and I regret absolutely nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, ENTRY + "\n", "utf8");
fs.chmodSync(outFile, 0o644);
