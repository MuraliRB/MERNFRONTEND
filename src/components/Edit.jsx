import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const prod = "https://mernbackend-vgii.onrender.com";
const local = "http://localhost:5000";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${prod}/api/getuser/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setAge(res.data.age);
        setEmail(res.data.email);
        setPassword(res.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (ev) => {
    if (ev.target.name === "name") {
      setName(ev.target.value);
    } else if (ev.target.name === "age") {
      setAge(ev.target.value);
    } else if (ev.target.name === "email") {
      setEmail(ev.target.value);
    } else if (ev.target.name === "password") {
      setPassword(ev.target.value);
    }
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const values = {
      name: name,
      age: age,
      email: email,
      password: password,
    };
    const config = {
      url: `${prod}/api/update/${id}`,
      method: "patch",
      data: values,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        // setUpdate(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={handleChange}
        value={age}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Edit;
