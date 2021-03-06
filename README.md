# Pascua 🙏

[![npm version](https://badge.fury.io/js/pascua.svg)](https://badge.fury.io/js/pascua)
[![Build Status](https://github.com/MauricioRobayo/pascua/workflows/build%20and%20release/badge.svg)](https://github.com/MauricioRobayo/pascua/actions?query=workflow%3A%22build+and+release%22)
[![codecov](https://codecov.io/gh/MauricioRobayo/pascua/branch/main/graph/badge.svg?token=ywhhMAVgON)](https://codecov.io/gh/MauricioRobayo/pascua)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/pascua/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/pascua)

Calculate Easter date for a given year, traditionally celebrated on the first Sunday after the [Paschal full moon](https://en.wikipedia.org/wiki/Ecclesiastical_full_moon), using the ["Meeus/Jones/butcher" algorithm](https://en.wikipedia.org/wiki/Computus).

**This package used to calculate colombian holidays. If you are interested in that, please use the new [colombian-holidays](https://www.npmjs.com/package/colombian-holidays) package.**

## Installation

To install as a dependency:

```
npm install pascua
```

## Usage

`pascua` exports a single function that takes an optional `integer` between 1583 and 4099 for the year.

```js
const pascua = require('pascua');

// Easter date for the current year
const easter = pascua();

// Easter date for 1984
const easter = pascua(1984);
```

The function will return an object with the following properties:

| Property     | Description                             |
| ------------ | --------------------------------------- |
| `year`       | Year                                    |
| `month`      | Month                                   |
| `day`        | Day                                     |
| `toString()` | Returns a formatted string `YYYY-MM-DD` |

## TypeScript

The module is written in TypeScript and type definitions files are included.

## Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements

[date-easter](https://github.com/commenthol/date-easter/blob/master/index.js).

## License

[MIT](LICENSE)
