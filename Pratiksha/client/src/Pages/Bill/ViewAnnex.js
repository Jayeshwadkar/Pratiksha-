import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Annexture = () => {
  const annextures = [
    { id: 1, InvcNo: "John Doe", InvcDate: "123 Main St", TotalAmt: "New York", DownloadPDF: "555-1234" },
    { id: 2, InvcNo: "Jane Smith", InvcDate: "456 Elm St", TotalAmt: "Los Angeles", DownloadPDF: "555-5678" },
    { id: 3, InvcNo: "Mike Johnson", InvcDate: "789 Oak St", TotalAmt: "Chicago", DownloadPDF: "555-9012" },
    // Add more annexture data as needed
  ];

  return (
    <>
    <Paper elevation={3}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: '2%', marginLeft: '17%' }}>
        <h1>Annexture</h1>
        <Button variant="contained" size="medium">Add annexture</Button>
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{  padding: "20px", borderRadius: "10px" }}>
       
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      


            <h2>Annexture:</h2>
            <TextField type="text" placeholder="Search" variant="outlined" style={{ width: "200px", marginRight: "10px" }} />
          </div>
          <TableContainer style={{ border: "1px solid #000000", borderRadius: "10px", width: "130%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Sr No</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Invc No</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Invc Date</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Total Amt.</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Download PDF</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Download Excel</TableCell>
                  <TableCell style={{ border: "1px solid #000000", backgroundColor: '#1976d2',color:'white' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {annextures.map((annexture, index) => (
                  <TableRow key={annexture.id}>
                    <TableCell style={{ border: "1px solid #000000" }}>{index + 1}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{annexture.InvcNo}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{annexture.InvcDate}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>{annexture.TotalAmt}</TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>
                    <Button><PictureAsPdfRoundedIcon/></Button>
                    <Button><DownloadRoundedIcon/></Button>
                    </TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>
                      {/* Action buttons */}
                       <Button><DownloadRoundedIcon/></Button>
                    </TableCell>
                    <TableCell style={{ border: "1px solid #000000" }}>
                    <Button ><EditRoundedIcon/></Button>
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          <Typography variant='h6'>
          TOTAL AMOUNT Rs.24,871,490.00
          </Typography>
          TWO CARORE FORTY EIGHT LAKH SEVENTY ONE <br />
          THOUSAND FOUR HUNDRED NINETY RUPEES
          <Button variant='contained' sx={{ marginLeft:'98%'}}>Export</Button>
        </div>
      </div>
      </Paper>
    </>
  );
};

export default Annexture;