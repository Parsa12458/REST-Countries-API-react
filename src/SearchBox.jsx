import { useNavigate } from "react-router-dom";
import { useCountries } from "./CountriesContext";

function SearchBox() {
  const { region, setRegion } = useCountries();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue = formData.get("searchValue");
    if (!searchValue) return;
    navigate(`/search/${searchValue}`);
  }

  return (
    <div>
      <div className="items-left flex flex-col justify-between gap-5 pt-6 sm:flex-row">
        <form
          className="flex flex-1 space-x-2 lg:space-x-3"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="Search for a country..."
            className="w-full rounded px-4 py-2 text-sm drop-shadow-md focus:outline-none sm:w-3/4 xl:w-1/2 2xl:w-1/3 dark:bg-blue dark:text-white"
            name="searchValue"
          />
          <button className="inline-block rounded-lg bg-blue px-3 py-0.5 text-sm text-white shadow-sm transition-all duration-300 hover:bg-slate-600">
            Search
          </button>
        </form>
        <select
          name="region"
          className="px-3 py-2 text-sm drop-shadow-md focus:outline-none sm:w-1/3 xl:w-1/4 2xl:w-1/6 dark:bg-blue dark:text-white"
          onChange={(e) => {
            const region = e.target.value;
            setRegion(region);
            navigate(`/region/${region}`);
          }}
          value={region}
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBox;
