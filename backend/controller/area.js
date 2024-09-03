const Area = require("../model/area.model");

const AreaControllers = {
  addArea: async (req, res) => {
    try {
      const {
        area_id,
        area_in_charge,
        no_of_customer,
        city,
        no_of_staff,
        power_source,
      } = req.body;

      const areaID = await Area.findOne({ area_id });
      if (areaID) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${areaID.area_id} id already registered.`,
        });
      }

      const newArea = new Area({
        area_id,
        area_in_charge,
        no_of_customer,
        city,
        no_of_staff,
        power_source,
      });

      await newArea.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        Data: newArea,
        message: "New Area added was successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAllAreas: async (req, res) => {
    try {
      const allAreas = await Area.find();

      if (!allAreas) {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: allAreas,
          message: "Area list not found.",
        });
      } else {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: allAreas,
          message: "All area list recieved.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAreaById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const AreaDetails = await Area.findOne({ area_id: req.params.id });

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: AreaDetails,
          message: `${AreaDetails.area_id}'s details recieved.`,
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  updateAreaDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          area_in_charge,
          no_of_customer,
          city,
          no_of_staff,
          power_source,
        } = req.body;

        const id = await Area.findOne({ area_id: req.params.id });
        const in_charge = await Area.findOne({ area_in_charge });
        const cus = await Area.findOne({ no_of_customer });
        const cit = await Area.findOne({ city });
        const sta = await Area.findOne({ no_of_staff });
        const ps = await Area.findOne({ power_source });

        if (in_charge && cus && cit && sta && ps) {
          return res.status(200).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: `This details already exists.`,
          });
        } else {
          await Area.findOneAndUpdate(
            { area_id: req.params.id },
            {
              area_in_charge,
              no_of_customer,
              city,
              no_of_staff,
              power_source,
            }
          );
          const updateArea1 = await Area.findOne({ area_id: req.params.id });

          return res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            Data: updateArea1,
            message: req.params.id + " is updated successfully.",
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  deleteArea: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const area = await Area.findOneAndDelete({ area_id: req.params.id });
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: area,
          message: area.area_id + " is deleted successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },
};

module.exports = AreaControllers;
