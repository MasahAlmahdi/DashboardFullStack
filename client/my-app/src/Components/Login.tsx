import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, styled } from '@mui/material';
import '../index.css'
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
// import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(10),
  margin: 'auto',
  marginTop: theme.spacing(15),
  backgroundImage: 'url("https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149031977.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  borderRadius:20,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));


const Login = () => {
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
        "http://localhost:3000/login",
        { ...values },
        { withCredentials: true }
      );

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const goToReg = () => {
    navigate("/register");
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <StyledTextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        name='email'
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        name='password'
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
      >
        Login
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={goToReg}
      >
        Register
      </Button>
      <ToastContainer />
    </StyledPaper>
  );
};

export default Login;
