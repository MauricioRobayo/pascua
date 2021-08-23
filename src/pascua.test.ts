import pascua from './pascua';

const easterDates = [
  '1583-04-10',
  '1584-04-01',
  '1585-04-21',
  '1586-04-06',
  '1587-03-29',
  '1588-04-17',
  '1589-04-02',
  '1590-04-22',
  '1591-04-14',
  '1592-03-29',
  '1593-04-18',
  '1594-04-10',
  '1595-03-26',
  '1596-04-14',
  '1597-04-06',
  '1598-03-22',
  '1599-04-11',
  '1600-04-02',
  '1601-04-22',
  '1602-04-07',
  '1603-03-30',
  '1604-04-18',
  '1605-04-10',
  '1606-03-26',
  '1607-04-15',
  '1608-04-06',
  '1609-04-19',
  '1610-04-11',
  '1611-04-03',
  '1612-04-22',
  '1613-04-07',
  '1614-03-30',
  '1615-04-19',
  '1616-04-03',
  '1617-03-26',
  '1618-04-15',
  '1619-03-31',
  '1620-04-19',
  '1621-04-11',
  '1622-03-27',
  '1623-04-16',
  '1624-04-07',
  '1625-03-30',
  '1626-04-12',
  '1627-04-04',
  '1628-04-23',
  '1629-04-15',
  '1630-03-31',
  '1631-04-20',
  '1632-04-11',
  '1633-03-27',
  '1634-04-16',
  '1635-04-08',
  '1636-03-23',
  '1637-04-12',
  '1638-04-04',
  '1639-04-24',
  '1640-04-08',
  '1641-03-31',
  '1642-04-20',
  '1643-04-05',
  '1644-03-27',
  '1645-04-16',
  '1646-04-01',
  '1647-04-21',
  '1648-04-12',
  '1649-04-04',
  '1650-04-17',
  '1651-04-09',
  '1652-03-31',
  '1653-04-13',
  '1654-04-05',
  '1655-03-28',
  '1656-04-16',
  '1657-04-01',
  '1658-04-21',
  '1659-04-13',
  '1660-03-28',
  '1661-04-17',
  '1662-04-09',
  '1663-03-25',
  '1664-04-13',
  '1665-04-05',
  '1666-04-25',
  '1667-04-10',
  '1668-04-01',
  '1669-04-21',
  '1670-04-06',
  '1671-03-29',
  '1672-04-17',
  '1673-04-02',
  '1674-03-25',
  '1675-04-14',
  '1676-04-05',
  '1677-04-18',
  '1678-04-10',
  '1679-04-02',
  '1680-04-21',
  '1681-04-06',
  '1682-03-29',
  '1683-04-18',
  '1684-04-02',
  '1685-04-22',
  '1686-04-14',
  '1687-03-30',
  '1688-04-18',
  '1689-04-10',
  '1690-03-26',
  '1691-04-15',
  '1692-04-06',
  '1693-03-22',
  '1694-04-11',
  '1695-04-03',
  '1696-04-22',
  '1697-04-07',
  '1698-03-30',
  '1699-04-19',
  '1700-04-11',
  '1701-03-27',
  '1702-04-16',
  '1703-04-08',
  '1704-03-23',
  '1705-04-12',
  '1706-04-04',
  '1707-04-24',
  '1708-04-08',
  '1709-03-31',
  '1710-04-20',
  '1711-04-05',
  '1712-03-27',
  '1713-04-16',
  '1714-04-01',
  '1715-04-21',
  '1716-04-12',
  '1717-03-28',
  '1718-04-17',
  '1719-04-09',
  '1720-03-31',
  '1721-04-13',
  '1722-04-05',
  '1723-03-28',
  '1724-04-16',
  '1725-04-01',
  '1726-04-21',
  '1727-04-13',
  '1728-03-28',
  '1729-04-17',
  '1730-04-09',
  '1731-03-25',
  '1732-04-13',
  '1733-04-05',
  '1734-04-25',
  '1735-04-10',
  '1736-04-01',
  '1737-04-21',
  '1738-04-06',
  '1739-03-29',
  '1740-04-17',
  '1741-04-02',
  '1742-03-25',
  '1743-04-14',
  '1744-04-05',
  '1745-04-18',
  '1746-04-10',
  '1747-04-02',
  '1748-04-14',
  '1749-04-06',
  '1750-03-29',
  '1751-04-11',
  '1752-04-02',
  '1753-04-22',
  '1754-04-14',
  '1755-03-30',
  '1756-04-18',
  '1757-04-10',
  '1758-03-26',
  '1759-04-15',
  '1760-04-06',
  '1761-03-22',
  '1762-04-11',
  '1763-04-03',
  '1764-04-22',
  '1765-04-07',
  '1766-03-30',
  '1767-04-19',
  '1768-04-03',
  '1769-03-26',
  '1770-04-15',
  '1771-03-31',
  '1772-04-19',
  '1773-04-11',
  '1774-04-03',
  '1775-04-16',
  '1776-04-07',
  '1777-03-30',
  '1778-04-19',
  '1779-04-04',
  '1780-03-26',
  '1781-04-15',
  '1782-03-31',
  '1783-04-20',
  '1784-04-11',
  '1785-03-27',
  '1786-04-16',
  '1787-04-08',
  '1788-03-23',
  '1789-04-12',
  '1790-04-04',
  '1791-04-24',
  '1792-04-08',
  '1793-03-31',
  '1794-04-20',
  '1795-04-05',
  '1796-03-27',
  '1797-04-16',
  '1798-04-08',
  '1799-03-24',
  '1800-04-13',
  '1801-04-05',
  '1802-04-18',
  '1803-04-10',
  '1804-04-01',
  '1805-04-14',
  '1806-04-06',
  '1807-03-29',
  '1808-04-17',
  '1809-04-02',
  '1810-04-22',
  '1811-04-14',
  '1812-03-29',
  '1813-04-18',
  '1814-04-10',
  '1815-03-26',
  '1816-04-14',
  '1817-04-06',
  '1818-03-22',
  '1819-04-11',
  '1820-04-02',
  '1821-04-22',
  '1822-04-07',
  '1823-03-30',
  '1824-04-18',
  '1825-04-03',
  '1826-03-26',
  '1827-04-15',
  '1828-04-06',
  '1829-04-19',
  '1830-04-11',
  '1831-04-03',
  '1832-04-22',
  '1833-04-07',
  '1834-03-30',
  '1835-04-19',
  '1836-04-03',
  '1837-03-26',
  '1838-04-15',
  '1839-03-31',
  '1840-04-19',
  '1841-04-11',
  '1842-03-27',
  '1843-04-16',
  '1844-04-07',
  '1845-03-23',
  '1846-04-12',
  '1847-04-04',
  '1848-04-23',
  '1849-04-08',
  '1850-03-31',
  '1851-04-20',
  '1852-04-11',
  '1853-03-27',
  '1854-04-16',
  '1855-04-08',
  '1856-03-23',
  '1857-04-12',
  '1858-04-04',
  '1859-04-24',
  '1860-04-08',
  '1861-03-31',
  '1862-04-20',
  '1863-04-05',
  '1864-03-27',
  '1865-04-16',
  '1866-04-01',
  '1867-04-21',
  '1868-04-12',
  '1869-03-28',
  '1870-04-17',
  '1871-04-09',
  '1872-03-31',
  '1873-04-13',
  '1874-04-05',
  '1875-03-28',
  '1876-04-16',
  '1877-04-01',
  '1878-04-21',
  '1879-04-13',
  '1880-03-28',
  '1881-04-17',
  '1882-04-09',
  '1883-03-25',
  '1884-04-13',
  '1885-04-05',
  '1886-04-25',
  '1887-04-10',
  '1888-04-01',
  '1889-04-21',
  '1890-04-06',
  '1891-03-29',
  '1892-04-17',
  '1893-04-02',
  '1894-03-25',
  '1895-04-14',
  '1896-04-05',
  '1897-04-18',
  '1898-04-10',
  '1899-04-02',
  '1900-04-15',
  '1901-04-07',
  '1902-03-30',
  '1903-04-12',
  '1904-04-03',
  '1905-04-23',
  '1906-04-15',
  '1907-03-31',
  '1908-04-19',
  '1909-04-11',
  '1910-03-27',
  '1911-04-16',
  '1912-04-07',
  '1913-03-23',
  '1914-04-12',
  '1915-04-04',
  '1916-04-23',
  '1917-04-08',
  '1918-03-31',
  '1919-04-20',
  '1920-04-04',
  '1921-03-27',
  '1922-04-16',
  '1923-04-01',
  '1924-04-20',
  '1925-04-12',
  '1926-04-04',
  '1927-04-17',
  '1928-04-08',
  '1929-03-31',
  '1930-04-20',
  '1931-04-05',
  '1932-03-27',
  '1933-04-16',
  '1934-04-01',
  '1935-04-21',
  '1936-04-12',
  '1937-03-28',
  '1938-04-17',
  '1939-04-09',
  '1940-03-24',
  '1941-04-13',
  '1942-04-05',
  '1943-04-25',
  '1944-04-09',
  '1945-04-01',
  '1946-04-21',
  '1947-04-06',
  '1948-03-28',
  '1949-04-17',
  '1950-04-09',
  '1951-03-25',
  '1952-04-13',
  '1953-04-05',
  '1954-04-18',
  '1955-04-10',
  '1956-04-01',
  '1957-04-21',
  '1958-04-06',
  '1959-03-29',
  '1960-04-17',
  '1961-04-02',
  '1962-04-22',
  '1963-04-14',
  '1964-03-29',
  '1965-04-18',
  '1966-04-10',
  '1967-03-26',
  '1968-04-14',
  '1969-04-06',
  '1970-03-29',
  '1971-04-11',
  '1972-04-02',
  '1973-04-22',
  '1974-04-14',
  '1975-03-30',
  '1976-04-18',
  '1977-04-10',
  '1978-03-26',
  '1979-04-15',
  '1980-04-06',
  '1981-04-19',
  '1982-04-11',
  '1983-04-03',
  '1984-04-22',
  '1985-04-07',
  '1986-03-30',
  '1987-04-19',
  '1988-04-03',
  '1989-03-26',
  '1990-04-15',
  '1991-03-31',
  '1992-04-19',
  '1993-04-11',
  '1994-04-03',
  '1995-04-16',
  '1996-04-07',
  '1997-03-30',
  '1998-04-12',
  '1999-04-04',
  '2000-04-23',
  '2001-04-15',
  '2002-03-31',
  '2003-04-20',
  '2004-04-11',
  '2005-03-27',
  '2006-04-16',
  '2007-04-08',
  '2008-03-23',
  '2009-04-12',
  '2010-04-04',
  '2011-04-24',
  '2012-04-08',
  '2013-03-31',
  '2014-04-20',
  '2015-04-05',
  '2016-03-27',
  '2017-04-16',
  '2018-04-01',
  '2019-04-21',
  '2020-04-12',
  '2021-04-04',
  '2022-04-17',
  '2023-04-09',
  '2024-03-31',
  '2025-04-20',
  '2026-04-05',
  '2027-03-28',
  '2028-04-16',
  '2029-04-01',
  '2030-04-21',
  '2031-04-13',
  '2032-03-28',
  '2033-04-17',
  '2034-04-09',
  '2035-03-25',
  '2036-04-13',
  '2037-04-05',
  '2038-04-25',
  '2039-04-10',
  '2040-04-01',
  '2041-04-21',
  '2042-04-06',
  '2043-03-29',
  '2044-04-17',
  '2045-04-09',
  '2046-03-25',
  '2047-04-14',
  '2048-04-05',
  '2049-04-18',
  '2050-04-10',
  '2051-04-02',
  '2052-04-21',
  '2053-04-06',
  '2054-03-29',
  '2055-04-18',
  '2056-04-02',
  '2057-04-22',
  '2058-04-14',
  '2059-03-30',
  '2060-04-18',
  '2061-04-10',
  '2062-03-26',
  '2063-04-15',
  '2064-04-06',
  '2065-03-29',
  '2066-04-11',
  '2067-04-03',
  '2068-04-22',
  '2069-04-14',
  '2070-03-30',
  '2071-04-19',
  '2072-04-10',
  '2073-03-26',
  '2074-04-15',
  '2075-04-07',
  '2076-04-19',
  '2077-04-11',
  '2078-04-03',
  '2079-04-23',
  '2080-04-07',
  '2081-03-30',
  '2082-04-19',
  '2083-04-04',
  '2084-03-26',
  '2085-04-15',
  '2086-03-31',
  '2087-04-20',
  '2088-04-11',
  '2089-04-03',
  '2090-04-16',
  '2091-04-08',
  '2092-03-30',
  '2093-04-12',
  '2094-04-04',
  '2095-04-24',
  '2096-04-15',
  '2097-03-31',
  '2098-04-20',
  '2099-04-12',
  '2100-03-28',
];

describe.each(easterDates)('should return %s', (easterDate) => {
  const [year, month, day] = easterDate.split('-');

  it(`should return ${year}, ${month}, and ${day} for year ${year}`, () => {
    const easter = pascua(Number(year));

    expect(easter.year).toBe(Number(year));
    expect(easter.month).toBe(Number(month));
    expect(easter.day).toBe(Number(day));
  });

  it(`should return '${easterDate}' when calling toString() for year ${year}`, () => {
    const easter = pascua(Number(year));

    expect(easter.toString()).toBe(easterDate);
  });

  it(`should return '${easterDate}' when interpolating for year ${year}`, () => {
    const easter = pascua(Number(year));

    expect(`Easter for ${year} is ${easter}`).toBe(
      `Easter for ${year} is ${easterDate}`
    );
  });
});

it('should throw an error for a year below 1583', () => {
  expect(() => pascua(1582)).toThrow(
    'The year should be between 1583 and 4099'
  );
});

it('should throw an error for a year above 4099', () => {
  expect(() => pascua(4100)).toThrow(
    'The year should be between 1583 and 4099'
  );
});

it('should return Easter for the current year if no argument given', () => {
  const currentYear = new Date().getFullYear();
  const expectedEaster = easterDates.find(
    (date) => parseInt(date, 10) === currentYear
  );
  if (expectedEaster) {
    const [year, month, day] = expectedEaster.split('-');
    const easter = pascua();
    expect(easter.year).toBe(Number(year));
    expect(easter.month).toBe(Number(month));
    expect(easter.day).toBe(Number(day));
  }
});
