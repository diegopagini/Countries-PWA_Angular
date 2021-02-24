export interface PaisInterface {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: Region;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number | null;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: OtherAcronym[];
  otherNames: string[];
}

export enum OtherAcronym {
  Sica = 'SICA',
  Unasul = 'UNASUL',
  Unasur = 'UNASUR',
  Uzan = 'UZAN',
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
