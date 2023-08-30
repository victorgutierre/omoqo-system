import React from "react";
import axios from 'axios';
import Headline from "../headline";
import Card from "../card";
import CtaButton from "../ctaButton";
import { Modal, message } from "antd";
const { confirm } = Modal;

const { useState, useEffect } = React;

function HomePage() {
  const [ships, setShips] = useState([]);


  const getData = () => {
    axios.get("http://localhost:8080/api/ships")
      .then(res => {
        setShips(res.data.data);
      })
  }

  const showDeleteConfirm = (code) => {
    confirm({
      title: 'Are you sure you want to delete this ship?',
      content: 'This cannot be undone',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        axios.delete(`http://localhost:8080/api/ships/${code}`)
          .then(() => {
            getData();
            message.success('The ship was deleted succesfuly');
          })
          .catch(err => {
            message.error('Ops... error!');
          });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Headline title={"Ships List"} subtitle={"Here you can see all ships, edit and register a new ship in the list."}></Headline>
          </div>
          <div className="col-md-3">
            <CtaButton path={"/new"} title={"Add new ship"}></CtaButton>
          </div>

          {ships.map(i => (
            <div className="col-md-4" key={i.code}>
              <Card data={i} clickFn={showDeleteConfirm}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;