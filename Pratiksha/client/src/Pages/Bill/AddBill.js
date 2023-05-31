import React from 'react'
import { TextField } from '@mui/material';


const AddBill = () => {
  const employees = [
    { id: 1, name: "John Doe", address: "123 Main St", city: "New York", contact: "555-1234" },
    { id: 2, name: "Jane Smith", address: "456 Elm St", city: "Los Angeles", contact: "555-5678" },
    { id: 3, name: "Mike Johnson", address: "789 Oak St", city: "Chicago", contact: "555-9012" },
    // Add more employee data as needed
  ];

  return (
    <>
      <h1 style={{marginRight:'63%'}}>AddBill</h1>
          
            <h2 style={{marginRight:'55%',marginBottom:'0%'}}>Search Customer</h2>
            <TextField type="text" placeholder="Enter Name" variant="outlined" sx={{ width: "20%",marginRight: "48%",backgroundColor: "#BDBDBD" }} />
            
      </>
  )
}

export default AddBill