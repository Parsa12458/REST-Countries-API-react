/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useCountries } from "./CountriesContext";
import SearchBox from "./SearchBox";
import CountryCard from "./CountryCard";

function Homepage() {
  const countries = useLoaderData();
  const { setRegion } = useCountries();
  const { region: regionUrl } = useParams();

  useEffect(() => {
    if (regionUrl) setRegion(regionUrl);
  }, [regionUrl, setRegion]);

  return (
    <div className="min-h-screen px-4 lg:px-10 dark:bg-darkBlue">
      <SearchBox />
      <div className="mt-14 flex flex-wrap justify-center gap-10 px-10">
        {countries?.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const region = params.region || "all";
  const { searchValue } = params;

  let url;
  if (region === "all") url = "https://restcountries.com/v3.1/all";
  if (region !== "all") url = `https://restcountries.com/v3.1/region/${region}`;
  if (searchValue) url = `https://restcountries.com/v3.1/name/${searchValue}`;

  const res = await Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Request took too long! Please try again.")),
        5000,
      ),
    ),
  ]);

  if (!res.ok) throw new Error("Failed getting countries list");

  const data = await res.json();
  return data;
}

export default Homepage;
