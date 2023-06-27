import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const prod = "https://mernbackend-vgii.onrender.com";
const local = "http://localhost:5000";

const Read = () => {
  const [data, setData] = useState([]);

  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${prod}/api/getdata`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  };

  const viewUser = (id) => {
    navigate(`/view/${id}`);
  };

  const deleteUser = (id) => {
    axios
      .delete(`${prod}/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Link to={"/create"}>
        <button>Create</button>
      </Link>
      <table border="5px">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record.name.toUpperCase()}</td>
            <td>{record.age}</td>
            <td>{record.email}</td>
            <td>{record.password}</td>
            <button onClick={() => viewUser(record._id)}>View</button>
            <button onClick={() => editUser(record._id)}>Edit</button>
            <button onClick={() => deleteUser(record._id)}>Delete</button>
          </tr>
        ))}

        <tr></tr>
      </table>
    </div>
  );
};

export default Read;
