import React from 'react';
import logo from './logo.svg';
import './App.css';



  const App = () => {
      // const [searchValue, setSearchValue] = React.useState();
      // const [searchResults, setSearchResults] = React.useState();
    
      // React.useEffect(() => {
      //   fetchData();
      // }, [searchValue])

      const [flyFrom, setFlyFrom ] = React.useState("PRG");
      const [flyTo, setFlyTo ] = React.useState("LGW");
      const [dateFrom, setDateFrom ] = React.useState("18/11/2020");
      const [dateTo, setDateTo ] = React.useState("12/12/2020");

       React.useEffect(() => {
       fetchData();
       })   
    
      const fetchData = async () => {
        const url = `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=picky&v=3`;
        const response = await fetch(url);
        console.log(response);
      }
    
      return (
        <div className="App">
        
        
        {/* <SearchBar setSearchValue={setSearchValue} />
        <SearchResult searchValue={searchValue} /> */}


        </div>
         )
    }
    
    export default App;
    
    
    
    
    
    
    
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


