import React from "react";
import axios from 'axios';
import Table from "../table";
import Headline from "../headline";
import { useParams } from "react-router";
const { useState, useEffect } = React;

function EditShipPage() {
  let { shipCode } = useParams();

  const [shipData, setShipData] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8080/api/ships/${shipCode}`).then((response) => {
      let { data } = response.data;

      setShipData(data);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Headline title={"Edit Ship"} subtitle={"Edit ship values"}></Headline>
            <p>Dados: {JSON.stringify(shipData)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditShipPage;