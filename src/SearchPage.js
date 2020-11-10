import { Button } from "@material-ui/core";
import React from "react";
import SearchResults from "./SearchResults";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
        <SearchResults
          location={"Paris"}
          title={"President suite"}
          description={"The best room to be in company of your loved ones"}
          star={4.5}
          price={"$1000.00"}
          total={"$1500.00"}
          img={
            "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
          }
        />
      </div>
    </div>
  );
}

export default SearchPage;
