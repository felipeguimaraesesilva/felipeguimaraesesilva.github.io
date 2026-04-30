"use client";

import { useState, useEffect } from "react";
import { useContent, useLocale } from "@/context/ContentContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  navbarToolbarSx,
  navbarLogoSx,
  navbarDesktopLinksSx,
  navbarNavButtonSx,
  navbarMobileToggleSx,
  navbarDrawerPaperSx,
  navbarDrawerHeaderSx,
  navbarDrawerCloseButtonSx,
  langSwitcherSx,
  langButtonSx,
} from "@/styles/sx";

export function Navbar() {
  const content = useContent();
  const { locale, setLocale } = useLocale();
  const navLinks = content?.ui.nav ?? [];
  const logo = content?.ui.logo ?? "";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          py: scrolled ? 0 : 0.5,
        }}
      >
        <Toolbar sx={navbarToolbarSx}>
          {/* Language switcher — left */}
          <Box sx={langSwitcherSx}>
            <Button onClick={() => setLocale("en")} sx={langButtonSx(locale === "en")} disableRipple>
              EN
            </Button>
            <Typography sx={{ color: "text.disabled", fontSize: "0.65rem", lineHeight: 1 }}>|</Typography>
            <Button onClick={() => setLocale("fr")} sx={langButtonSx(locale === "fr")} disableRipple>
              FR
            </Button>
          </Box>

          <Typography variant="h6" sx={navbarLogoSx}>
            {logo}
          </Typography>

          {/* Desktop links */}
          <Box sx={navbarDesktopLinksSx}>
            {navLinks.map((link) => (
              <Button key={link.href} href={link.href} sx={navbarNavButtonSx}>
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile toggle */}
          <IconButton
            sx={navbarMobileToggleSx}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: navbarDrawerPaperSx } }}
      >
        <Box sx={navbarDrawerHeaderSx}>
          <IconButton onClick={() => setMobileOpen(false)} sx={navbarDrawerCloseButtonSx}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton href={link.href} onClick={() => setMobileOpen(false)}>
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { color: "text.secondary", fontSize: "0.95rem" } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
