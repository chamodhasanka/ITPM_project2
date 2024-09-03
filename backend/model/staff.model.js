const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    s_id: {
      type: String,
      trim: true,
    },
    s_full_name: {
      type: String,
      trim: true,
    },
    s_address: {
      type: String,
      trim: true,
    },
    s_role: {
      type: String,
      trim: true,
    },
    s_email: {
      type: String,
      trim: true,
    },
    s_gender: {
      type: String,
      trim: true,
    },
    s_area_id: {
      type: String,
      trim: true,
    },
    s_contact: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("staff", StaffSchema);
