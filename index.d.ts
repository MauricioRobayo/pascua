export interface Easter {
    year: number;
    month: number;
    day: number;
    toString: () => string;
}


/**
 * Returns the Easter date for a given year (Gregorian calendar).
 * @param year The year for which to calculate Easter. Defaults to the current year.
 * @throws Error if the year is not between 1583 and 4099.
 */
declare function pascua(year?: number): Easter;
export default pascua;
