import { createContext, useContext, useState } from "react";

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [region, setRegion] = useState("");

  return (
    <CountriesContext.Provider
      value={{
        region,
        setRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error(
      "CountriesContext was used outside of the CountriesProvider",
    );
  return context;
}

export { CountriesProvider, useCountries };
