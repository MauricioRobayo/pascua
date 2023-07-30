"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intDiv = function (a, b) { return Math.trunc(a / b); };
// "Meeus/Jones/butcher" algorithm
// https://en.wikipedia.org/wiki/Computus
function pascua(year) {
    if (year === void 0) { year = new Date().getFullYear(); }
    if (year < 1583 || year > 4099) {
        throw new Error("The year should be between 1583 and 4099");
    }
    var a = year % 19;
    var b = intDiv(year, 100);
    var c = year % 100;
    var d = intDiv(b, 4);
    var e = b % 4;
    var f = intDiv(b + 8, 25);
    var g = intDiv(b - f + 1, 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = intDiv(c, 4);
    var k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = intDiv(a + 11 * h + 22 * l, 451);
    var n = h + l - 7 * m + 114;
    var month = intDiv(n, 31);
    var day = 1 + (n % 31);
    return {
        year: year,
        month: month,
        day: day,
        toString: function () {
            var month = String(this.month);
            var day = String(this.day);
            return "".concat(this.year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
        },
    };
}
exports.default = pascua;
