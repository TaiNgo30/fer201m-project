// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material';
// import { Brightness4, Brightness7, Movie } from '@mui/icons-material';
// import ColorModeContext from '../context/ColorModeContext';

// const pages = ['Home', 'About', 'News', 'Contact'];

// function Navigation() {

//     const theme = useTheme();
//     const colorMode = React.useContext(ColorModeContext);

//     const [anchorElNav, setAnchorElNav] = React.useState(null);

//     const navigate = useNavigate();

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };


//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };


//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Movie sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component={Link}
//                         to="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         FPTMovive.com
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography component={Link} to={page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`} textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         href=""
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LOGO
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={() => { navigate(page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`) }}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>
//                     <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//                         {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
//                     </IconButton>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default Navigation;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { Brightness4, Brightness7, Movie } from '@mui/icons-material';
import ColorModeContext from '../context/ColorModeContext';
import { AuthContext } from '../context/AuthContext';

const pages = ['Home', 'About', 'News', 'Contact'];

function Navigation() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const { user, logout } = React.useContext(AuthContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Movie sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Taihub.com
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography component={Link} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => { navigate(page === 'Home' ? '/' : `/${page.toLowerCase()}`) }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        {user ? (
                            <Button
                                key="logout"
                                onClick={handleLogout}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button
                                    key="login"
                                    onClick={() => { navigate('/login') }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Login
                                </Button>
                                <Button
                                    key="register"
                                    onClick={() => { navigate('/register') }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Box>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
