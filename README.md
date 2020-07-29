# Pascua 🙏

[![npm version](https://badge.fury.io/js/pascua.svg)](https://badge.fury.io/js/pascua)
[![Build Status](https://github.com/MauricioRobayo/pascua/workflows/Build%20and%20Release/badge.svg)](https://github.com/MauricioRobayo/pascua/actions?query=workflow%3A%22Build+and+Release%22)
[![codecov](https://codecov.io/gh/MauricioRobayo/pascua/branch/master/graph/badge.svg)](https://codecov.io/gh/MauricioRobayo/pascua)

Calculate Easter date for any given year, traditionally celebrated on the first Sunday after the [Paschal full moon](https://en.wikipedia.org/wiki/Ecclesiastical_full_moon), using the ["Meeus/Jones/butcher" algorithm](https://en.wikipedia.org/wiki/Computus).

## Installation

To install as a dependency:

```
npm install pascua
```

## Usage

`pascua` exports a single function that takes an optional `integer` value for the year.

The function will return an object with the following properties:

| Property     | Description                             |
| ------------ | --------------------------------------- |
| `year`       | Year                                    |
| `month`      | Month                                   |
| `day`        | Day                                     |
| `toString()` | Returns a formatted string `YYYY-MM-DD` |

```js
const pascua = require('pascua')

// Easter date for the current year
const easter = pascua()

// Easter date for 1984
const easter = pascua(1984)
```

### ES modules

An ES modules built is included that will be used by build tools that support tree-shake, as Webpack and Rollup.

```js
import pascua from 'pascua'

const easter = pascua(2015)
```

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
