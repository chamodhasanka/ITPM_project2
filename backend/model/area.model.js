const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    area_id: {
      type: String,
      trim: true,
    },
    area_in_charge: {
      type: String,
      trim: true,
    },
    no_of_customer: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    no_of_staff: {
      type: String,
      trim: true,
    },
    power_source: {
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

module.exports = mongoose.model("area", AreaSchema);
