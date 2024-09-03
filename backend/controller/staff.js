const Staff = require("../model/staff.model");

const StaffControllers = {
  addStaff: async (req, res) => {
    try {
      const {
        s_id,
        s_full_name,
        s_address,
        s_role,
        s_email,
        s_gender,
        s_area_id,
        s_contact,
      } = req.body;

      const staffID = await Staff.findOne({ s_id });
      if (staffID) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${staffID.s_id} id already registered.`,
        });
      }

      const newStaff = new Staff({
        s_id,
        s_full_name,
        s_address,
        s_role,
        s_email,
        s_gender,
        s_area_id,
        s_contact,
      });

      await newStaff.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        Data: newStaff,
        message: "New Staff added was successfully.",
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

  getAllStaffs: async (req, res) => {
    try {
      const allStaffs = await Staff.find();

      if (!allStaffs) {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: allStaffs,
          message: "Staff list not found.",
        });
      } else {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: allStaffs,
          message: "All staff list recieved.",
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

  getStaffById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const StaffDetails = await Staff.findOne({ s_id: req.params.id });

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: StaffDetails,
          message: `${StaffDetails.s_id}'s details recieved.`,
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

  updateStaffDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          s_full_name,
          s_address,
          s_role,
          s_email,
          s_gender,
          s_area_id,
          s_contact,
        } = req.body;

        const id = await Staff.findOne({ s_id: req.params.id });
        const fn = await Staff.findOne({ s_full_name });
        const ad = await Staff.findOne({ s_address });
        const ro = await Staff.findOne({ s_role });
        const em = await Staff.findOne({ s_email });
        const ge = await Staff.findOne({ s_gender });
        const ar = await Staff.findOne({ s_area_id });
        const co = await Staff.findOne({ s_contact });

        if (fn && ad && ro && em && ge && ar && co) {
          return res.status(200).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: `This details already exists.`,
          });
        } else {
          await Staff.findOneAndUpdate(
            { s_id: req.params.id },
            {
              s_full_name,
              s_address,
              s_role,
              s_email,
              s_gender,
              s_area_id,
              s_contact,
            }
          );
          const updateStaff = await Staff.findOne({ s_id: req.params.id });

          return res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            Data: updateStaff,
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

  deleteStaff: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const staff = await Staff.findOneAndDelete({ s_id: req.params.id });
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          Data: staff,
          message: staff.s_id + " is deleted successfully.",
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

module.exports = StaffControllers;
