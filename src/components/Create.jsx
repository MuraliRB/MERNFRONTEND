import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const prod = "https://mernbackend-vgii.onrender.com";
const local = "http://localhost:5000";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
      url: `${prod}/api/register`,
      method: "post",
      data: values,
    };
    axios(config)
      .then((res) => {
        console.log(res);
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
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Create;
