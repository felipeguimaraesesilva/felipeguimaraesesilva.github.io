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
  navbarAppBarSx,
  navbarSeparatorSx,
  navbarDrawerItemTextSx,
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
        sx={navbarAppBarSx(scrolled)}
      >
        <Toolbar sx={navbarToolbarSx}>
          {/* Language switcher — left */}
          <Box sx={langSwitcherSx}>
            <Button onClick={() => setLocale("en")} sx={langButtonSx(locale === "en")} disableRipple>
              EN
            </Button>
            <Typography sx={navbarSeparatorSx}>|</Typography>
            <Button onClick={() => setLocale("fr")} sx={langButtonSx(locale === "fr")} disableRipple>
              FR
            </Button>
          </Box>

          <Typography variant="h6" sx={navbarLogoSx}>
            {logo}
          </Typography>

          {/* Desktop links */}
          <Box sx={navbarDesktopLinksSx}>
            {navLinks.map((link) => {
              const isExternal = !link.href.startsWith("#");
              return (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={navbarNavButtonSx}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Button>
              );
            })}
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
          {navLinks.map((link) => {
            const isExternal = !link.href.startsWith("#");
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{ primary: { sx: navbarDrawerItemTextSx } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
