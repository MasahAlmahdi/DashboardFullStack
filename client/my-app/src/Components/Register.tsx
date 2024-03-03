import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, styled } from '@mui/material';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
// import { useCookies } from "react-cookie";
import {  useNavigate } from "react-router-dom";


const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 400,
  padding: theme.spacing(3),
  margin: 'auto',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  // backgroundImage: 'url("https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149031977.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  borderRadius:20,

}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));


const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });

  const generateError = (error: string) => {
    toast.error(error, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        { ...values },
        { withCredentials: true }
      );

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      <StyledTextField
        label="First Name"
        variant="outlined"
        fullWidth
      />
      <StyledTextField
        label="Email"
        type="email"
        name='email'
        variant="outlined"
        fullWidth
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
      />
      <StyledTextField
        label="Password"
        type="password"
        name='password'
        variant="outlined"
        fullWidth
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={(e) => handleSubmit(e)}
      >
        Register
      </Button>
      <ToastContainer />
    </StyledPaper>
  );
};

export default Register;
