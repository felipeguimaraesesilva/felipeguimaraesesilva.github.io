import { createTheme } from "@mui/material/styles";

// Palette tokens
// primary : electric blue  #3b82f6  (blue-500)
// secondary: sky blue       #0ea5e9  (sky-500)

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#0ea5e9",
      light: "#38bdf8",
      dark: "#0284c7",
    },
    background: {
      default: "#0a0a0f",
      paper: "rgba(255, 255, 255, 0.04)",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          // Reserve scrollbar gutter at all times so the viewport width
          // doesn't shift when the scrollbar appears/disappears (e.g. on
          // locale change), which would cause background-cover images to jump.
          scrollbarGutter: "stable",
        },
        body: {
          backgroundColor: "#0a0a0f",
          color: "#e2e8f0",
        },
        "::selection": {
          backgroundColor: "rgba(59,130,246,0.3)",
          color: "#e2e8f0",
        },
        "::-webkit-scrollbar": { width: "6px" },
        "::-webkit-scrollbar-track": { background: "#0a0a0f" },
        "::-webkit-scrollbar-thumb": {
          background: "#1d4ed8",
          borderRadius: "3px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 99,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
        bar: {
          borderRadius: 4,
          background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
        },
      },
    },
  },
});

export default theme;
