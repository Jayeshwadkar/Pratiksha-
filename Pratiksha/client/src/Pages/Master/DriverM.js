import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Button from '@mui/material/Button';


const DriverM = () => {
    const driver = [
    { id: 1, name: "John Doe", address: "123 Main St", city: "New York", contact: "555-1234",pancard:"AXV 1234",aadhar:"123443222" },
    { id: 2, name: "Jane Smith", address: "456 Elm St", city: "Los Angeles", contact: "555-5678",pancard:"AXV 1234",aadhar:"123443222" },
    { id: 3, name: "Mike Johnson", address: "789 Oak St", city: "Chicago", contact: "555-9012",pancard:"AXV 1234",aadhar:"123443222" },
    // Add more employee data as needed
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: '2%', marginLeft: '17%' }}>
        <h1 style={{marginLeft:'22px'}}>Driver Details</h1>
        <Button variant="contained" size="medium">Add Driver</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{  padding: "20px", borderRadius: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px",marginLeft:'4.5%' }}>
            <h2>Driver Details:</h2>
            <TextField type="text" placeholder="Search" variant="outlined" style={{ width: "200px", marginRight: "10px" }} />
          </div>
          <TableContainer style={{ border: "1px solid #000000", borderRadius: "10px", width: "117%",marginLeft:'5%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Sr No</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Driver Name</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Address</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>City</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Contact Number</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>PAN Card</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Aadhar</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driver.map((driver, index) => (
                  <TableRow key={driver.id}>
                    <TableCell style={{ border: "1px solid #000000" }}>{index + 1}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.name}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.address}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.city}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.contact}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.pancard}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{driver.aadhar}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>
                      {/* Action buttons */}
                      <Button variant='contained'>Export</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
}
export default DriverM