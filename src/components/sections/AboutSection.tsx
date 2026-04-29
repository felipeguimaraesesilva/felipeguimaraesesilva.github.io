"use client";

import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
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

  return (
    <Box id="about" sx={{ position: "relative", overflow: "hidden", minHeight: { xs: "80vh", md: "90vh" }, display: "flex", flexDirection: "column" }}>
      {/* Background photo */}
      <Image
        src="/images/bg-portrait.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.07 }}
      />

      {/* Dark overlay — same gradient fade as SectionBg */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #0a0a0f 0%, transparent 15%, transparent 85%, #0a0a0f 100%)",
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
            maxWidth: 900,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 5, md: 7 },
          }}
        >
          {/* Photo — rectangular, left column */}
          {personal?.photo && (
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: 180, md: 220 },
                height: { xs: 240, md: 290 },
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </Box>
          )}

          {/* Text — right column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: 3,
              flex: 1,
            }}
          >
          {/* Greeting */}
          <Typography
            sx={{
              color: "#60a5fa",
              letterSpacing: "0.22em",
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {personal?.greeting}
          </Typography>

          {/* Name */}
          <Typography
            component="h1"
            sx={{
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
            }}
          >
            {personal?.name}
          </Typography>

          {/* Role subtitle */}
          <Typography
            sx={{
              color: "#60a5fa",
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {personal?.role}
          </Typography>

          <Divider sx={{ borderColor: "rgba(59,130,246,0.4)", width: 60, my: 1, alignSelf: { xs: "center", md: "flex-start" } }} />

          {/* Competencies */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: 3,
              border: "none",
              backgroundColor: "transparent",
              backdropFilter: "blur(4px)",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{ lineHeight: 1.9, whiteSpace: "pre-line", fontSize: "0.93rem", color: "#cbd5e1" }}
            >
              {personal?.competencies}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" } }}>
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
          </Box>
          </Box>
        </Box>
      </Box>

      {/* end hero content */}
    </Box>
  );
}
