import Image from "next/image";
import {
  BordersCountry,
  FlagData,
  PopulationData,
} from "../../../../../../types";
import LinkHome from "@/app/ui/LinkHome";
import LinkBack from "@/app/ui/LinkBack";
import BorderCountries from "@/app/ui/BorderCountries";
import PopulationChart from "@/app/ui/PopulationChart";
import { API_HOST } from "@/app/config";
import { notFound } from "next/navigation";
import CountryHeading from "@/app/ui/CountryHeading";

type CountryInfoResponse = {
  bordersCountry: BordersCountry;
  flagURL: FlagData[];
  countryPopulation: PopulationData[];
};

export default async function Page({
  params,
}: {
  params: Promise<{ countryData: string[] }>;
}) {
  const paramsData = (await params).countryData;
  const [countryName, countryCode] = paramsData;

  const response = await fetch(
    `${API_HOST}/country/info/${countryName}/${countryCode}`
  );
  const countryInfo: CountryInfoResponse = await response.json();
  const { bordersCountry, countryPopulation, flagURL } = countryInfo;

  if (bordersCountry.borders === undefined) {
    notFound();
  }

  const flag = flagURL;
  const population = countryPopulation[0];
  const { commonName, borders } = bordersCountry;

  return (
    <>
      <header className="ml-6 mt-6 flex gap-6 content-center font-semibold">
        <LinkBack />
        <LinkHome />
      </header>
      <CountryHeading name={commonName} flag={flag[0]?.flag.trim()} />
      <section className="text-center mt-8">
        <BorderCountries borders={borders} />
      </section>
      <section className="text-center">
        <PopulationChart data={population?.populationCounts} />
      </section>
    </>
  );
}
