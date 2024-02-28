import React, { useState } from "react";
import styled from "styled-components";
import { validate } from "./validate";

const SimpleForm = () => {
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState({});

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = validate(fields);
    setErrors(result);

    if (!Object.keys(result).length) sendForm();
  };

  const sendForm = () => console.log("Form was successfully");

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <div>
        <label>Name</label>
        <Input type="text" name="name" onChange={handleChange} />
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div>
        <label>Email</label>
        <Input type="email" name="email" onChange={handleChange} />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div>
        <label>Password</label>
        <Input type="password" name="password" onChange={handleChange} />
        {errors.password && <small>{errors.password}</small>}
      </div>
      <Button type="submit">Create account</Button>
    </Form>
  );
};

export default SimpleForm;

const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0 2px 50px -15px rgba(38, 50, 56, 0.1),
    0 5px 25px -10px rgba(38, 50, 56, 0.1);
  margin: 50px auto;
  width: 90%;
  max-width: 500px;
  h1 {
    margin: 0 0 0.5em;
    font-size: 2em;
    color: #673ab7;
  }
  div {
    margin-bottom: 16px;
    small {
      color: #f44336;
    }
  }
`;
const Input = styled.input`
  background: rgba(38, 50, 56, 0.05);
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 100%;
  :focus {
    background: rgba(38, 50, 56, 0.025);
    border-radius: 7px 7px 0 0;
    box-shadow: inset 0 -2px 0 0 #673ab7;
  }
`;

const Button = styled.button`
  background: linear-gradient(120deg, #673ab7, #4a148c);
  padding: 11px 18px;
  color: #fff;
`;
