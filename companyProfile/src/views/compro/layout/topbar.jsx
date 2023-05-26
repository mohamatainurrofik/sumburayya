import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, useTheme, Menu, AppBar, Container, Button, Typography, Drawer, ListItemText, ListItemButton, Divider, List, ListItem } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import { logo } from "../../../assets/compro/media";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};



const Topbar = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
    const [selected, setSelected] = useState("home");
    const scrollPosition = useScrollPosition();
    const theme = useTheme();
    const drawerWidth = 240;
    const pages = [
        {
            id: 'home',
            page: 'Home',
            link: '/',
            child: []
        },
        {
            id: 'about',
            page: 'About',
            link: '/about',
            child: []
        },
        {
            id: 'portofolio',
            page: 'Portofolio',
            link: '/portofolio',
            child: []
        },
        {
            id: 'service',
            page: 'Service',
            link: '/service',
            child: []
        },
        {
            id: 'news',
            page: 'News',
            link: '/news',
            child: []
        },
        {
            id: 'pages',
            page: 'Pages',
            link: '/pages',
            child: []
        },
        {
            id: 'contact',
            page: 'Contact',
            link: '/contact',
            child: []
        },
    ];
    const handleDrawerToggle = () => {
        setMobileMoreAnchorEl(!mobileMoreAnchorEl);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton component={Link} to={item.link.toLowerCase()} sx={{ textAlign: 'center', "&:hover": { color: 'blue' }, borderLeft: (window.location.pathname === item.link) ? 4 : 0, borderColor: '#f7942f !important' }}>
                            <ListItemText primary={item.page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };



    return (
        <AppBar
            elevation={0}
            sx={{
                py: 0,
                height: 72,
                bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
                backdropFilter: scrollPosition > 10 && "blur(60px)",

            }}
        >
            <Container
                sx={{
                    [theme.breakpoints.up("lg")]: {
                        maxWidth: "1380px!important",
                    },
                    height: 72,
                    borderColor: '#808080 !important',
                    borderBottom: 1
                }}
            >
                <Box display="flex" justifyContent="space-between" p={2} >
                    {/* SEARCH BAR */}
                    <Box
                        mt={-1.5}
                        display="flex"
                        backgroundColor="transparent"
                        borderRadius="3px"
                    >
                        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" /> */}
                        <IconButton type="button" >
                            <img src={logo} alt="logo" style={{ width: "50px" }} />
                        </IconButton>
                    </Box>

                    {/* ICONS */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: -1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                sx={{ "&:hover": { color: 'blue' }, my: 2, color: 'white', borderLeft: (window.location.pathname === page.link) ? 4 : 0, borderColor: '#f7942f !important', display: 'block' }}
                                component={Link}
                                to={page.link.toLowerCase()}
                            >
                                <Typography variant="h4" fontWeight='bold' >
                                    {page.page}
                                </Typography>
                            </Button>
                        ))}

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                            sx={{ mt: -1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component="nav">
                            <Drawer
                                variant="temporary"
                                anchor="right"
                                open={mobileMoreAnchorEl}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Box>

                </Box>
            </Container>


        </AppBar >

    );
};

export default Topbar;