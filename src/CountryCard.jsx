import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function CountryCard({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-64 cursor-pointer overflow-hidden rounded bg-white drop-shadow-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl dark:bg-blue dark:text-white"
      onClick={() => navigate(`/country/${country.cca3}`)}
    >
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="h-36 w-full object-cover"
      />
      <div className="py-6 pl-6 pr-2">
        <span className="mb-2 block text-lg font-bold">
          {country.name.common || country.name.official}
        </span>
        <span className="block leading-8">
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </span>
        <span className="block leading-8">
          <span className="font-semibold">Region:</span> {country.region}
        </span>
        <span className="block leading-8">
          <span className="font-semibold">Capital:</span>{" "}
          {(country.capital?.length === 1
            ? country.capital?.[0]
            : country.capital?.join(", ")) || "We couldn't find!"}
        </span>
      </div>
    </div>
  );
}

export default CountryCard;
