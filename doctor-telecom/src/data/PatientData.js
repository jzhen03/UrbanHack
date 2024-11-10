// src/data/patientData.js

const patientData = {
    personalInfo: {
      fullName: "Jane Doe",
      age: 38,
      gender: "Female",
      contact: {
        phone: "(555) 123-4567",
        email: "jane.doe@example.com",
        address: "456 Elm St, Springfield, USA",
      },
    },
    medicalInfo: {
      medicalHistory: ["Asthma", "Migraine"],
      currentMedications: ["Albuterol", "Sumatriptan"],
      allergies: ["Peanuts", "Penicillin"],
    },
    emergencyContacts: [
      {
        name: "John Doe",
        relationship: "Husband",
        phone: "(555) 987-6543",
      },
      {
        name: "Emily Johnson",
        relationship: "Sister",
        phone: "(555) 654-3210",
      },
    ],
  };
  
  export default patientData;
  