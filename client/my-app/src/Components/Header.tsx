import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Button,  
  styled,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
  padding: theme.spacing(1.5),
  width: 1305,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));
// interface Cookies {
//   jwt?: string;
// }
const Header = () => {
  const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies<Cookies>([]);
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!cookies.jwt) {
  //       navigate("/login");
  //     } else {
  //       const { data } = await axios.post(
  //         "http://localhost:3000",
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (!data.status) {
  //         navigate("/login");
  //       } else
  //         toast(`Hi ${data.user}`, {
  //           theme: "dark",
  //         });
  //     }
  //   };
  //   verifyUser();
  // }, [cookies, navigate, removeCookie]);

  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h4" noWrap component="div">
          Welcome
        </Typography>

        <SearchContainer>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>

        <div>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Badge badgeContent={4} color="error">
              <MailOutlineIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Avatar alt="Profile" src="/path/to/profile-pic.jpg" />
          </IconButton>
          <Button color="inherit" onClick={handleLogOut}>
            Logout
          </Button>
        </div>
      </StyledToolbar>
      <ToastContainer/>
    </StyledAppBar>
  );
};

export default Header;
