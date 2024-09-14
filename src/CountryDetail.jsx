import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function CountryDetail() {
  const { data: country, bordersData } = useLoaderData();

  return (
    <React.Fragment>
      <Link
        to={-1}
        className="mb-4 ml-6 mt-4 inline-block rounded bg-white px-7 py-2 drop-shadow transition-all duration-300 hover:scale-105 dark:bg-blue dark:text-white"
      >
        &larr; Back
      </Link>

      <div className="mx-auto flex flex-col items-center justify-between px-10 py-8 lg:mt-7 lg:flex-row lg:items-start lg:gap-10 xl:justify-start xl:gap-14 2xl:w-[100rem] dark:text-white">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12"
        />

        <div className="pl-1 pt-7 lg:pt-0">
          <span className="mb-2 block text-xl font-bold tracking-wide lg:text-2xl">
            {country.name.common || country.name.official}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Native Name:</span>{" "}
            {Object.values(country.name.nativeName)[0].official}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Region:</span> {country.region}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Capital:</span>{" "}
            {(country.capital?.length === 1
              ? country.capital?.[0]
              : country.capital?.join(", ")) || "We couldn't find!"}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {country.tld.join(", ")}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Currencies:</span>{" "}
            {Object.values(country.currencies)[0].name}
          </span>
          <span className="block leading-8">
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country.languages).join(", ")}
          </span>

          <div className="mt-5">
            <span className="mb-3 block font-bold">Border Countries:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {bordersData
                ? bordersData.map((border) => (
                    <Link
                      key={border.cca3}
                      to={`/country/${border.cca3}`}
                      className="rounded bg-white px-3 py-2 drop-shadow transition-all duration-300 hover:scale-105 dark:bg-blue"
                    >
                      {border.name.common}
                    </Link>
                  ))
                : "No Border Countries Found!"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CountryDetail;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const { countryCode } = params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
  );
  if (!res.ok) throw new Error("Failed getting country detail");
  const [data] = await res.json();
  console.log(data);
  if (!data.borders) return { data, bordersData: null };

  const bordersRes = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${data.borders.join(",")}`,
  );
  const bordersData = await bordersRes.json();
  return { data, bordersData };
}
