export interface AvailableCountries {
  countryCode: string;
  name: string;
}

// Population types
export interface PopulationJson {
  error: boolean;
  msg: string;
  data: PopulationData[];
}

export interface PopulationData {
  code: string;
  country: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

export interface PopulationCount {
  year: number;
  value: number;
}

// Borders country type
export interface BordersCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BordersCountry[] | null;
}

// Flag url types
export interface FlagURLTypes {
  error: boolean;
  msg: string;
  data: FlagData[];
}

export interface FlagData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}
