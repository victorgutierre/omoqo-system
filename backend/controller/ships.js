export class ShipsController {
  listShips = (req, res, next) => {
    res.json({ message: "List Ships" });
  }
  
  createShip = (req, res, next) => {
    res.json({ message: "Create Ships" });
  }
  
  updateShip = (req,res,next) => {
    res.json({ message: "Update Ships" });
  }
  
  deleteShip = (req,res,next) => {
    res.json({ message: "Delete Ships" });
  }
}