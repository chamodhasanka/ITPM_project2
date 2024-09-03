const routes = require("express").Router();
const areaRoutes = require("../../controller/area");

routes.post("/add_area", areaRoutes.addArea);
routes.get("/get_area", areaRoutes.getAllAreas);
routes.get("/get_area/:id", areaRoutes.getAreaById);
routes.put("/updte_area/:id", areaRoutes.updateAreaDetails);
routes.delete("/delete_area/:id", areaRoutes.deleteArea);

module.exports = routes;
