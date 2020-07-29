import pascua from './pascua';

const easterDates = [
  '1000-03-30',
  '1001-04-19',
  '1002-04-11',
  '1003-03-27',
  '1004-04-15',
  '1005-04-07',
  '1006-03-30',
  '1007-04-12',
  '1008-04-03',
  '1009-04-23',
  '1010-04-08',
  '1011-03-31',
  '1012-04-19',
  '1013-04-11',
  '1014-03-27',
  '1015-04-16',
  '1016-04-07',
  '1017-03-23',
  '1018-04-12',
  '1019-04-04',
  '1020-04-23',
  '1021-04-08',
  '1022-03-31',
  '1023-04-20',
  '1024-04-04',
  '1025-03-27',
  '1026-04-16',
  '1027-04-01',
  '1028-04-20',
  '1029-04-12',
  '1030-03-28',
  '1031-04-17',
  '1032-04-08',
  '1033-03-31',
  '1034-04-13',
  '1035-04-05',
  '1036-03-27',
  '1037-04-16',
  '1038-04-01',
  '1039-04-21',
  '1040-04-12',
  '1041-03-28',
  '1042-04-17',
  '1043-04-09',
  '1044-03-24',
  '1045-04-13',
  '1046-04-05',
  '1047-04-25',
  '1048-04-09',
  '1049-04-01',
  '1050-04-21',
  '1051-04-06',
  '1052-03-28',
  '1053-04-17',
  '1054-04-02',
  '1055-03-25',
  '1056-04-13',
  '1057-04-05',
  '1058-04-18',
  '1059-04-10',
  '1060-04-01',
  '1061-04-21',
  '1062-04-06',
  '1063-03-29',
  '1064-04-17',
  '1065-04-02',
  '1066-04-22',
  '1067-04-14',
  '1068-03-29',
  '1069-04-18',
  '1070-04-10',
  '1071-03-26',
  '1072-04-14',
  '1073-04-06',
  '1074-03-22',
  '1075-04-11',
  '1076-04-02',
  '1077-04-22',
  '1078-04-07',
  '1079-03-30',
  '1080-04-18',
  '1081-04-10',
  '1082-03-26',
  '1083-04-15',
  '1084-04-06',
  '1085-04-19',
  '1086-04-11',
  '1087-04-03',
  '1088-04-22',
  '1089-04-07',
  '1090-03-30',
  '1091-04-19',
  '1092-04-03',
  '1093-03-26',
  '1094-04-15',
  '1095-03-31',
  '1096-04-19',
  '1097-04-11',
  '1098-03-27',
  '1099-04-16',
  '1100-04-08',
  '1101-03-24',
  '1102-04-13',
  '1103-04-05',
  '1104-04-24',
  '1105-04-09',
  '1106-04-01',
  '1107-04-21',
  '1108-04-05',
  '1109-03-28',
  '1110-04-17',
  '1111-04-02',
  '1112-03-24',
  '1113-04-13',
  '1114-04-05',
  '1115-04-18',
  '1116-04-09',
  '1117-04-01',
  '1118-04-21',
  '1119-04-06',
  '1120-03-28',
  '1121-04-17',
  '1122-04-02',
  '1123-04-22',
  '1124-04-13',
  '1125-03-29',
  '1126-04-18',
  '1127-04-10',
  '1128-03-25',
  '1129-04-14',
  '1130-04-06',
  '1131-03-22',
  '1132-04-10',
  '1133-04-02',
  '1134-04-22',
  '1135-04-07',
  '1136-03-29',
  '1137-04-18',
  '1138-04-10',
  '1139-03-26',
  '1140-04-14',
  '1141-04-06',
  '1142-04-19',
  '1143-04-11',
  '1144-04-02',
  '1145-04-22',
  '1146-04-07',
  '1147-03-30',
  '1148-04-18',
  '1149-04-03',
  '1150-03-26',
  '1151-04-15',
  '1152-03-30',
  '1153-04-19',
  '1154-04-11',
  '1155-03-27',
  '1156-04-15',
  '1157-04-07',
  '1158-03-30',
  '1159-04-12',
  '1160-04-03',
  '1161-04-23',
  '1162-04-08',
  '1163-03-31',
  '1164-04-19',
  '1165-04-11',
  '1166-03-27',
  '1167-04-16',
  '1168-04-07',
  '1169-03-23',
  '1170-04-12',
  '1171-04-04',
  '1172-04-23',
  '1173-04-08',
  '1174-03-31',
  '1175-04-20',
  '1176-04-04',
  '1177-03-27',
  '1178-04-16',
  '1179-04-01',
  '1180-04-20',
  '1181-04-12',
  '1182-03-28',
  '1183-04-17',
  '1184-04-08',
  '1185-03-31',
  '1186-04-13',
  '1187-04-05',
  '1188-03-27',
  '1189-04-16',
  '1190-04-01',
  '1191-04-21',
  '1192-04-12',
  '1193-03-28',
  '1194-04-17',
  '1195-04-09',
  '1196-03-24',
  '1197-04-13',
  '1198-04-05',
  '1199-04-25',
  '1200-04-09',
  '1201-04-01',
  '1202-04-21',
  '1203-04-06',
  '1204-03-28',
  '1205-04-17',
  '1206-04-02',
  '1207-03-25',
  '1208-04-13',
  '1209-04-05',
  '1210-04-18',
  '1211-04-10',
  '1212-04-01',
  '1213-04-21',
  '1214-04-06',
  '1215-03-29',
  '1216-04-17',
  '1217-04-02',
  '1218-04-22',
  '1219-04-14',
  '1220-03-29',
  '1221-04-18',
  '1222-04-10',
  '1223-03-26',
  '1224-04-14',
  '1225-04-06',
  '1226-03-22',
  '1227-04-11',
  '1228-04-02',
  '1229-04-22',
  '1230-04-07',
  '1231-03-30',
  '1232-04-18',
  '1233-04-10',
  '1234-03-26',
  '1235-04-15',
  '1236-04-06',
  '1237-04-19',
  '1238-04-11',
  '1239-04-03',
  '1240-04-22',
  '1241-04-07',
  '1242-03-30',
  '1243-04-19',
  '1244-04-03',
  '1245-03-26',
  '1246-04-15',
  '1247-03-31',
  '1248-04-19',
  '1249-04-11',
  '1250-03-27',
  '1251-04-16',
  '1252-04-07',
  '1253-03-30',
  '1254-04-12',
  '1255-04-04',
  '1256-04-23',
  '1257-04-08',
  '1258-03-31',
  '1259-04-20',
  '1260-04-11',
  '1261-03-27',
  '1262-04-16',
  '1263-04-08',
  '1264-03-23',
  '1265-04-12',
  '1266-04-04',
  '1267-04-24',
  '1268-04-08',
  '1269-03-31',
  '1270-04-20',
  '1271-04-05',
  '1272-03-27',
  '1273-04-16',
  '1274-04-01',
  '1275-04-21',
  '1276-04-12',
  '1277-03-28',
  '1278-04-17',
  '1279-04-09',
  '1280-03-31',
  '1281-04-13',
  '1282-04-05',
  '1283-03-28',
  '1284-04-16',
  '1285-04-01',
  '1286-04-21',
  '1287-04-13',
  '1288-03-28',
  '1289-04-17',
  '1290-04-09',
  '1291-03-25',
  '1292-04-13',
  '1293-04-05',
  '1294-04-25',
  '1295-04-10',
  '1296-04-01',
  '1297-04-21',
  '1298-04-06',
  '1299-03-29',
  '1300-04-18',
  '1301-04-03',
  '1302-03-26',
  '1303-04-15',
  '1304-04-06',
  '1305-04-19',
  '1306-04-11',
  '1307-04-03',
  '1308-04-22',
  '1309-04-07',
  '1310-03-30',
  '1311-04-12',
  '1312-04-03',
  '1313-04-23',
  '1314-04-15',
  '1315-03-31',
  '1316-04-19',
  '1317-04-11',
  '1318-03-27',
  '1319-04-16',
  '1320-04-07',
  '1321-03-23',
  '1322-04-12',
  '1323-04-04',
  '1324-04-23',
  '1325-04-08',
  '1326-03-31',
  '1327-04-20',
  '1328-04-11',
  '1329-03-27',
  '1330-04-16',
  '1331-04-01',
  '1332-04-20',
  '1333-04-12',
  '1334-04-04',
  '1335-04-17',
  '1336-04-08',
  '1337-03-31',
  '1338-04-20',
  '1339-04-05',
  '1340-03-27',
  '1341-04-16',
  '1342-04-01',
  '1343-04-21',
  '1344-04-12',
  '1345-03-28',
  '1346-04-17',
  '1347-04-09',
  '1348-03-31',
  '1349-04-13',
  '1350-04-05',
  '1351-04-25',
  '1352-04-09',
  '1353-04-01',
  '1354-04-21',
  '1355-04-06',
  '1356-03-28',
  '1357-04-17',
  '1358-04-09',
  '1359-03-25',
  '1360-04-13',
  '1361-04-05',
  '1362-04-18',
  '1363-04-10',
  '1364-04-01',
  '1365-04-21',
  '1366-04-06',
  '1367-03-29',
  '1368-04-17',
  '1369-04-02',
  '1370-04-22',
  '1371-04-14',
  '1372-03-29',
  '1373-04-18',
  '1374-04-10',
  '1375-03-26',
  '1376-04-14',
  '1377-04-06',
  '1378-03-29',
  '1379-04-11',
  '1380-04-02',
  '1381-04-22',
  '1382-04-14',
  '1383-03-30',
  '1384-04-18',
  '1385-04-10',
  '1386-03-26',
  '1387-04-15',
  '1388-04-06',
  '1389-04-19',
  '1390-04-11',
  '1391-04-03',
  '1392-04-22',
  '1393-04-07',
  '1394-03-30',
  '1395-04-19',
  '1396-04-03',
  '1397-03-26',
  '1398-04-15',
  '1399-03-31',
  '1400-04-20',
  '1401-04-12',
  '1402-03-28',
  '1403-04-17',
  '1404-04-08',
  '1405-03-31',
  '1406-04-13',
  '1407-04-05',
  '1408-04-24',
  '1409-04-09',
  '1410-04-01',
  '1411-04-21',
  '1412-04-12',
  '1413-03-28',
  '1414-04-17',
  '1415-04-09',
  '1416-03-24',
  '1417-04-13',
  '1418-04-05',
  '1419-04-18',
  '1420-04-09',
  '1421-04-01',
  '1422-04-21',
  '1423-04-06',
  '1424-03-28',
  '1425-04-17',
  '1426-04-02',
  '1427-04-22',
  '1428-04-13',
  '1429-03-29',
  '1430-04-18',
  '1431-04-10',
  '1432-04-01',
  '1433-04-14',
  '1434-04-06',
  '1435-03-29',
  '1436-04-17',
  '1437-04-02',
  '1438-04-22',
  '1439-04-14',
  '1440-03-29',
  '1441-04-18',
  '1442-04-10',
  '1443-03-26',
  '1444-04-14',
  '1445-04-06',
  '1446-04-19',
  '1447-04-11',
  '1448-04-02',
  '1449-04-22',
  '1450-04-07',
  '1451-03-30',
  '1452-04-18',
  '1453-04-03',
  '1454-03-26',
  '1455-04-15',
  '1456-04-06',
  '1457-04-19',
  '1458-04-11',
  '1459-04-03',
  '1460-04-22',
  '1461-04-07',
  '1462-03-30',
  '1463-04-12',
  '1464-04-03',
  '1465-04-23',
  '1466-04-15',
  '1467-03-31',
  '1468-04-19',
  '1469-04-11',
  '1470-03-27',
  '1471-04-16',
  '1472-04-07',
  '1473-03-23',
  '1474-04-12',
  '1475-04-04',
  '1476-04-23',
  '1477-04-08',
  '1478-03-31',
  '1479-04-20',
  '1480-04-11',
  '1481-03-27',
  '1482-04-16',
  '1483-04-01',
  '1484-04-20',
  '1485-04-12',
  '1486-04-04',
  '1487-04-17',
  '1488-04-08',
  '1489-03-31',
  '1490-04-20',
  '1491-04-05',
  '1492-03-27',
  '1493-04-16',
  '1494-04-01',
  '1495-04-21',
  '1496-04-12',
  '1497-03-28',
  '1498-04-17',
  '1499-04-09',
  '1500-04-01',
  '1501-04-14',
  '1502-04-06',
  '1503-03-22',
  '1504-04-10',
  '1505-04-02',
  '1506-04-22',
  '1507-04-07',
  '1508-03-29',
  '1509-04-18',
  '1510-04-10',
  '1511-03-26',
  '1512-04-14',
  '1513-04-06',
  '1514-04-19',
  '1515-04-11',
  '1516-04-02',
  '1517-04-22',
  '1518-04-07',
  '1519-03-30',
  '1520-04-18',
  '1521-04-03',
  '1522-03-26',
  '1523-04-15',
  '1524-03-30',
  '1525-04-19',
  '1526-04-11',
  '1527-03-27',
  '1528-04-15',
  '1529-04-07',
  '1530-03-30',
  '1531-04-12',
  '1532-04-03',
  '1533-04-23',
  '1534-04-15',
  '1535-03-31',
  '1536-04-19',
  '1537-04-11',
  '1538-03-27',
  '1539-04-16',
  '1540-04-07',
  '1541-03-23',
  '1542-04-12',
  '1543-04-04',
  '1544-04-23',
  '1545-04-08',
  '1546-03-31',
  '1547-04-20',
  '1548-04-04',
  '1549-03-27',
  '1550-04-16',
  '1551-04-01',
  '1552-04-20',
  '1553-04-12',
  '1554-04-04',
  '1555-04-17',
  '1556-04-08',
  '1557-03-31',
  '1558-04-13',
  '1559-04-05',
  '1560-03-27',
  '1561-04-16',
  '1562-04-01',
  '1563-04-21',
  '1564-04-12',
  '1565-03-28',
  '1566-04-17',
  '1567-04-09',
  '1568-03-24',
  '1569-04-13',
  '1570-04-05',
  '1571-04-25',
  '1572-04-09',
  '1573-04-01',
  '1574-04-21',
  '1575-04-06',
  '1576-03-28',
  '1577-04-17',
  '1578-04-02',
  '1579-03-25',
  '1580-04-13',
  '1581-04-05',
  '1582-04-18',
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

describe('should get Easter date for a given year', () => {
  easterDates.forEach((date) => {
    const [year, month, day] = date.split('-');
    const easter = pascua(Number(year));
    it(`should return Easter year, month, and date for year ${year}`, () => {
      expect(easter.year).toBe(Number(year));
      expect(easter.month).toBe(Number(month));
      expect(easter.day).toBe(Number(day));
    });
    it(`should return Easter date string when calling toString() for year ${year}`, () => {
      expect(easter.toString()).toBe(date);
    });
    it(`should return Easter date string when interpolating for year ${year}`, () => {
      expect(`Easter for ${year} is ${easter}`).toBe(
        `Easter for ${year} is ${date}`
      );
    });
  });
});
