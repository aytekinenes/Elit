import React, { useState } from "react";
import AppBarMi from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const pages = [
  { name: "Anasayfa", url: "anasayfa" },
  { name: "Hizmetlerimiz", url: "hizmetlerimiz" },
  { name: "Çalışmalarımız", url: "calismalarimiz" },
  { name: "Teklif Al", url: "teklifal" },
  { name: "Blog", url: "/blog" },
  { name: "SSS", url: "sss" },
  { name: "İletişim", url: "iletisim" },
];

function AppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Ortak navigasyon fonksiyonu
  const handleNavClick = (target) => {
    setAnchorElNav(null);

    // Eğer tam bir route (örneğin /blog) ise direkt navigate et
    if (target.startsWith("/")) {
      navigate(target);
      return;
    }

    // Eğer sayfa içinde bir scroll hedefi varsa:
    if (window.location.pathname !== "/") {
      // Başka bir sayfadaysak: hedefi kaydet ve anasayfaya git
      sessionStorage.setItem("scrollTarget", target);
      navigate("/");
    } else {
      // Aynı sayfadaysak: direkt scroll yap
      scroller.scrollTo(target, {
        smooth: true,
        duration: 600,
        offset: -70,
      });
    }
  };

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBarMi position="fixed">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mobil Menü */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleNavClick(page.url)}>
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography sx={{ flexGrow: { xs: 1, lg: 0 } }}>
            <Button
              onClick={() => handleNavClick("anasayfa")}
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <i
                style={{
                  display: "block",
                  width: "120px",
                  height: "50px",
                  backgroundImage: 'url("/images/newLogo-150-150.png")',
                  backgroundSize: "auto",
                  backgroundPosition: "center",
                }}
              />
            </Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavClick(page.url)}
                sx={{ my: 2, color: "white", display: "block", px: 3 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBarMi>
  );
}

export default AppBar;
