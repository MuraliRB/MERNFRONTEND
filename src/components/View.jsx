import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Paper,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
const prod = "https://mernbackend-vgii.onrender.com";
const local = "http://localhost:5000";

const View = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  axios
    .get(`${prod}/api/getuser/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          <TableRow>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.age}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.password}</TableCell>
            <TableCell>
              <button>Update</button>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
