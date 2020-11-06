import React from "react";
import "./App.css";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import FlyFrom from "./components/FlyFrom";
import FlyTo from "./components/FlyTo";
import DirectFlightCheckbox from "./components/DirectFlightCheckbox";

const App = () => {
  const [flyFrom, setFlyFrom] = React.useState("PRG");
  const [flyTo, setFlyTo] = React.useState("VLC");
  // const [dateFrom, setDateFrom] = React.useState("1/11/2020");
  // const [dateTo, setDateTo] = React.useState("2/11/2020");
  const [dateFrom, setDateFrom] = React.useState("08/11/2020");
  const [dateTo, setDateTo] = React.useState("20/11/2020");
  const [searchResults, setSearchResults] = React.useState([]);
  const [directFlights, setDirectFligts] = React.useState(false);
  const [stopovers, setStopovers] = React.useState(4);

  React.useEffect(() => {
    flyFrom && fetchData();
  }, [flyFrom, flyTo, directFlights]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=test&max_stopovers=${stopovers}`
    );
    const data = await response.json();
    console.log(data.data);
    data && data.data && setSearchResults(data.data);
  };

  const handleFlyFrom = (e) => {
    setFlyFrom(e.target.value);
    setSearchResults([]);
  };

  const handleFlyTo = (e) => {
    setFlyTo(e.target.value);
    setSearchResults([]);
  };

  const handleDirectFlights = () => {
    setDirectFligts(!directFlights);
    setStopovers(0);
    setSearchResults([]);
  };

  return (
    <div className="App">
      <FlyFrom handleFlyFrom={handleFlyFrom} flyFrom={flyFrom} />
      <FlyTo handleFlyTo={handleFlyTo} flyTo={flyTo} />
      <DirectFlightCheckbox
        directFlights={directFlights}
        onChange={handleDirectFlights}
      />
      {!searchResults.length ? (
        <Loader />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default App;
