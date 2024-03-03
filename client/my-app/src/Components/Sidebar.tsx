import React from 'react';
import {styled, Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import '../index.css'
const StyledDrawer = styled(Drawer)(({theme})=>({
  '& .MuiDrawer-paper': {
    width: 230,
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledListItem = styled(ListItem)(({theme})=>({
    padding: theme.spacing(2),
    '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
}));

const WhiteText = styled('span')({
  color: 'white',
  '&:hover':{
    color:'rgb(80, 152, 215)'
  }
});

const WhiteIcon = styled(ListItemIcon)({
  color: 'white',
  '&:hover': {
    color: 'rgb(80, 152, 215)', 
  },
});



const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Schedule', icon: <ScheduleIcon /> },
    { text: 'Courses', icon: <SchoolIcon /> },
    { text: 'Gradebook', icon: <AssessmentIcon /> },
    { text: 'Performance', icon: <BarChartIcon /> },
    { text: 'Announcements', icon: <AnnouncementIcon /> },
  ];

  return (
    <StyledDrawer variant="permanent">
      <List>
        <h2>Coligo</h2>
        {menuItems.map((item, index) => (
          <ListItemButton key={index} component="div">
            <WhiteIcon>{item.icon}</WhiteIcon>
            <ListItemText primary={<WhiteText>{item.text}</WhiteText>} />
          </ListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
