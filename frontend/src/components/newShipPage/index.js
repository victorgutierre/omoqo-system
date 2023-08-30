import React from "react";
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from "react-router-dom";

import Headline from "../headline";
import Button from "../button";
import InputText from "../input";

const { useState } = React;

const NewShipPage = () => {
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
        message.success('Ship created with success');
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
            <InputText label={"Name"} fieldName={"name"} value={shipData.name} changeFn={onChangeHandler} />
          </div>

          <div className="col-lg-6">
            <InputText label={"Code"} fieldName={"code"} value={shipData.code} changeFn={onChangeHandler} />
          </div>

          <div className="col-lg-6">
            <InputText label={"Length"} fieldName={"length"} value={shipData.length} changeFn={onChangeHandler} />
          </div>

          <div className="col-lg-6">
            <InputText label={"Width"} fieldName={"width"} value={shipData.width} changeFn={onChangeHandler} />
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