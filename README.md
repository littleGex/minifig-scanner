# Minifig Box Scanner

Scan the Data Matrix code on the bottom of a LEGO Collectible Minifigures box to see which figure is inside, without opening it.

Live at: https://littlegex.github.io/minifig-scanner/

## Features

- Live camera scanning (uses the browser's native `BarcodeDetector` where available, falls back to ZXing)
- Photo and manual-entry fallbacks
- Want / have list per series, stored on the phone
- "This trip" log of every box scanned
- Unknown codes can be tagged once a box is opened, so the phone recognises them next time

Currently covers every boxed series from Series 26 onward:

| Series | Set |
|---|---|
| Shrek Series | 71053 |
| Series 29 | 71052 |
| Series 28: Animals | 71051 |
| Spider-Man: Across the Spider-Verse | 71050 |
| Series 27 | 71048 |
| Dungeons & Dragons (EU codes only) | 71047 |
| Series 26: Space | 71046 |

Series 25 (71045) is not included because many of its boxes carry the small code, which doesn't identify the figure. The F1 collectibles (71049) are race cars, not minifigures.

## Adding a series

Append an entry to `series.js`:

```js
{
  key: "s30",
  name: "Series 30",
  set: "710xx",
  source: "where the codes came from",
  checked: "YYYY-MM-DD",
  figures: [
    { id: "s30-1", name: "Figure name", extra: "accessory", codes: ["1234567", "7654321"] },
    // ...
  ]
}
```

Keep each figure's `id` stable once published: want/have marks are stored against it.

Only add codes that two independent sources agree on, and set `checked` to the date you verified them. Then run:

```
node scripts/validate.js
```

It fails on duplicate IDs, malformed codes, or the same code assigned to two figures.

Only boxes from Series 25 onward carry the large Data Matrix code; the first 7 digits identify the figure. The fourth character of the second token tells the factory (`S` = Czech Republic, `R` = Mexico).

## Running locally

Any static server, e.g. `python3 -m http.server`. The camera needs HTTPS or `localhost`.
