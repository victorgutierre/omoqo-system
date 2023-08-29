import React from "react";
import axios from 'axios';
import Table from "../table";
import Headline from "../headline";
const { useState, useEffect } = React;

function NewShipPage() {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Headline title={"Register New Ship"} subtitle={"Add a new ship to the list."}></Headline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShipPage;