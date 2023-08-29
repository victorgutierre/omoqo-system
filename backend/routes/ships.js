import express from "express";
export const shipsRouter = express.Router();

// CONTROLLERS
import { ShipsController } from "../controller/ships.js";

const Ships = new ShipsController();

// SHIP ROUTES
shipsRouter.get('/', Ships.listShips);
shipsRouter.post('/', Ships.createShip);
shipsRouter.put('/', Ships.updateShip);
shipsRouter.delete('/', Ships.deleteShip);

export default shipsRouter;