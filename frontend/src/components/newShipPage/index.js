import React from "react";
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from "react-router-dom";

import Headline from "../headline";
import Button from "../button";

const { useState } = React;

function NewShipPage() {
  const [shipData, setShipData] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = event => {
    const value = event.target.value;
    setShipData({
      ...shipData,
      [event.target.name]: value
    });
  };

  const handleClick = () => {
    let payload = shipData;

    axios.post(`http://localhost:8080/api/ships`, payload)
      .then(res => {
        message.success('The ship was created succesfuly');
        navigate("/");
      })
      .catch(err => {
        message.error(err.response?.data?.message);
      });
  }

  const handleClickCancel = () => {
    navigate("/");
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Headline title={"Add new Ship"} subtitle={"Register new ship"}></Headline>
          </div>
          
          <div className="col-lg-6">
            <label>
              <span>Name</span>
              <input type="text" name="name" onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="col-lg-6">
            <label>
              <span>Code</span>
              <input type="text" name="code" onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="col-lg-6">
            <label>
              <span>Length</span>
              <input type="text" name="length" onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="col-lg-6">
            <label>
              <span>Width</span>
              <input type="text" name="width" onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="offset-lg-8 col-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <Button title={"Save"} theme={"primary"} onClick={handleClick}></Button>
              </div>

              <div className="col-lg-6">
                <Button title={"Cancel"} theme={"danger"} onClick={handleClickCancel}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShipPage;