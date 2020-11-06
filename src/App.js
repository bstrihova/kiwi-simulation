import React from "react";
import "./App.css";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import FlyFrom from "./components/FlyFrom";
import FlyTo from "./components/FlyTo";

const App = () => {
  const [flyFrom, setFlyFrom] = React.useState("PRG");
  const [flyTo, setFlyTo] = React.useState("VLC");
  // const [dateFrom, setDateFrom] = React.useState("1/11/2020");
  // const [dateTo, setDateTo] = React.useState("2/11/2020");
  const [dateFrom, setDateFrom] = React.useState("18/11/2020");
  const [dateTo, setDateTo] = React.useState("25/11/2020");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    flyFrom && fetchData();
  }, [flyFrom, flyTo]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=test`
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

  return (
    <div className="App">
      <FlyFrom handleFlyFrom={handleFlyFrom} flyFrom={flyFrom} />
      <FlyTo handleFlyTo={handleFlyTo} flyTo={flyTo} />
      {!searchResults.length ? (
        <Loader />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default App;
