import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab"; 
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const HospitalForm = () => {
  const [formData, setFormData] = useState({
    attendantName: "",
    patientName: "",
    contactNumber: "",
    hospital: "",
    reason: "",
    description: "",
    appointmentDate: null, 
  });
  const [errors, setErrors] = useState({});

  // Example hospital names
  const hospitals = [
    "Albany Memorial Campus",
    "St. Peter's Hospital",
    "Albany Medical Center",
    "Saratoga Hospital",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error message upon input
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      appointmentDate: date,
    });

    // Remove error message upon date selection
    setErrors({
      ...errors,
      appointmentDate: "",
    });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};

    if (!formData.attendantName.trim()) tempErrors.attendantName = "Attendant name is required.";
    if (!formData.patientName.trim()) tempErrors.patientName = "Patient name is required.";
    if (!formData.contactNumber.trim()) {
      tempErrors.contactNumber = "Contact number is required.";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.contactNumber)) {
      tempErrors.contactNumber = "Invalid contact number.";
    }
    if (!formData.hospital) tempErrors.hospital = "Please select a hospital.";
    if (!formData.reason.trim()) tempErrors.reason = "Reason for visit is required.";

    setErrors(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data:", formData);

      // Reset form
      setFormData({
        attendantName: "",
        patientName: "",
        contactNumber: "",
        hospital: "",
        reason: "",
        description: "",
        appointmentDate: null,
      });

      alert("Request Form Successfully Sent!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fafafa",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" gutterBottom align="center">
         Hospital Request Form
      </Typography>
      <Grid container spacing={2}>
        {/* Attendant Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Attendant Name"
            name="attendantName"
            value={formData.attendantName}
            onChange={handleChange}
            error={Boolean(errors.attendantName)}
            helperText={errors.attendantName}
            required
          />
        </Grid>

        {/* Patient Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Patient Name"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            error={Boolean(errors.patientName)}
            helperText={errors.patientName}
            required
          />
        </Grid>

        {/* Contact Number */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            error={Boolean(errors.contactNumber)}
            helperText={errors.contactNumber || "Include country code, e.g., +1234567890"}
            required
          />
        </Grid>

        {/* Hospital Selection */}
        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.hospital)} required>
            <InputLabel id="hospital-label">Hospital</InputLabel>
            <Select
              labelId="hospital-label"
              id="hospital-select"
              name="hospital"
              value={formData.hospital}
              label="Hospital"
              onChange={handleChange}
            >
              {hospitals.map((hospital, index) => (
                <MenuItem key={index} value={hospital}>
                  {hospital}
                </MenuItem>
              ))}
            </Select>
            {errors.hospital && (
              <Typography variant="caption" color="error">
                {errors.hospital}
              </Typography>
            )}
          </FormControl>
        </Grid>

        {/* Reason for Visit */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Request Form Type"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            error={Boolean(errors.reason)}
            helperText={errors.reason}
            required
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            helperText="Provide additional details (optional)"
          />
        </Grid>

        {/* Appointment Date */}

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Appointment Date"
              value={formData.appointmentDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={Boolean(errors.appointmentDate)}
                  helperText={errors.appointmentDate}
                  required
                />
              )}
            />
          </LocalizationProvider>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

HospitalForm.propTypes = {};

export default HospitalForm;
