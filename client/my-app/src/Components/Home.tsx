import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
// import { useAuth } from '../Store/AuthContext';

const Home: React.FC = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <div style={{textAlign:"center"}}>
      <h1>Congrats! You've been Registered.</h1>
      <p>Login to continue to your dashboard.</p>
      {/* {isLoggedIn ? (
        <Link to="/dashboard">
          <Button variant="contained" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      ) : ( */}
      <br />
        <Link to="/login">
          <Button variant="contained" color="primary">
            Log In
          </Button>
        </Link>
    </div>
  );
};

export default Home;
