const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeID: { type: String, required: true },
  employeeName: { type: String, required: true },
  employeeAge: { type: Number, required: true },
  employeeGender: { type: String, required: true },
  employeeDOJ: { type: Date, required: true },
  employeeRemarks: { type: String, required: true },
  employeeAcuredLeaves: { type: Number, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
