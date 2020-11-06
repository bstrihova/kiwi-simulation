import React from "react";
import { DateTime } from "luxon";
import ButtonNextPage from "./ButtonNextPage";
import "../App.css";

function SearchResults(props) {
  const { searchResults, page, pagination, nextPage } = props;
  return (
    <div className="allSearchResults">
      {searchResults
        .map((result, index) => {
          return (
            <div key={index} className="searchResult">
              <div className="leftColumn">
                <div className="arrival">
                  <strong>
                    {DateTime.fromMillis(result.dTime * 1000).toFormat("hh:mm")}{" "}
                  </strong>
                  {result.cityFrom}
                </div>
                <div className="destination">
                  {/* <h3>Departure time:</h3> */}

                  {/* <h3>Arrival time:</h3> */}
                  <strong>
                    {DateTime.fromMillis(result.aTime * 1000).toFormat("hh:mm")}{" "}
                  </strong>
                  {result.cityTo}
                </div>
              </div>
              <div className="stopovers">
                <p>Stopovers:</p>
                {result.route.length === 1 ? "direct" : result.route.length - 1}
              </div>
              <div className="price">{result.price} EUR</div>
            </div>
          );
        })
        .slice(0, page)}
      {console.log("search results", searchResults.length, "page", page)}
      {searchResults.length > page ? (
        <ButtonNextPage nextPage={nextPage} pagination={pagination} />
      ) : (
        "No more flights"
      )}
    </div>
  );
}

export default SearchResults;
