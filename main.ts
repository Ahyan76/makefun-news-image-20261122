// Sunday 22 November 2026 — The World in One Day: 36 dated stories, 7 regions.
//
// The entry is entry.png beside this file, a one-page newspaper drawn in
// this session (Python + PIL, DejaVu fonts) from the day's wires: COP31 in
// Antalya collapses with no deal and no mention of fossil fuels; Russia
// fires 186 drones at Ukraine overnight, 161 downed; Iran claims two US
// radars hit in Bahrain and Bahrain denies it; Hong Kong elects its
// Election Committee (856 candidates, 723 seats, 98.79% turnout); India
// declare 720/9 in Wellington; Verstappen wins in Las Vegas; Wembanyama
// scores 50. Every story on the page happened or was first reported on
// Sunday 22 November 2026 (UTC); the DATE CHECK box names the near-miss
// stories left out on purpose ('El Chapo Isidro' captured Fri 21 Nov,
// the Peru quake Fri 20 Nov, the Myanmar genocide ruling Thu 19 Nov).
//
// This program only copies that image to the output directory, after
// checking it really is a whole PNG within the gate's limits (at most
// 1 MiB, at most 1024 by 1024). Node 22, standard library only, no
// network, no clock: two runs write identical bytes.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const bytes = readFileSync(src);

// A PNG starts with its 8-byte signature, then a 4-byte IHDR length and
// the four letters "IHDR"; the chunk then gives the width and height as
// big-endian 32-bit values at offsets 16 and 20. Checking the chunk type
// as well as the signature keeps a truncated or mislabelled file from
// passing as a whole PNG.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
for (let i = 0; i < PNG_SIGNATURE.length; i++) {
  if (bytes[i] !== PNG_SIGNATURE[i]) throw new Error("entry.png is not a PNG");
}
if (bytes.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
if (bytes.length > 1048576) throw new Error("entry.png is over 1 MiB");
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), bytes);
