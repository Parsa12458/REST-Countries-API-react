/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import SearchBox from "./SearchBox";
import CountryCard from "./CountryCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCountries } from "./CountriesContext";

function Homepage() {
  const countries = useLoaderData();
  const { setRegion } = useCountries();
  const { region: regionUrl } = useParams();

  useEffect(() => {
    console.log(regionUrl);
    if (regionUrl) setRegion(regionUrl);
  }, [regionUrl, setRegion]);

  return (
    <div className="min-h-screen px-4 lg:px-10">
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

  const res = await Promise.race([
    fetch(
      region === "all"
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/region/${region}`,
    ),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Request took too long! Please try again.")),
        5000,
      ),
    ),
  ]);

  if (!res.ok) throw Error("Failed getting countries");

  const data = await res.json();
  return data;
}

export default Homepage;
