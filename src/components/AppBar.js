import React, { useEffect, useState } from "react";
import AppBarMi from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, Box } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const pages = [
    {
        name: 'Anasayfa',
        url: 'home'
    },
    {
        name: 'Hizmetlerimiz',
        url: 'services'
    },
    {
        name: 'Çalışmalar',
        url: 'working'
    },
    {
        name: 'Hesapla',
        url: 'calculator'
    },
    {
        name: 'Blog',
        url: 'blog'
    },
    {
        name: 'İletişim',
        url: 'contact'
    }];

function AppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (url) => {
        setAnchorElNav(null);
        navigate(url);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBarMi position="fixed">
            <Container maxWidth="md">
                <Toolbar disableGutters sx={{
                    minHeight: 64, // AppBar yüksekliğini sabit tut
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
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
                            onClose={() => handleCloseNavMenu()}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.url)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography sx={{ flexGrow: { xs: 1, md: 0 }, paddingTop: 1 }}>
                        <Link
                            to="/"
                            style={{
                                display: 'inline-block',
                                textDecoration: 'none'
                            }}
                        >
                            <i
                                style={{
                                    display: 'block',
                                    width: '120px',
                                    height: '50px',
                                    backgroundImage: 'url("/images/newLogo-150-150.png")',
                                    backgroundSize: 'auto',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={ScrollLink}
                                key={page.name}
                                to={page.url}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                sx={{ my: 2, color: 'white', display: 'block', px: 3 }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBarMi>
    );
}
export default AppBar;