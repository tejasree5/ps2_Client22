import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import RecipeCarousel from './RecipeCarousel';
import RecipeList from './RecipeList';
import DietPlan from './DietPlan';
import Chatbot from './Chatbot';
import sakuraLogo from '../assets/sakura.jpeg'; // Path to the custom logo

// Define the navigation structure
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Recipes',
    icon: <DashboardIcon />,
  },
  {
    segment: 'dietplan',
    title: 'DietPlan',
    icon: <BarChartIcon />,
  },
  {
    segment: 'chatbot',
    title: 'Chatbot',
    icon: <LayersIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <LogoutIcon />,
  },
];

// Define your theme with the pastel green and olive green color scheme
const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#B2D8B2', // Pastel Green
    },
    secondary: {
      main: '#556B2F', // Olive Green
    },
  },
});

// Profile Component
function Profile({ handleLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Avatar and Name */}
      <Avatar
        alt="User Profile"
        src="https://via.placeholder.com/150" // Placeholder for user profile image
        sx={{ width: 40, height: 40, cursor: 'pointer' }}
        onClick={handleMenuOpen}
      />
      <Typography
        variant="body1"
        sx={{ ml: 1, cursor: 'pointer', color: 'white' }}
        onClick={handleMenuOpen}
      >
        John Doe
      </Typography>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout <LogoutIcon sx={{ ml: 1 }} />
        </MenuItem>
      </Menu>
    </Box>
  );
}

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {pathname === '/dashboard' && (
        <>
          <RecipeCarousel />
          <RecipeList />
        </>
      )}
      {pathname === '/dietplan' && <DietPlan />}
      {pathname === '/chatbot' && <Chatbot />}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // State to manage current page
  const [pathname, setPathname] = useState('/dashboard');

  // Logout function
  const handleLogout = () => {
    // Clear session or token
    localStorage.removeItem('token');
    console.log('User logged out!');
    navigate('/login'); // Use navigate to redirect to the login page
  };

  // Simulate a router for path management
  const router = useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        if (path === 'logout') {
          handleLogout();
        } else {
          setPathname(String(path));
        }
      },
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout
          appBar={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                backgroundColor: demoTheme.palette.primary.main,
                color: 'white',
              }}
            >
              {/* Custom Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={sakuraLogo}
                  alt="Sakura Bento Logo"
                  style={{ height: '40px', marginRight: '16px' }}
                />
                <Typography variant="h6" component="div">
                  Sakura Bento
                </Typography>
              </Box>

              {/* Profile Component */}
              <Profile handleLogout={handleLogout} />
            </Box>
          }
        >
          <DemoPageContent pathname={pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
