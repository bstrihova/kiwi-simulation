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
  const [page, setPage] = React.useState(5);
  const [pagination, setPagination] = React.useState(5);

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
    setStopovers(stopovers === 4 ? 0 : 4);
    setSearchResults([]);
  };

  return (
    <div className="App">
      <nav>
        <img src="https://images.kiwi.com/content-media/kiwi-logo.png" />
      </nav>
      <section className="searchBar">
        <h1>Plan tomorrow's adventure today</h1>
        <h4>Search the safest destinations. Book with flexibility.</h4>
        <div className="searchInputs">
          <FlyFrom handleFlyFrom={handleFlyFrom} flyFrom={flyFrom} />
          <FlyTo handleFlyTo={handleFlyTo} flyTo={flyTo} />
          <DirectFlightCheckbox
            directFlights={directFlights}
            onChange={handleDirectFlights}
          />
        </div>
      </section>
      {!searchResults.length ? (
        <Loader />
      ) : (
        <SearchResults
          searchResults={searchResults}
          page={page}
          pagination={pagination}
          nextPage={() => {
            setPage(page * 2);
          }}
        />
      )}
    </div>
  );
};

export default App;
