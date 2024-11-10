// src/components/PatientData.jsx

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const PatientData = ({ patient }) => {
  const { personalInfo, medicalInfo, emergencyContacts } = patient;

  return (
    <Card sx={{ maxWidth: 800, margin: "20px auto", padding: 2 }}>
      <CardContent>
        {/* Personal Information */}
        <Typography variant="h5" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ width: 56, height: 56 }}>
              {personalInfo.fullName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{personalInfo.fullName}</Typography>
            <Typography variant="body1">
              Age: {personalInfo.age} | Gender: {personalInfo.gender}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        {/* Contact Information */}
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary={personalInfo.contact.phone} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary={personalInfo.contact.email} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary={personalInfo.contact.address} />
          </ListItem>
        </List>

        <Divider sx={{ marginY: 2 }} />

        {/* Medical Information */}
        <Typography variant="h5" gutterBottom>
          Medical Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Medical History</Typography>
            <List>
              {medicalInfo.medicalHistory.map((history, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <MedicalServicesIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={history} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Current Medications</Typography>
            <List>
              {medicalInfo.currentMedications.map((med, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <MedicalServicesIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={med} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Allergies</Typography>
            <List>
              {medicalInfo.allergies.map((allergy, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                        <HealthAndSafetyIcon />
                    </Avatar>
                    </ListItemAvatar>
                  <ListItemText primary={allergy} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        {/* Emergency Contacts */}
        <Typography variant="h5" gutterBottom>
          Emergency Contacts
        </Typography>
        <List>
          {emergencyContacts.map((contact, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <ContactPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={`${contact.relationship} | ${contact.phone}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

// Define PropTypes for type checking
PatientData.propTypes = {
  patient: PropTypes.shape({
    personalInfo: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      contact: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    medicalInfo: PropTypes.shape({
      medicalHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
      currentMedications: PropTypes.arrayOf(PropTypes.string).isRequired,
      allergies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    emergencyContacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        relationship: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PatientData;
