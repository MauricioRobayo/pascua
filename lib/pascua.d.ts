export interface Easter {
    year: number;
    month: number;
    day: number;
    toString: () => string;
}
declare function pascua(year?: number): Easter;
export default pascua;
