import fs from "node:fs";
import path from "node:path";

const contentPath = path.join(process.cwd(), "content.md");

/**
 * Reads /content.md and extracts the page content.
 * Format is intentionally forgiving: a first line "About" is treated as a
 * heading and stripped; the rest becomes the About text.
 */
export function readContent(): { about: string; raw: string } {
  const raw = fs.readFileSync(contentPath, "utf8");
  const lines = raw.split(/\r?\n/);
  // Drop a bare "About" heading line if it exists on line 1
  if (lines.length && lines[0].trim().toLowerCase() === "about") {
    lines.shift();
  }
  const about = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  return { about: about || "(no content.md content yet)", raw };
}

export default readContent;
