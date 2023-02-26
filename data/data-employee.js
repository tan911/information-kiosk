import Branches from '../models/branches';
import Directory from '../models/directory';
import Colors from '../utils/colors';

export const CATEGORIES = [
  new Branches(
    'b1',
    'EXECUTIVE',
    [Colors.primaryEx, Colors.secondaryEx],
    require('../assets/brachesImages/executive.png')
  ),
  new Branches(
    'b2',
    'LEGISLATIVE',
    [Colors.primaryLeg, Colors.secondaryLeg],
    require('../assets/brachesImages/legislativetype.webp')
  ),
  new Branches(
    'b3',
    'REMOTE OFFICES',
    [Colors.primaryRem, Colors.secondaryRem],
    require('../assets/brachesImages/remote.jpg')
  ),
];

export const DEPARTMENTS = [
  new Directory(
    'd1',
    ['b1'],
    "MAYOR'S OFFICE",
    'imageMAP',
    [
      'Atty. Collin N. Rosell – Sec. to Mayor',
      'Atty. Kimberly Marie F. Esmeña -Chief of Staff',
      '256-3108 / 412-2797 Ms. Robelene Marie M. Repole (Contact Person)',
    ],
    ['256-3108 / 412-2797'],
    'Ground Floor'
  ),
  new Directory(
    'd2',
    ['b1'],
    'PROTOCOL',
    'imageMAP',
    ['Ms. Cinbeth E. Orellano'],
    ['local 1101 / 411-0160'],
    'Ground Floor'
  ),
  new Directory(
    'd3',
    ['b1'],
    'SISTER CITY',
    'imageMAP',
    ['Ms. Carla Henry Aman'],
    ['local 1101'],
    'Ground floor'
  ),
  new Directory('d4', ['b1'], 'ASAP/BRT', 'imageMAP', ['No.'], ['No'], 'Ground Floor'),
  new Directory(
    'd5',
    ['b1'],
    'CIVIL SECURITY UNIT',
    'imageMAP',
    ['Mr. Vicente B. Esmena'],
    ['No.'],
    'Ground Floor'
  ),
  new Directory(
    'd6',
    ['b1'],
    'CITY ADMINISTRATOR’S OFFICE',
    'imageMAP',
    ['Engr. Ma. Suzanne O. Ardosa'],
    ['local 1206/1201, local 1210'],
    'Second Floor'
  ),
  new Directory(
    'd7',
    ['b1'],
    'OFFICE OF BLDG. OFFICIALS (OBO)',
    'imageMAP',
    ['Arch. Florante S. Catalan'],
    ['local 1208/256-62623'],
    'Second Floor'
  ),
  new Directory(
    'd8',
    ['b1'],
    'BUDGET OFFICE',
    'imageMAP',
    ['Ms. Marietta L. Gumia', 'Gilbert/Daisy'],
    ['local 1301 - Ms. Marietta L. Gumia', 'local 1303/1304/1305/1311 - Gilbert/Daisy'],
    'Third Floor'
  ),
  new Directory(
    'd9',
    ['b1'],
    'CTO ACCOUNTABLE FORMS SECTION',
    'imageMAP',
    ['No.'],
    ['253-2969'],
    'Third Floor'
  ),
  new Directory(
    'd10',
    ['b1'],
    'HRDO',
    'imageMAP',
    ['(Training) Ms. Remedios Vestil Mondigo', '(Ann) Employee Verification'],
    [
      'local 1302/1312 - (Ann) Employee Verification',
      'local 1307 - Ms. Remedios Vestil Mondigo',
      'Rose / 1310- Admin / 254-9287',
      'local 1308/1309 – Payroll',
    ],
    'Third Floor'
  ),
  new Directory(
    'd11',
    ['b1'],
    'CITY ASSESSORS',
    'imageMAP',
    ['Ms. Leizl J. Calamba'],
    ['Local 1403/1404/1405'],
    'Fourth Floor'
  ),
  new Directory(
    'd12',
    ['b1'],
    'LOCAL BOARD ASSESSMENT APPEALS',
    'imageMAP',
    ['Ms. Aileen B. Bordaje'],
    ['254-8682'],
    'Fourth Floor'
  ),
  new Directory(
    'd13',
    ['b1'],
    'PEACE AND ORDER PROGRAM (POP)',
    'imageMAP',
    ['Mr. Pastor Alcover, Jr. III'],
    ['No.'],
    'Fourth Floor'
  ),
  new Directory(
    'd14',
    ['b1'],
    'MICS (Management Information and Computer Services)',
    'imageMAP',
    ['Mr. Richter V. Castañares'],
    ['No.'],
    'Fifth Floor'
  ),
  new Directory(
    'd15',
    ['b1'],
    'ADMIN GROUP',
    'imageMAP',
    ['Technical Support', 'Developer', 'Technical'],
    [
      'Local 1501,1502, 1503, 1504,1507(Technical Support)',
      'Local 1505 (Developers)',
      '1506 (GIS)',
      '1509 (Technical)',
    ],
    'Fifth Floor'
  ),
  new Directory(
    'd16',
    ['b1'],
    'LAND MANAGEMENT OFFICE',
    'imageMAP',
    ['Atty. Janeses Ponce'],
    ['1517'],
    'Fifth Floor'
  ),
  new Directory(
    'd17',
    ['b1'],
    'CITY ARCHITECT OFFICE',
    'imageMAP',
    ['Archt. Eleazar R. Lipang'],
    ['1512'],
    'Fifth Floor'
  ),
  new Directory(
    'd18',
    ['b1'],
    'BANTAY DAGAT (ADMIN)',
    'imageMAP',
    ['Mr. Alexander Soledad'],
    ['No.'],
    'Fifth Floor'
  ),
  new Directory(
    'd19',
    ['b1'],
    'ACCOUNTING OFFICE',
    'imageMAP',
    ['Mr. Jerome V. Ornopia, CPA, MBA'],
    [
      'local 1612/412-2539/254-9871/412-1849 (Neri)',
      'local 1601 (Head) to 1611/1608/ 1603/1604/1605',
    ],
    'Sixth Floor'
  ),
  new Directory(
    'd20',
    ['b1'],
    'IASO (Internal Audit Service Office)',
    'imageMAP',
    ['Ms. Veronica A. Morelos'],
    ['1702', '1710/412-2823/255-3092/253-2853'],
    'Seventh Floor'
  ),
  new Directory(
    'd21',
    ['b1'],
    'GSO (General Service Office)',
    'imageMAP',
    ['Engr. Rolando S. Ardosa'],
    ['No.'],
    'Sevent Floor'
  ),
  new Directory(
    'd22',
    ['b1'],
    'Secretary',
    'imageMAP',
    ['No.'],
    ['local 1701/ (Head) 1711,1706,1707 & 1708/1712/1714'],
    'Sevent Floor'
  ),
  new Directory(
    'd23',
    ['b1'],
    'Bus Reservation',
    'imageMAP',
    ['No.'],
    ['local 1706 (Jean) 1713 & 1716/412-1489', '1706 PLDT Tata – in charge/ 1717'],
    'Sevent Floor'
  ),
  new Directory(
    'd24',
    ['b1'],
    'PROPERTY DIVISION',
    'imageMAP',
    ['No.'],
    ['local 1703'],
    'Sevent Floor'
  ),
  new Directory(
    'd25',
    ['b1'],
    'BAC (Bids and Awards Committee)',
    'imageMAP',
    ['No.'],
    ['local 1704/ 253-2484/ 253-7778 – Goods DGS SRP – 3119', 'Warehouse – 3203/04/05'],
    'Sevent Floor'
  ),
  new Directory(
    'd26',
    ['b1'],
    'Maintenance',
    'imageMAP',
    ['No.'],
    [
      '412-22814',
      'local 1703-Admin, 1704, 1705-BAC, 1707/1708-Fuel, 1709-Claire O.',
      'local 1712-PMO Property, 1714-Leave Section, 1713-Sec., 1706-Utilities Section',
    ],
    'Sevent Floor'
  ),
  new Directory(
    'd27',
    ['b1'],
    'ERMM (SRP) Eqpt. Repair & Mngt. Maintenance',
    'imageMAP',
    ['No.'],
    ['local 3203'],
    'Sevent Floor'
  ),
  new Directory(
    'd28',
    ['b1'],
    'ERMM (SRP) Eqpt. Repair & Mngt. Maintenance',
    'imageMAP',
    ['No.'],
    ['233-4098'],
    'Sevent Floor'
  ),
  new Directory(
    'd29',
    ['b1'],
    'CITY PLANNING & DEV. OFFICE (CPDO)',
    'imageMAP',
    ['Archt. Joseph Michael P. Espina', 'Archt. Ann Marie Y. Cuizon (Asst.)'],
    ['local 1812/1811/254-8637'],
    'Eight Floor'
  ),
  new Directory(
    'd30',
    ['b1'],
    'SRP MANAGEMENT CEBU CITY HILLYLAND',
    'imageMAP',
    ['Mr. Roberto Varquez'],
    ['318-7171'],
    'Eight Floor'
  ),
  new Directory(
    'd31',
    ['b1'],
    'CCCWPC (Cebu City Commission of the Welfare of Protection of Children)',
    'imageMAP',
    ['Ms. Helen B. Francisco'],
    ['253-2703 '],
    'Eight Floor'
  ),
  new Directory(
    'a6',
    ['b2'],
    'Vice Mayor Alvin N. Garcia',
    'imageMAP',
    'No.',
    ['266-1039/412-3525'],
    'Ground Floor'
  ),
  new Directory(
    'a7',
    ['b2'],
    'Customer Service Center',
    'imageMAP',
    'No.',
    '411-0100 (Trunkline), local. 0/253-4979/254-8762/254-8632',
    'Ground Floor'
  ),
  new Directory(
    'a8',
    ['b2'],
    'Bldg. Maintenance Services',
    'imageMAP',
    'Engr. Leah Rondez',
    '412-1774/256-2699',
    'Ground Floor'
  ),
];
