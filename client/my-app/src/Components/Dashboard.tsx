import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ExamsTime from './ExamsTime';
import Announcements from './Announcements';
import { Due } from './Due';
// import { useAuth } from '../Store/AuthContext';
import '../index.css'
const Dashboard = () => {
  // const { logout } = useAuth();

  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
<ExamsTime></ExamsTime>
<span className='spantag'>
<Announcements></Announcements>
<Due></Due>
</span>
    </div>
  );
};

export default Dashboard;
