import React from "react";
import { DateTime } from "luxon";

function SearchResults(props) {
  const { searchResults } = props;
  return (
    <div>
      {searchResults.map((result, index) => {
        return (
          <div style={{ border: "1px solid black" }} key={index}>
            <h3>Stopovers:</h3>
            {result.route.length === 1 ? "direct" : result.route.length - 1}
            <h3>Departure:</h3>
            {result.cityFrom}
            <h3>Arrival:</h3>
            {result.cityTo}
            <h3>Price:</h3>
            {result.price}
            <h3>Departure time:</h3>
            {DateTime.fromMillis(result.dTime * 1000).toFormat("hh:mm")}
            <h3>Arrival time:</h3>
            {DateTime.fromMillis(result.aTime * 1000).toFormat("hh:mm")}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
