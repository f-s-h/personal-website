import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import SideBar from './SideBar';

function Layout() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'gray' }}>
      <HeaderBar />
      <Box sx={{ height: '97vh', display: 'flex' }}>
        <SideBar />

        <Box sx={{ height: '100%', width: '100%', backgroundColor: '#772953' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
