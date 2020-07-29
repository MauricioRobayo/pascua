const intDiv = (a, b) => Math.trunc(a / b)

// "Meeus/Jones/butcher" algorithm
// https://es.wikipedia.org/wiki/computus#c.c3.a1lculo
function pascua(year = new Date().getFullYear()) {
  const a = year % 19
  const b = intDiv(year, 100)
  const c = year % 100
  const d = intDiv(b, 4)
  const e = b % 4
  const f = intDiv(b + 8, 25)
  const g = intDiv(b - f + 1, 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = intDiv(c, 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = intDiv(a + 11 * h + 22 * l, 451)
  const n = h + l - 7 * m + 114
  const month = intDiv(n, 31)
  const day = 1 + (n % 31)
  return { year, month, day }
}

module.exports = pascua
