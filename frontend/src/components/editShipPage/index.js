import React from "react";
import axios from 'axios';
import { message } from 'antd';

import Headline from "../headline";

import { useParams } from "react-router";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const { useState, useEffect } = React;

function EditShipPage() {
  let { shipCode } = useParams();
  const [shipData, setShipData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:8080/api/ships/${shipCode}`).then((response) => {
      let { data } = response.data;

      setShipData(data);
    });
  }, []);

  const onChangeHandler = event => {
    const value = event.target.value;
    setShipData({
      ...shipData,
      [event.target.name]: value
    });
  };

  const handleClick = () => {
    let payload = {
      name: shipData.name,
      width: parseInt(shipData.width),
      length: parseInt(shipData.length)
    };

    axios.put(`http://localhost:8080/api/ships/${shipCode}`, payload)
      .then(res => {
        message.success('The ship was edited succesfuly');
        navigate("/");
      })
      .catch(err => {
        message.error('Ops, there was a error');
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
            <Headline title={"Edit Ship"} subtitle={"Edit ship values"}></Headline>
          </div>
          
          <div className="col-lg-6">
            <label>
              <span>Name</span>
              <input type="text" name="name" defaultValue={shipData.name} onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="col-lg-6">
            <label>
              <span>Length</span>
              <input type="text" name="length" defaultValue={shipData.length} onChange={(event) => onChangeHandler(event)} />
            </label>
          </div>

          <div className="col-lg-6">
            <label>
              <span>Width</span>
              <input type="text" name="width" defaultValue={shipData.width} onChange={(event) => onChangeHandler(event)} />
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

export default EditShipPage;