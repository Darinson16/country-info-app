import { AvailableCountries } from "../../../types";
import CountriesList from "./ui/CountriesList";
import { API_HOST } from "@/app/config";
import CountryHeading from "./ui/CountryHeading";

export default async function Home() {
  const response = await fetch(`${API_HOST}/countries`, {
    cache: "force-cache",
  });
  const countries: AvailableCountries[] = await response.json();

  return (
    <>
      <CountryHeading name="Available Countries" flag="/default_flag.png" />
      <section className="text-center my-8">
        <CountriesList countries={countries} />
      </section>
    </>
  );
}
