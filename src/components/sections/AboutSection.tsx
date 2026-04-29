"use client";

import { Section } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";

const socialButtonSx = {
  color: "text.disabled",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 2,
  width: 40,
  height: 40,
  "&:hover": { color: "text.primary", borderColor: "rgba(59,130,246,0.6)" },
  transition: "all 0.2s",
};

export function AboutSection() {
  const content = useContent();
  const personal = content?.personal;
  const band = content?.band;
  const sideProjects = content?.sideProjects ?? [];

  return (
    <Box id="about" sx={{ position: "relative", overflow: "hidden", minHeight: { xs: "80vh", md: "90vh" }, display: "flex", flexDirection: "column" }}>
      {/* Background photo */}
      <Image
        src="/images/bg-portrait.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0.72) 60%, #0a0a0f 100%)",
          zIndex: 1,
        }}
      />

      {/* Hero content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 14, md: 20 },
        }}
      >
        <Box
          sx={{
            maxWidth: 680,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Greeting */}
          <Typography
            sx={{
              color: "#bfdbfe",
              letterSpacing: "0.22em",
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {personal?.greeting}
          </Typography>

          {/* Name — solid with inner shadow effect */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "0.01em",
              color: "#bfdbfe",
              textTransform: "uppercase",
              textShadow: [
                "0 1px 0 rgba(255,255,255,0.06)",
                "0 -2px 0 rgba(0,0,0,0.5)",
                "0 3px 10px rgba(0,0,0,0.8)",
                "inset 0 2px 4px rgba(0,0,0,0.6)",
              ].join(", "),
            }}
          >
            {personal?.name}
          </Typography>

          {/* Role subtitle */}
          <Typography
            sx={{
              color: "#bfdbfe",
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {personal?.role}
          </Typography>

          <Divider sx={{ borderColor: "rgba(59,130,246,0.4)", width: 60, my: 1 }} />

          {/* Competencies panel */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: 3,
              border: "1px solid rgba(59,130,246,0.25)",
              backgroundColor: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{ lineHeight: 1.9, whiteSpace: "pre-line", fontSize: "0.93rem", color: "#cbd5e1" }}
            >
              {personal?.competencies}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href={personal?.github ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={socialButtonSx}
              >
                <GithubIcon size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href={personal?.linkedin ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={socialButtonSx}
              >
                <LinkedinIcon size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip title={personal?.email ?? ""}>
              <IconButton
                component="a"
                href={`mailto:${personal?.email ?? ""}`}
                aria-label="Email"
                sx={socialButtonSx}
              >
                <EmailIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>

      {/* Hobbies */}
      <Box sx={{ position: "relative", zIndex: 2, pb: { xs: 8, md: 12 } }}>
        <Section id="about-hobbies">
          <Typography
            variant="overline"
            sx={{ color: "text.disabled", letterSpacing: "0.2em", fontSize: "0.68rem", display: "block", mb: 3 }}
          >
            {content?.ui.sections.beyondTheCode}
          </Typography>

          {band && (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                p: 3,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "rgba(255,255,255,0.02)",
                maxWidth: 540,
                transition: "border-color 0.25s",
                "&:hover": { borderColor: "rgba(59,130,246,0.3)" },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.5,
                  overflow: "hidden",
                  flexShrink: 0,
                  mt: 0.25,
                  position: "relative",
                }}
              >
                <Image
                  src="/images/band-logo.png"
                  alt="Band on the Run logo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                  <Typography sx={{ fontWeight: 700, color: "text.primary", fontSize: "0.97rem" }}>
                    {band.name}
                  </Typography>
                  <Chip
                    label={band.genre}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      backgroundColor: "rgba(14,165,233,0.08)",
                      color: "secondary.light",
                      border: "1px solid rgba(14,165,233,0.18)",
                    }}
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2, fontSize: "0.86rem" }}>
                  {band.description}
                </Typography>

                {band.instagram && (
                  <Tooltip title="Instagram">
                    <IconButton
                      component="a"
                      href={band.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      aria-label="Band Instagram"
                      sx={{
                        color: "text.disabled",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1.5,
                        width: 32,
                        height: 32,
                        "&:hover": { color: "#e1306c", borderColor: "#e1306c" },
                        transition: "all 0.2s",
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Tooltip>
                )}
                {band.website && (
                  <Tooltip title="Band website">
                    <IconButton
                      component="a"
                      href={band.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      aria-label="Band website"
                      sx={{
                        color: "text.disabled",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1.5,
                        width: 32,
                        height: 32,
                        "&:hover": { color: "primary.light", borderColor: "primary.light" },
                        transition: "all 0.2s",
                      }}
                    >
                      <LanguageIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            </Box>
          )}

          {sideProjects.length > 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: band ? 2 : 0 }}>
              {sideProjects.map((project) => (
                <Box
                  key={project.name}
                  sx={{
                    display: "flex",
                    gap: 3,
                    alignItems: "flex-start",
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    maxWidth: 540,
                    transition: "border-color 0.25s",
                    "&:hover": { borderColor: "rgba(59,130,246,0.3)" },
                  }}
                >
                  <Box
                    sx={{
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
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 20, color: "primary.main" }} />
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                      <Typography sx={{ fontWeight: 700, color: "text.primary", fontSize: "0.97rem" }}>
                        {project.name}
                      </Typography>
                      <Chip
                        label={project.tag}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: "0.62rem",
                          fontWeight: 500,
                          backgroundColor: "rgba(14,165,233,0.08)",
                          color: "secondary.light",
                          border: "1px solid rgba(14,165,233,0.18)",
                        }}
                      />
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2, fontSize: "0.86rem" }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      {project.github && (
                        <Tooltip title="GitHub repository">
                          <IconButton
                            component="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="GitHub repository"
                            sx={{
                              color: "text.disabled",
                              border: "1px solid",
                              borderColor: "divider",
                              borderRadius: 1.5,
                              width: 32,
                              height: 32,
                              "&:hover": { color: "primary.light", borderColor: "primary.light" },
                              transition: "all 0.2s",
                            }}
                          >
                            <GitHubIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {project.website && (
                        <Tooltip title="Website">
                          <IconButton
                            component="a"
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label="Project website"
                            sx={{
                              color: "text.disabled",
                              border: "1px solid",
                              borderColor: "divider",
                              borderRadius: 1.5,
                              width: 32,
                              height: 32,
                              "&:hover": { color: "primary.light", borderColor: "primary.light" },
                              transition: "all 0.2s",
                            }}
                          >
                            <LanguageIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Section>
      </Box>
    </Box>
  );
}
