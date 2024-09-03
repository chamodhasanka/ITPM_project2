const routes = require("express").Router();
const staffRoutes = require("../../controller/staff");

routes.post("/add_staff", staffRoutes.addStaff);
routes.get("/get_staff", staffRoutes.getAllStaffs);
routes.get("/get_staff/:id", staffRoutes.getStaffById);
routes.put("/updte_staff/:id", staffRoutes.updateStaffDetails);
routes.delete("/delete_staff/:id", staffRoutes.deleteStaff);

module.exports = routes;
