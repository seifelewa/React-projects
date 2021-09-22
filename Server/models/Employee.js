const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Field: {
      type: String,
      required: true,
    },
    Avg_Rate: {
      type: Number,
      required: false,
    },
    Location: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Number: {
      type: Number,
      required: true,
    },
    Rating: {
      type: Number,
      required: false,
    },
    Age: {
      type: Number,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
