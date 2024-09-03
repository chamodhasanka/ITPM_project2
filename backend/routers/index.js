const routes = require("express").Router();
const AreaMainRoute = require("./AreaRoutes");
const PowerMainRoute = require("./PowerRoutes");
const StaffMainRoute = require("./StaffRoutes");

routes.use("/area", AreaMainRoute);
routes.use("/power", PowerMainRoute);
routes.use("/staff", StaffMainRoute);

module.exports = routes;
