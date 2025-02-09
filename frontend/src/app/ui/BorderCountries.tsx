import Link from "next/link";
import { BordersCountry } from "../../../../types";
import CustomMessage from "./CustomMessage";

export default function BorderCountries({
  borders,
}: {
  borders: BordersCountry["borders"];
}) {
  if (borders?.length === 0)
    return (
      <CustomMessage message="There are not border country(s) for this country" />
    );

  return (
    <>
      <CustomMessage
        message={borders?.length === 1 ? "Border Country" : "Border Countries"}
      />
      <ul>
        {borders?.map((border, i) => (
          <li key={i}>
            <Link
              href={`/country/info/${border.commonName}/${border.countryCode}`}
              className="hover:text-[#ededed60] transition-colors text-lg"
            >
              {border.commonName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
