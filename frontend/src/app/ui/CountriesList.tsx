import Link from "next/link";
import { AvailableCountries } from "../../../../types";

export default function CountriesList({
  countries,
}: {
  countries: AvailableCountries[];
}) {
  return (
    <ul className="flex flex-col gap-y-2">
      {countries.map((country, i) => (
        <li key={i}>
          <Link
            href={`country/info/${country.name}/${country.countryCode}`}
            className="hover:text-[#ededed60] transition-colors"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
