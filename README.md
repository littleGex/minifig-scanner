# Minifig Box Scanner

Scan the Data Matrix code on the bottom of a LEGO Collectible Minifigures box to see which figure is inside, without opening it.

Live at: https://littlegex.github.io/minifig-scanner/

## Features

- Live camera scanning (uses the browser's native `BarcodeDetector` where available, falls back to ZXing)
- Photo and manual-entry fallbacks
- Want / have list per series, stored on the phone
- "This trip" log of every box scanned
- Unknown codes can be tagged once a box is opened, so the phone recognises them next time

Currently covers **Series 29 (71052)** and the **Shrek Series (71053)**, EU/UK and US boxes.

## Adding a series

Append an entry to `series.js`:

```js
{
  key: "s30",
  name: "Series 30",
  set: "710xx",
  source: "where the codes came from, date",
  figures: [
    { id: "s30-1", name: "Figure name", extra: "accessory", codes: ["1234567", "7654321"] },
    // ...
  ]
}
```

Keep each figure's `id` stable once published: want/have marks are stored against it.

Only boxes from Series 25 onward carry the large Data Matrix code; the first 7 digits identify the figure. The fourth character of the second token tells the factory (`S` = Czech Republic, `R` = Mexico).

## Running locally

Any static server, e.g. `python3 -m http.server`. The camera needs HTTPS or `localhost`.
