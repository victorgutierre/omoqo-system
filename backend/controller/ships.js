import { data } from "./../database/index.js";
import { v4 as uuidv4 } from "uuid";

const findShipById = (data, id) => data.filter(x => x.code === id);

export class ShipsController {
  listShips = (req, res, next) => {
    try {
      res.status(200).json({ message: "Ok", data });
    } catch (error) {
      res.json({ message: "Error!" });
    }
  }

  listShipsById = (req, res, next) => {
    const { shipCode } = req.params;

    if (!shipCode) {
      return res.status(422).json({ message: "Ship Code is required" });
    }

    let responseData = findShipById(data, shipCode) || [];

    if (!responseData.length) {
      return res.status(404).json({ message: "Ship not found" });
    }

    try {
      res.status(200).json({ message: "Ok", data: responseData });
    } catch (error) {
      res.json({ message: "Error!" });
    }
  }

  createShip = (req, res, next) => {
    const { name, width, length, code } = req.body;

    if (!name || !width || !length || !code) {
      return res.status(400).json({ message: 'The fields "name", "width", "length" and "code" are mandatory' });
    }

    if (!code.match(/^[A-Za-z]{4}-\d{4}-[A-Za-z]\d$/)) {
      return res.status(400).json({ message: 'The field "code" must match the following pattern: "AAAA-1111-A1"' });
    }

    let responseData = findShipById(data, code) || [];

    if (responseData.length) {
      return res.status(400).json({ message: 'This Ship already exists in our database' });
    }

    try {
      let ship = {
        id: uuidv4(),
        name: name,
        width: width,
        length: length,
        code: code,
      };

      data.push(ship);

      res.status(201).json({ message: "Created", data: ship });
    } catch (error) {
      res.status(500).json({ message: "Sorry, it was not possible to register a ship" });
    }
  }

  updateShip = (req, res, next) => {
    const { shipCode } = req.params;
    const { name, width, length, code } = req.body;

    if (!shipCode) {
      return res.status(422).json({ message: "Ship Code is required" });
    }

    let responseData = findShipById(data, shipCode) || [];

    if (!responseData.length) {
      return res.status(404).json({ message: "Ship not found" });
    }

    for (const key in responseData) {
      if (responseData[key].code === shipCode) {
        responseData[key].name = name;
        responseData[key].width = width;
        responseData[key].length = length;
      }
    }

    try {
      res.status(200).json({ message: "Ok", data: responseData });
    } catch (error) {
      res.json({ message: "Error!" });
    }
  }

  deleteShip = (req, res, next) => {
    const { shipCode } = req.params;
    let deleted = false;

    if (!shipCode) {
      return res.status(422).json({ message: "Ship Code is required" });
    }

    let responseData = findShipById(data, shipCode) || [];

    if (!responseData.length) {
      return res.status(404).json({ message: "Ship not found" });
    }

    for (const key in data) {
      if (data[key].code === shipCode) {
        data.splice(data.indexOf(data[key]), 1);
        deleted = true;
        console.log("Deleted successfully!");
      }
    }

    if (deleted) {
      try {
        res.status(200).json({ message: "Deleted" });
      } catch (error) {
        res.json({ message: "Error!" });
      }
    }
  }
}