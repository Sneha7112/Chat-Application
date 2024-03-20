import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/logo1.png"
function Register() {
const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
}
const handleChange = (event)=>{};
  return (
    <>
     <FormContainer> 
     <form>
<form onSubmit = {(event) => handleSubmit(event)}>
 <div className = 'brand'>
    <img src={Logo} alt="logo"/>
    <h1> ChitChat</h1>
 </div>
 <input type="text" placeholder="Username" name = "username" onChange={e=>handleChange(e)}/>
 <input type="email" placeholder="Email" name = "email" onChange={e=>handleChange(e)}/>
 <input type="password" placeholder="Password" name = "passwprd" onChange={e=>handleChange(e)}/>
 <input type="password" placeholder="Confirm Password" name = "confirmPassword" onChange={e=>handleChange(e)}/>
 <button tupe="submit"> Create User</button>
 <span>Already have an Account ? <Link to="/login">Login</Link></span>
</form>
     </form>
     </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #80008076; /* Purple with 45% opacity */
    border-radius: 2rem;
    padding: 3rem 5rem;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #D3D3D3; /* Light gray */
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #C0C0C0; /* Lighter shade of gray */
      outline: none;
    }
    &::placeholder {
      color: white; /* Your desired color for the placeholder text */
    }
  }

  button {
    background-color: #800080; /* Purple */
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4B0082; /* Darker shade of purple */
    }
  }

  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #D3D3D3; /* Light gray */
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;
