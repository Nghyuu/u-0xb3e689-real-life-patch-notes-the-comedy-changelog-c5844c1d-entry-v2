import * as fs from "node:fs";
import * as path from "node:path";

// One-line patch note: doorway amnesia — entering a room wipes the
// task that sent you there. Kept terse, in real release-note register.
const line =
  "v4.1.0: fixed a bug where entering a room deleted the reason you went in there.";

if (line.length < 1 || line.length > 160 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-160 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
