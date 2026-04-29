"use client";

import { useState, useEffect } from "react";
import { useContent } from "@/context/ContentContext";
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

export function Navbar() {
  const content = useContent();
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
        <Toolbar sx={{ maxWidth: "960px", width: "100%", mx: "auto", px: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: "#bfdbfe", flexGrow: 1, letterSpacing: "0.05em" }}
          >
            {logo}
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{
                  color: "text.disabled",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  px: 2,
                  "&:hover": { color: "text.primary", backgroundColor: "transparent" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile toggle */}
          <IconButton
            sx={{ display: { md: "none" }, color: "text.primary" }}
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
        slotProps={{
          paper: {
            sx: {
              width: 260,
              backgroundColor: "rgba(10, 10, 15, 0.97)",
              backdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "text.secondary" }}>
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
