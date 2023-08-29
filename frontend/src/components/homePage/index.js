import React from "react";
import axios from 'axios';
import Table from "../table";
import Headline from "../headline";
const { useState, useEffect } = React;

function HomePage() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/ships").then((response) => {
      let { data } = response.data;

      setShips(data);
    });
  }, []);

  console.log(ships)

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Headline title={"Ships List"} subtitle={"Here you can see all ships, edit and register a new ship in the list."}></Headline>

            <Table data={ships}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;