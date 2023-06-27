import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
      <table border="5px">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
          <button>Update</button>
        </tr>

        <tr></tr>
      </table>
    </div>
  );
};

export default View;
