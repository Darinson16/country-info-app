import Image from "next/image";

export default function CountryHeading({
  name,
  flag = "/World_Flag.png",
}: {
  name: string;
  flag: string;
}) {
  return (
    <div className="flex justify-center items-center pt-8 gap-2">
      <Image src={flag} alt={`${name}'s flag`} width={50} height={50} />
      <h1 className="text-4xl font-bold">{name}</h1>
    </div>
  );
}
