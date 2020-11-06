import React from "react";
import "./App.css";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import FlyFrom from "./components/FlyFrom";


const App = () => {
  // const [searchValue, setSearchValue] = React.useState();
  // const [searchResults, setSearchResults] = React.useState();

  // React.useEffect(() => {
  //   fetchData();
  // }, [searchValue])

  const [flyFrom, setFlyFrom] = React.useState("PRG");
  const [flyTo, setFlyTo] = React.useState("LGW");
  const [dateFrom, setDateFrom] = React.useState("18/11/2020");
  const [dateTo, setDateTo] = React.useState("12/12/2020");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, [flyFrom]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=test`
    );
    const data = await response.json();
    data && data.data && setSearchResults(data.data);
    console.log(searchResults);
  };

  const handleFlyFrom = (e) => {
    setFlyFrom(e.target.value);
  };

  return (
    <div className="App">
        <FlyFrom handleFlyFrom={handleFlyFrom}/>

      {!searchResults.length ? (
        <Loader />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default App;