export type TIndicator =
  'population' | 'fertility' | 'deathRate' | 'lifeExpectancy';

export interface IPopulationData {
  years: number[];
  data: IDataCountry[];
}
export interface IDataCountry {
  id: string;
  name: string;
  values: Record<number, number | null>;
}

export const NUMERIC_BY_ISO3: Record<string, string> = {
  ABW: '533', // Aruba
  AFG: '004', // Afghanistan
  AGO: '024', // Angola
  ALB: '008', // Albania
  AND: '020', // Andorra
  ARE: '784', // United Arab Emirates
  ARG: '032', // Argentina
  ARM: '051', // Armenia
  ASM: '016', // American Samoa
  ATG: '028', // Antigua and Barbuda
  AUS: '036', // Australia
  AUT: '040', // Austria
  AZE: '031', // Azerbaijan
  BDI: '108', // Burundi
  BEL: '056', // Belgium
  BEN: '204', // Benin
  BFA: '854', // Burkina Faso
  BGD: '050', // Bangladesh
  BGR: '100', // Bulgaria
  BHR: '048', // Bahrain
  BHS: '044', // Bahamas
  BIH: '070', // Bosnia and Herzegovina
  BLR: '112', // Belarus
  BLZ: '084', // Belize
  BMU: '060', // Bermuda
  BOL: '068', // Bolivia
  BRA: '076', // Brazil
  BRB: '052', // Barbados
  BRN: '096', // Brunei
  BTN: '064', // Bhutan
  BWA: '072', // Botswana
  CAF: '140', // Central African Republic
  CAN: '124', // Canada
  CHE: '756', // Switzerland
  CHL: '152', // Chile
  CHN: '156', // China
  CIV: '384', // Cote d'Ivoire
  CMR: '120', // Cameroon
  COD: '180', // Congo, Dem. Rep.
  COG: '178', // Congo, Rep.
  COL: '170', // Colombia
  COM: '174', // Comoros
  CPV: '132', // Cabo Verde
  CRI: '188', // Costa Rica
  CUB: '192', // Cuba
  CUW: '531', // Curacao
  CYM: '136', // Cayman Islands
  CYP: '196', // Cyprus
  CZE: '203', // Czechia
  DEU: '276', // Germany
  DJI: '262', // Djibouti
  DMA: '212', // Dominica
  DNK: '208', // Denmark
  DOM: '214', // Dominican Republic
  DZA: '012', // Algeria
  ECU: '218', // Ecuador
  EGY: '818', // Egypt
  ERI: '232', // Eritrea
  ESP: '724', // Spain
  EST: '233', // Estonia
  ETH: '231', // Ethiopia
  FIN: '246', // Finland
  FJI: '242', // Fiji
  FRA: '250', // France
  FRO: '234', // Faroe Islands
  FSM: '583', // Micronesia
  GAB: '266', // Gabon
  GBR: '826', // United Kingdom
  GEO: '268', // Georgia
  GHA: '288', // Ghana
  GIB: '292', // Gibraltar
  GIN: '324', // Guinea
  GMB: '270', // Gambia
  GNB: '624', // Guinea-Bissau
  GNQ: '226', // Equatorial Guinea
  GRC: '300', // Greece
  GRD: '308', // Grenada
  GRL: '304', // Greenland
  GTM: '320', // Guatemala
  GUM: '316', // Guam
  GUY: '328', // Guyana
  HKG: '344', // Hong Kong
  HND: '340', // Honduras
  HRV: '191', // Croatia
  HTI: '332', // Haiti
  HUN: '348', // Hungary
  IDN: '360', // Indonesia
  IMN: '833', // Isle of Man
  IND: '356', // India
  IRL: '372', // Ireland
  IRN: '364', // Iran
  IRQ: '368', // Iraq
  ISL: '352', // Iceland
  ISR: '376', // Israel
  ITA: '380', // Italy
  JAM: '388', // Jamaica
  JOR: '400', // Jordan
  JPN: '392', // Japan
  KAZ: '398', // Kazakhstan
  KEN: '404', // Kenya
  KGZ: '417', // Kyrgyz Republic
  KHM: '116', // Cambodia
  KIR: '296', // Kiribati
  KNA: '659', // St. Kitts and Nevis
  KOR: '410', // Korea, Rep.
  KWT: '414', // Kuwait
  LAO: '418', // Lao PDR
  LBN: '422', // Lebanon
  LBR: '430', // Liberia
  LBY: '434', // Libya
  LCA: '662', // St. Lucia
  LIE: '438', // Liechtenstein
  LKA: '144', // Sri Lanka
  LSO: '426', // Lesotho
  LTU: '440', // Lithuania
  LUX: '442', // Luxembourg
  LVA: '428', // Latvia
  MAC: '446', // Macao
  MAF: '663', // St. Martin
  MAR: '504', // Morocco
  MCO: '492', // Monaco
  MDA: '498', // Moldova
  MDG: '450', // Madagascar
  MDV: '462', // Maldives
  MEX: '484', // Mexico
  MHL: '584', // Marshall Islands
  MKD: '807', // North Macedonia
  MLI: '466', // Mali
  MLT: '470', // Malta
  MMR: '104', // Myanmar
  MNE: '499', // Montenegro
  MNG: '496', // Mongolia
  MNP: '580', // Northern Mariana Islands
  MOZ: '508', // Mozambique
  MRT: '478', // Mauritania
  MUS: '480', // Mauritius
  MWI: '454', // Malawi
  MYS: '458', // Malaysia
  NAM: '516', // Namibia
  NCL: '540', // New Caledonia
  NER: '562', // Niger
  NGA: '566', // Nigeria
  NIC: '558', // Nicaragua
  NLD: '528', // Netherlands
  NOR: '578', // Norway
  NPL: '524', // Nepal
  NRU: '520', // Nauru
  NZL: '554', // New Zealand
  OMN: '512', // Oman
  PAK: '586', // Pakistan
  PAN: '591', // Panama
  PER: '604', // Peru
  PHL: '608', // Philippines
  PLW: '585', // Palau
  PNG: '598', // Papua New Guinea
  POL: '616', // Poland
  PRI: '630', // Puerto Rico
  PRK: '408', // Korea, Dem. People's Rep.
  PRT: '620', // Portugal
  PRY: '600', // Paraguay
  PSE: '275', // West Bank and Gaza
  PYF: '258', // French Polynesia
  QAT: '634', // Qatar
  ROU: '642', // Romania
  RUS: '643', // Russian Federation
  RWA: '646', // Rwanda
  SAU: '682', // Saudi Arabia
  SDN: '729', // Sudan
  SEN: '686', // Senegal
  SGP: '702', // Singapore
  SLB: '090', // Solomon Islands
  SLE: '694', // Sierra Leone
  SLV: '222', // El Salvador
  SMR: '674', // San Marino
  SOM: '706', // Somalia
  SRB: '688', // Serbia
  SSD: '728', // South Sudan
  STP: '678', // Sao Tome and Principe
  SUR: '740', // Suriname
  SVK: '703', // Slovak Republic
  SVN: '705', // Slovenia
  SWE: '752', // Sweden
  SWZ: '748', // Eswatini
  SXM: '534', // Sint Maarten
  SYC: '690', // Seychelles
  SYR: '760', // Syrian Arab Republic
  TCA: '796', // Turks and Caicos
  TCD: '148', // Chad
  TGO: '768', // Togo
  THA: '764', // Thailand
  TJK: '762', // Tajikistan
  TKM: '795', // Turkmenistan
  TLS: '626', // Timor-Leste
  TON: '776', // Tonga
  TTO: '780', // Trinidad and Tobago
  TUN: '788', // Tunisia
  TUR: '792', // Turkiye
  TUV: '798', // Tuvalu
  TZA: '834', // Tanzania
  UGA: '800', // Uganda
  UKR: '804', // Ukraine
  URY: '858', // Uruguay
  USA: '840', // United States
  UZB: '860', // Uzbekistan
  VCT: '670', // St. Vincent
  VEN: '862', // Venezuela
  VGB: '092', // British Virgin Islands
  VIR: '850', // US Virgin Islands
  VNM: '704', // Viet Nam
  VUT: '548', // Vanuatu
  WSM: '882', // Samoa
  YEM: '887', // Yemen
  ZAF: '710', // South Africa
  ZMB: '894', // Zambia
  ZWE: '716' // Zimbabwe
};
