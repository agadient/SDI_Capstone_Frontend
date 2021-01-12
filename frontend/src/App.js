import React, { useState } from "react";
import { Button,createMuiTheme, ThemeProvider, CssBaseline, AppBar, Grid, TextField, Typography, Box, TableCell, TableRow, TableBody, Table } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTAwNTU4MzIsImlhdCI6MTYwNzQ3OTc0OCwiYXV0aF90aW1lIjoxNjA3NDc5NzQ4LCJqdGkiOiIwZjI1Mzk4Mi0xMWQ1LTRlMGMtODUxMC1kOTQyN2JhMTYyMGYiLCJpc3MiOiJodHRwczovL2xvZ2luLmRzb3AuaW8vYXV0aC9yZWFsbXMvYmFieS15b2RhIiwiYXVkIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsInN1YiI6ImJlMDY2OTcwLWE3ZWQtNDEyMi04YjA1LTdiYzYzYTdkZDNkZCIsInR5cCI6IklEIiwiYXpwIjoicGxhdGZvcm0xX2E4NjA0Y2M5LWY1ZTktNDY1Ni04MDJkLWQwNTYyNDM3MDI0NV9taXNzaW9uLXN0YWdpbmctZ2VuZXJhbCIsIm5vbmNlIjoiZmNFTE83WmMxcmFtLUVta1dKZFZYNUpaMjJ0V0ppUi1VaWw3MVU0V3prZyIsInNlc3Npb25fc3RhdGUiOiJjYTM5M2I3My02MWRiLTQ2ZjYtOGNhYy0yYzE1ZjM1NmVhNDMiLCJhY3IiOiIxIiwidGVybXNfYW5kX2NvbmRpdGlvbnMiOiIxNTk3MDU1MDQ4IiwiYWZmaWxpYXRpb24iOiJPdGhlciIsIm9yZ2FuaXphdGlvbiI6IlJldmFDb21tIiwicmFuayI6Ik4vQSIsInVzZXJjZXJ0aWZpY2F0ZSI6IlVSQU5BS0EuTUlDSEFFTC5CTEFJTkUuMDEyMzQ1Njc4OSIsImdpdmVuX25hbWUiOiJNaWNoYWVsIiwiZmFtaWx5X25hbWUiOiJVcmFuYWthIiwiZW1haWwiOiJtdXJhbmFrYUByZXZhY29tbS5jb20ifQ.u0JD1TAvgaAL3klfjUPOZ7h9o3nk4bNr41sfmmtOvLM
  
  const [status, setStatus] = useState("");
  const [displayData, setDisplayData] = useState("No data to display");
  const handleChange = (event) => {
    setStatus((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const writeDatabase = async (event) => {
    let response = await fetch("http://localhost:8000/writeDB", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        sampleData: status.sampleData,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status < 200 && response.status >= 299)
      setDisplayData("Error posting to database");
    else setDisplayData(<TableRow><TableCell className="sampleData">Posted Successfully to the database</TableCell></TableRow>);
  };

  const readDatabase = async (event) => {
    let response = await fetch("http://localhost:8000/readDB");
    let data = await response.json();
    setDisplayData(
      data.map((each) => (
        <TableRow>
            <TableCell className="sample-data-class" key={each.id}>
              {each.sampleData}
            </TableCell>
        </TableRow>
      ))
    );
  };

  const sendToken = async (event) => {
    let response = await fetch("http://localhost:8000/parseJWT");

    if (response.status === 200) {
      let data = await response.json();
      setDisplayData(
        Object.entries(data).map(([key, val]) => (
          <TableRow>
            <TableCell className="sampleData">{key}: </TableCell> <TableCell>{val}</TableCell>
          </TableRow>
        ))
      );
    } else setDisplayData("No valid token to parse");
  };

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid style={{ marginTop: '50px'}} container spacing={5}>
      <Grid item xs={12}> <AppBar><h1>Sample App</h1></AppBar></Grid>
        <Grid item xs={12}>  
        <Typography component="span"> Input data to stick in database:</Typography>
          <TextField
          name="sampleData"
          className="sampleData"
          type="text"
          onChange={(event) => handleChange(event)}
          ></TextField>
          <Button variant="contained" color="primary" className="sendData" name="SendData" onClick={writeDatabase}>
            Write data to database
            </Button>
        </Grid>
        <Grid item xs={12}> 
          <Button variant="contained" color="primary" className="parseJWT" onClick={sendToken}>
            Parse token
          </Button>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="primary" className="readData" onClick={readDatabase}>
            Read data from database
          </Button>
        </Grid>
        <Grid item xs={12}> 
          <Table variant="outlined" className="display-data-class">
            <TableBody>
              {displayData}
            </TableBody>
          </Table>
        </Grid>
    </Grid>
   
      <div>
        {" "}
        {" "}
      </div>

   
    </ThemeProvider>
  );
}
