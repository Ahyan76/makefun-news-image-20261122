# makefun-news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Ahyan76/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Ahyan76/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One newspaper page that sums up the world's news of Sunday 22 November 2026: 36 dated stories across 7 regions, with a KPI strip, a UTC timeline, three lead stories, twelve more cards, a world map with numbered pins, a numbered list of 21 more stories, and a DATE CHECK box. See the bounty on [make.fun](https://make.fun/bounty/news-image-20261122).

The day's biggest stories: COP31 in Antalya collapses with no deal and no mention of fossil fuels; Russia fires 186 drones at Ukraine overnight, 161 downed, a block in Dymer destroyed; Iran claims two US radars hit in Bahrain and Bahrain denies it; Hong Kong elects its Election Committee (856 candidates, 723 seats, 98.79% turnout); India declare 720/9 in Wellington; Verstappen wins the Las Vegas Grand Prix; Wembanyama scores 50 for the Spurs. Every story on the page happened or was first reported on Sunday 22 November 2026 (UTC). Stories from other days — 'El Chapo Isidro' captured on Friday 21 November, the Peru quake on Friday 20 November (1 dead, 16 injured), the Myanmar genocide ruling on Thursday 19 November — were deliberately left out and are named in the DATE CHECK box.

The image is drawn in code (Python + PIL, DejaVu fonts) from the day's wires (Reuters, BBC, AP, AFP, Al Jazeera, Ukrainian Air Force, HK Govt, SCMP, ESPN, F1, Vatican News). Scenes are drawn illustrations, not photographs. Each story carries a certainty tag: CONFIRMED (official / 2+ outlets), REPORTED (one outlet), CLAIM (one side's claim, labelled as such), PENDING, or FORECAST.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `entry.png` — a whole PNG, at most 1 MiB and 1024 by 1024 — and copies it to the output directory. Two runs write identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a8qwtge8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
