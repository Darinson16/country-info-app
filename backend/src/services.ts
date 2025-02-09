import {
  BordersCountry,
  PopulationJson,
  FlagURLTypes,
  AvailableCountries,
} from "../../types";

const getAvailableCountries = async () => {
  const response = await fetch(
    "https://date.nager.at/api/v3/AvailableCountries"
  );
  const data: AvailableCountries[] = await response.json();

  return data;
};

const getBordersCountry = async (countryCode: string) => {
  const response = await fetch(
    `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
  );
  const data: BordersCountry = await response.json();

  return data;
};

const getCountryPopulation = async (countryName: string) => {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population"
  );
  const data: PopulationJson = await response.json();

  const countryPopulation = data.data.filter(
    (country) => country.country === countryName
  );

  return countryPopulation;
};

const getFlagURL = async (countryCode: string) => {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/flag/images"
  );
  const data: FlagURLTypes = await response.json();

  const countryFlag = data.data.filter((flag) => flag.iso2 === countryCode);

  return countryFlag;
};

export {
  getAvailableCountries,
  getBordersCountry,
  getCountryPopulation,
  getFlagURL,
};
