import express from "express";
export const shipsRouter = express.Router();

// CONTROLLERS
import { ShipsController } from "../controller/ships.js";

const Ships = new ShipsController();

// SHIP ROUTES
shipsRouter.get('/', Ships.listShips);
shipsRouter.get('/:shipCode', Ships.listShipsById);

shipsRouter.post('/', Ships.createShip);
shipsRouter.put('/:shipCode', Ships.updateShip);
shipsRouter.delete('/:shipCode', Ships.deleteShip);

export default shipsRouter;