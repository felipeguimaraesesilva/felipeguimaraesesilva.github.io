import type { SxProps, Theme } from "@mui/material/styles";

// ── Page / SectionBg ──────────────────────────────────────────────────────────

export const sectionBgOuterSx: SxProps<Theme> = {
  position: "relative",
  overflow: "hidden",
};

export const sectionBgImageSx = (
  image: string,
  position: string,
  opacity: number
): SxProps<Theme> => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: position,
  opacity,
  zIndex: 0,
});

export const sectionBgGradientSx: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom, #0a0a0f 0%, transparent 15%, transparent 85%, #0a0a0f 100%)",
  zIndex: 1,
};

export const sectionBgContentSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
};

// ── Locale Transition ─────────────────────────────────────────────────────────

export const localeTransitionSx = (visible: boolean): SxProps<Theme> => ({
  opacity: visible ? 1 : 0,
  transition: visible ? "opacity 0.25s ease" : "opacity 0.15s ease",
});

// ── Language switcher ─────────────────────────────────────────────────────────

export const langSwitcherSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.25,
  mr: 1.5,
};

export const langButtonSx = (active: boolean): SxProps<Theme> => ({
  minWidth: 0,
  px: 1,
  py: 0.25,
  fontSize: "0.72rem",
  fontWeight: active ? 700 : 400,
  letterSpacing: "0.08em",
  color: active ? "#bfdbfe" : "text.disabled",
  borderRadius: 1,
  backgroundColor: active ? "rgba(59,130,246,0.12)" : "transparent",
  border: active ? "1px solid rgba(59,130,246,0.3)" : "1px solid transparent",
  "&:hover": { color: "text.primary", backgroundColor: "rgba(59,130,246,0.08)" },
  transition: "all 0.2s",
});

// ── Navbar ────────────────────────────────────────────────────────────────────

export const navbarAppBarSx = (scrolled: boolean): SxProps<Theme> => ({
  transition: "all 0.3s ease",
  backgroundColor: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
  backdropFilter: scrolled ? "blur(12px)" : "none",
  borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
  py: scrolled ? 0 : 0.5,
});

export const navbarSeparatorSx: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: "0.65rem",
  lineHeight: 1,
};

export const navbarDrawerItemTextSx: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "0.95rem",
};

export const navbarToolbarSx: SxProps<Theme> = {
  maxWidth: "960px",
  width: "100%",
  mx: "auto",
  px: { xs: 2, sm: 4 },
};

export const navbarLogoSx: SxProps<Theme> = {
  fontWeight: 800,
  color: "#bfdbfe",
  flexGrow: 1,
  letterSpacing: "0.05em",
};

export const navbarDesktopLinksSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  gap: 0.5,
  alignItems: "center",
};

export const navbarNavButtonSx: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: "0.8rem",
  fontWeight: 400,
  letterSpacing: "0.05em",
  px: 2,
  "&:hover": { color: "text.primary", backgroundColor: "transparent" },
};

export const navbarMobileToggleSx: SxProps<Theme> = {
  display: { md: "none" },
  color: "text.primary",
};

export const navbarDrawerPaperSx: SxProps<Theme> = {
  width: 260,
  backgroundColor: "rgba(10, 10, 15, 0.97)",
  backdropFilter: "blur(20px)",
  borderLeft: "1px solid rgba(255,255,255,0.06)",
};

export const navbarDrawerHeaderSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  p: 2,
};

export const navbarDrawerCloseButtonSx: SxProps<Theme> = {
  color: "text.secondary",
};

// ── Footer ────────────────────────────────────────────────────────────────────

export const footerSx: SxProps<Theme> = {
  borderTop: "1px solid",
  borderColor: "divider",
  py: 4,
  px: { xs: 2, sm: 4 },
};

export const footerInnerSx: SxProps<Theme> = {
  maxWidth: "960px",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
};

export const footerIconsSx: SxProps<Theme> = {
  display: "flex",
  gap: 0.5,
};

export const footerIconButtonSx: SxProps<Theme> = {
  color: "text.secondary",
  "&:hover": { color: "text.primary" },
};

// ── Section ───────────────────────────────────────────────────────────────────

export const sectionBoxSx: SxProps<Theme> = {
  py: { xs: 6, md: 9 },
  px: { xs: 2, sm: 4, md: 6 },
  maxWidth: "960px",
  mx: "auto",
  width: "100%",
};

export const sectionHeadingWrapperSx: SxProps<Theme> = { mb: 5 };

export const sectionHeadingTitleSx = (hasSubtitle: boolean): SxProps<Theme> => ({
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "text.primary",
  mb: hasSubtitle ? 0.75 : 0,
});

export const sectionHeadingSubtitleSx: SxProps<Theme> = {
  letterSpacing: "0.02em",
};

export const sectionHeadingDividerSx: SxProps<Theme> = {
  mt: 2,
  height: "1px",
  background: "linear-gradient(90deg, rgba(59,130,246,0.6), transparent)",
};

// ── About / Hero ──────────────────────────────────────────────────────────────

export const heroContainerSx: SxProps<Theme> = {
  position: "relative",
  minHeight: { xs: "70vh", md: "80vh" },
  display: "flex",
  flexDirection: "column",
};

export const heroContentSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: { xs: 2, sm: 4, md: 6 },
  pt: { xs: 14, md: 20 },
  pb: { xs: 4, md: 6 },
};

export const heroInnerSx: SxProps<Theme> = {
  maxWidth: 900,
  width: "100%",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { xs: "center", md: "flex-start" },
  gap: { xs: 5, md: 7 },
};

export const heroPhotoBoxSx: SxProps<Theme> = {
  flexShrink: 0,
  width: { xs: 180, md: 220 },
  height: { xs: 240, md: 290 },
  borderRadius: 1.5,
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
};

export const heroTextColumnSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", md: "flex-start" },
  textAlign: { xs: "center", md: "left" },
  gap: 3,
  flex: 1,
};

export const heroGreetingSx: SxProps<Theme> = {
  color: "#60a5fa",
  letterSpacing: "0.22em",
  fontSize: { xs: "0.85rem", md: "1rem" },
  fontWeight: 500,
  textTransform: "uppercase",
};

export const heroNameSx: SxProps<Theme> = {
  fontSize: { xs: "2.2rem", md: "3.2rem" },
  fontWeight: 800,
  lineHeight: 1.08,
  letterSpacing: "0.01em",
  color: "#60a5fa",
  textTransform: "uppercase",
  textShadow: [
    "0 1px 0 rgba(255,255,255,0.06)",
    "0 -2px 0 rgba(0,0,0,0.5)",
    "0 3px 10px rgba(0,0,0,0.8)",
    "inset 0 2px 4px rgba(0,0,0,0.6)",
  ].join(", "),
};

export const heroRoleSx: SxProps<Theme> = {
  color: "#60a5fa",
  fontSize: { xs: "0.85rem", md: "1rem" },
  fontWeight: 500,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
};

export const heroDividerSx: SxProps<Theme> = {
  borderColor: "rgba(59,130,246,0.4)",
  width: 60,
  my: 1,
  alignSelf: { xs: "center", md: "flex-start" },
};

export const heroCompetenciesBoxSx: SxProps<Theme> = {
  p: { xs: 2.5, md: 3 },
  borderRadius: 3,
  border: "none",
  backgroundColor: "transparent",
  backdropFilter: "blur(4px)",
  textAlign: "left",
};

export const heroCompetenciesTextSx: SxProps<Theme> = {
  lineHeight: 1.9,
  whiteSpace: "pre-line",
  fontSize: "0.93rem",
  color: "#cbd5e1",
};

export const heroSocialBoxSx: SxProps<Theme> = {
  display: "flex",
  gap: 1.5,
  justifyContent: { xs: "center", md: "flex-start" },
};

export const socialButtonSx: SxProps<Theme> = {
  color: "text.disabled",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 2,
  width: 40,
  height: 40,
  "&:hover": { color: "text.primary", borderColor: "rgba(59,130,246,0.6)" },
  transition: "all 0.2s",
};

// ── Impact Stats ──────────────────────────────────────────────────────────────

export const impactStatsWrapperSx: SxProps<Theme> = {
  px: { xs: 2, sm: 4, md: 6 },
  pb: { xs: 6, md: 8 },
  maxWidth: "960px",
  mx: "auto",
  width: "100%",
};

export const impactGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
  gap: { xs: 2, md: 2.5 },
};

export const impactCardSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 0.5,
  p: { xs: 2, md: 2.5 },
  borderRadius: 2,
  border: "1px solid rgba(59,130,246,0.15)",
  backgroundColor: "rgba(59,130,246,0.03)",
  backdropFilter: "blur(8px)",
  transition: "border-color 0.15s ease, background-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
  "&:hover": {
    borderColor: "rgba(59,130,246,0.5)",
    backgroundColor: "rgba(59,130,246,0.09)",
    transform: "scale(1.07)",
    boxShadow: "0 8px 24px rgba(59,130,246,0.15)",
  },
};

export const impactValueSx: SxProps<Theme> = {
  fontSize: { xs: "1.9rem", md: "2.4rem" },
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: 1,
  color: "#60a5fa",
};

export const impactLabelSx: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: { xs: "0.72rem", md: "0.78rem" },
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "text.primary",
  mt: 0.5,
};

export const impactDescSx: SxProps<Theme> = {
  fontSize: "0.72rem",
  color: "text.disabled",
  lineHeight: 1.45,
};

// ── Experience ────────────────────────────────────────────────────────────────

export const experienceEntryPeriodSx: SxProps<Theme> = {
  color: "text.disabled",
  letterSpacing: "0.12em",
  fontFamily: "monospace",
  fontSize: "0.7rem",
};

export const experienceEntryCompanySx: SxProps<Theme> = {
  fontWeight: 800,
  fontSize: "1.05rem",
  letterSpacing: "0.04em",
  color: "text.primary",
  textTransform: "uppercase",
};

export const experienceEntryCompanyLinkSx: SxProps<Theme> = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": { color: "primary.light", textDecoration: "underline" },
  transition: "color 0.2s",
};

export const experienceEntryRoleSx: SxProps<Theme> = {
  color: "primary.light",
  fontWeight: 500,
  fontSize: "0.82rem",
  letterSpacing: "0.02em",
};

export const experienceEntryDescSx: SxProps<Theme> = {
  lineHeight: 1.8,
  fontSize: "0.87rem",
  mt: 0.5,
};

export const experienceEntryStackSx: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 0.75,
  mt: 1.5,
};

export const experienceEntryStackChipSx: SxProps<Theme> = {
  height: 22,
  fontSize: "0.68rem",
  fontWeight: 500,
  backgroundColor: "rgba(59,130,246,0.08)",
  color: "primary.light",
  border: "1px solid rgba(59,130,246,0.18)",
  borderRadius: 1,
  cursor: "default",
  overflow: "visible",
  transition: "transform 0.15s ease, background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
  "&:hover": {
    backgroundColor: "rgba(59,130,246,0.22)",
    color: "#93c5fd",
    borderColor: "rgba(59,130,246,0.55)",
    transform: "scale(1.12)",
    boxShadow: "0 0 8px rgba(59,130,246,0.35)",
  },
};

export const experienceStackCardSx: SxProps<Theme> = {
  p: 2,
  borderRadius: 2,
  border: "1px solid rgba(59,130,246,0.18)",
  backgroundColor: "rgba(10,10,15,0.7)",
  backdropFilter: "blur(12px)",
  display: "flex",
  flexWrap: "wrap",
  gap: 0.75,
};

export const timelineDotSx: SxProps<Theme> = {
  width: 14,
  height: 14,
  borderRadius: "50%",
  bgcolor: "primary.main",
  border: "2px solid",
  borderColor: "background.default",
  boxShadow: "0 0 0 3px rgba(59,130,246,0.25)",
  flexShrink: 0,
  zIndex: 1,
};

export const timelineMobileLineSx: SxProps<Theme> = {
  width: "1px",
  flex: 1,
  mt: 1,
  bgcolor: "rgba(59,130,246,0.2)",
  minHeight: 40,
};

export const timelineDesktopLineSx: SxProps<Theme> = {
  position: "absolute",
  left: "50%",
  top: 0,
  bottom: 0,
  width: "1px",
  bgcolor: "rgba(59,130,246,0.2)",
  transform: "translateX(-50%)",
};

export const experienceEntrySx = (isLeft: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: 0.75,
  textAlign: isLeft ? "right" : "left",
  alignItems: isLeft ? "flex-end" : "flex-start",
  maxWidth: 320,
  ml: isLeft ? "auto" : 0,
  mr: isLeft ? 0 : "auto",
  borderRadius: 2,
  p: 1.5,
  position: "relative",
  zIndex: 1,
  backdropFilter: "blur(0px)",
  transition: "box-shadow 0.15s ease, backdrop-filter 0.15s ease, transform 0.15s ease, z-index 0s",
  "&:hover": {
    boxShadow: "0 0 0 1px rgba(59,130,246,0.18)",
    backdropFilter: "blur(10px)",
    transform: "scale(1.06)",
    zIndex: 10,
  },
});

export const timelineMobileContainerSx: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  flexDirection: "column",
  gap: 5,
};

export const timelineMobileItemSx: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  alignItems: "flex-start",
};

export const timelineMobileDotWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pt: 0.5,
  flexShrink: 0,
};

export const timelineDesktopContainerSx = (itemCount: number, step: number): SxProps<Theme> => ({
  display: { xs: "none", md: "block" },
  position: "relative",
  pb: `${itemCount * step + 160}px`,
});

export const timelineDesktopRowSx = (top: number): SxProps<Theme> => ({
  position: "absolute",
  top,
  left: 0,
  right: 0,
  display: "grid",
  gridTemplateColumns: "1fr 80px 1fr",
  alignItems: "flex-start",
});

export const timelineDesktopDotCenterSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  pt: 0.5,
};

export const timelinePlaceholderSx: SxProps<Theme> = {
  pointerEvents: "none",
};

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillsFilterRowSx: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
  mb: 5,
};

export const skillsLevelGroupSx: SxProps<Theme> = {
  mb: 4,
};

export const skillsLevelHeaderSx: SxProps<Theme> = {
  mb: 2,
};

export const skillsLevelLabelSx: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "primary.light",
  display: "block",
  mb: 0.4,
};

export const skillsLevelDescSx: SxProps<Theme> = {
  fontSize: "0.78rem",
  color: "text.disabled",
  letterSpacing: "0.01em",
  display: "block",
  mb: 1.2,
};

export const skillsLevelDividerSx: SxProps<Theme> = {
  height: "1px",
  background: "linear-gradient(90deg, rgba(59,130,246,0.35), transparent)",
  mb: 2,
};

export const skillsPoolSx: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.5,
};

export const skillsChipSx: SxProps<Theme> = {
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "text.secondary",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "0.82rem",
  fontWeight: 500,
  px: 0.5,
  height: 34,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "rgba(59,130,246,0.1)",
    color: "text.primary",
    borderColor: "rgba(59,130,246,0.3)",
  },
  transition: "all 0.2s",
};

const skillsFilterButtonBaseSx = {
  borderRadius: 2,
  textTransform: "none" as const,
  fontSize: "0.78rem",
  px: 2,
  py: 0.5,
  minWidth: 0,
  transition: "all 0.2s",
};

export const skillsFilterButtonActiveSx: SxProps<Theme> = {
  ...skillsFilterButtonBaseSx,
  fontWeight: 700,
  backgroundColor: "rgba(59,130,246,0.15)",
  color: "primary.light",
  border: "1px solid rgba(59,130,246,0.5)",
  boxShadow: "none",
  "&:hover": { backgroundColor: "rgba(59,130,246,0.22)", boxShadow: "none" },
};

export const skillsFilterButtonInactiveSx: SxProps<Theme> = {
  ...skillsFilterButtonBaseSx,
  fontWeight: 400,
  color: "text.disabled",
  borderColor: "divider",
  "&:hover": { color: "text.primary", borderColor: "rgba(59,130,246,0.3)" },
};

// ── Beyond the Code ───────────────────────────────────────────────────────────

export const beyondOverlineSx: SxProps<Theme> = {
  color: "text.disabled",
  letterSpacing: "0.2em",
  fontSize: "0.68rem",
  display: "block",
  mb: 3,
};

export const beyondProjectsGridSx: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 4,
};

export const beyondProjectItemSx: SxProps<Theme> = {
  display: "flex",
  gap: 2.5,
  alignItems: "flex-start",
  flex: "1 1 280px",
  maxWidth: 480,
};

export const beyondProjectLogoBoxSx: SxProps<Theme> = {
  width: 44,
  height: 44,
  borderRadius: 2.5,
  overflow: "hidden",
  flexShrink: 0,
  mt: 0.25,
  position: "relative",
};

export const beyondProjectIconSpotifySx: SxProps<Theme> = {
  width: 44,
  height: 44,
  borderRadius: 2.5,
  background: "linear-gradient(135deg, rgba(30,215,96,0.18), rgba(30,215,96,0.08))",
  border: "1px solid rgba(30,215,96,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  mt: 0.25,
};

export const beyondProjectIconGithubSx: SxProps<Theme> = {
  width: 44,
  height: 44,
  borderRadius: 2.5,
  background: "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(14,165,233,0.12))",
  border: "1px solid rgba(59,130,246,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  mt: 0.25,
};

export const beyondProjectBodySx: SxProps<Theme> = { flexGrow: 1 };

export const beyondProjectHeaderSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  mb: 0.5,
};

export const beyondProjectLinkSx: SxProps<Theme> = {
  fontWeight: 700,
  color: "text.primary",
  fontSize: "0.97rem",
  textDecoration: "none",
  "&:hover": { color: "primary.light" },
  transition: "color 0.2s",
};

export const beyondProjectTagSx: SxProps<Theme> = {
  height: 20,
  fontSize: "0.62rem",
  fontWeight: 500,
  backgroundColor: "rgba(14,165,233,0.08)",
  color: "secondary.light",
  border: "1px solid rgba(14,165,233,0.18)",
};

export const beyondProjectDescSx: SxProps<Theme> = {
  lineHeight: 1.75,
  fontSize: "0.86rem",
};

export const beyondSpotifyIconSx: SxProps<Theme> = {
  fontSize: 22,
  color: "#1ed760",
};

export const beyondGithubIconSx: SxProps<Theme> = {
  fontSize: 20,
  color: "primary.main",
};

// ── Education ─────────────────────────────────────────────────────────────────

export const educationFeaturedGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  gap: 3,
  mb: 3,
};

export const educationSecondaryGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
  gap: 2,
};

export const educationFeaturedCardSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.6,
  p: 3,
  borderRadius: 2,
  border: "1px solid rgba(59,130,246,0.28)",
  backgroundColor: "rgba(59,130,246,0.04)",
  backdropFilter: "blur(8px)",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    borderColor: "rgba(59,130,246,0.5)",
    boxShadow: "0 0 0 1px rgba(59,130,246,0.2), 0 4px 20px rgba(59,130,246,0.1)",
    transform: "translateY(-3px)",
  },
};

export const educationSecondaryCardSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.4,
  p: 2,
  borderRadius: 2,
  border: "1px solid rgba(255,255,255,0.06)",
  backgroundColor: "rgba(255,255,255,0.015)",
  backdropFilter: "blur(4px)",
  transition: "border-color 0.25s ease",
  "&:hover": {
    borderColor: "rgba(255,255,255,0.12)",
  },
};

export const educationPeriodSx: SxProps<Theme> = {
  color: "text.disabled",
  letterSpacing: "0.12em",
  fontFamily: "monospace",
  fontSize: "0.7rem",
};

export const educationSecondaryPeriodSx: SxProps<Theme> = {
  color: "text.disabled",
  letterSpacing: "0.1em",
  fontFamily: "monospace",
  fontSize: "0.65rem",
};

export const educationDegreeSx: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "1rem",
  color: "text.primary",
  lineHeight: 1.35,
  mt: 0.5,
};

export const educationSecondaryDegreeSx: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: "0.82rem",
  color: "text.secondary",
  lineHeight: 1.3,
  mt: 0.25,
};

export const educationFieldSx: SxProps<Theme> = {
  color: "primary.light",
  fontWeight: 500,
  fontSize: "0.78rem",
  letterSpacing: "0.02em",
};

export const educationSecondaryFieldSx: SxProps<Theme> = {
  color: "text.disabled",
  fontWeight: 400,
  fontSize: "0.72rem",
};

export const educationInstitutionSx: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "0.87rem",
  fontWeight: 500,
  mt: 0.25,
};

export const educationSecondaryInstitutionSx: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: "0.76rem",
  fontWeight: 400,
  mt: 0.1,
};

export const educationLocationSx: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
};

export const educationSecondaryLabelSx: SxProps<Theme> = {
  color: "text.disabled",
  letterSpacing: "0.14em",
  fontSize: "0.62rem",
  textTransform: "uppercase",
  display: "block",
  mb: 1,
};

// ── Contact ───────────────────────────────────────────────────────────────────

export const contactStackSx: SxProps<Theme> = {
  gap: 2,
  flexWrap: "wrap",
};

export const linkButtonSx: SxProps<Theme> = {
  borderColor: "divider",
  color: "text.secondary",
  px: 4,
  py: 1.5,
  "&:hover": {
    borderColor: "primary.main",
    color: "text.primary",
    backgroundColor: "rgba(59,130,246,0.06)",
  },
  transition: "all 0.2s",
};

export const contactEmailIconSx: SxProps<Theme> = {
  fontSize: 20,
};
