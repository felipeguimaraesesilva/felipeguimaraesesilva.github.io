"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import type { Experience } from "@/data/portfolio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const STEP = 200;

function ExperienceEntry({ exp, align }: { exp: Experience; align: "left" | "right" }) {
  const isLeft = align === "left";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        textAlign: isLeft ? "right" : "left",
        alignItems: isLeft ? "flex-end" : "flex-start",
        maxWidth: 320,
        ml: isLeft ? "auto" : 0,
        mr: isLeft ? 0 : "auto",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: "text.disabled", letterSpacing: "0.12em", fontFamily: "monospace", fontSize: "0.7rem" }}
      >
        {exp.period}
      </Typography>
      <Typography
        sx={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.04em", color: "text.primary", textTransform: "uppercase" }}
      >
        {exp.company}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "primary.light", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.02em" }}
      >
        {exp.role}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "0.87rem", mt: 0.5 }}>
        {exp.description}
      </Typography>
    </Box>
  );
}

function TimelineDot() {
  return (
    <Box
      sx={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        bgcolor: "primary.main",
        border: "2px solid",
        borderColor: "background.default",
        boxShadow: "0 0 0 3px rgba(59,130,246,0.25)",
        flexShrink: 0,
        zIndex: 1,
      }}
    />
  );
}

export function ExperienceSection() {
  const content = useContent();
  const experiences = content?.experiences ?? [];

  return (
    <Section id="experience">
      <SectionHeading title={content?.ui.sections.experience.title ?? "Experience"} subtitle={content?.ui.sections.experience.subtitle} />

      {/* Mobile */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 5 }}>
        {experiences.map((exp, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: 0.5, flexShrink: 0 }}>
              <TimelineDot />
              {i < experiences.length - 1 && (
                <Box sx={{ width: "1px", flex: 1, mt: 1, bgcolor: "rgba(59,130,246,0.2)", minHeight: 40 }} />
              )}
            </Box>
            <ExperienceEntry exp={exp} align="right" />
          </Box>
        ))}
      </Box>

      {/* Desktop staircase */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
          pb: `${experiences.length * STEP + 160}px`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            bgcolor: "rgba(59,130,246,0.2)",
            transform: "translateX(-50%)",
          }}
        />

        {experiences.map((exp, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: i * STEP,
              left: 0,
              right: 0,
              display: "grid",
              gridTemplateColumns: "1fr 40px 1fr",
              alignItems: "flex-start",
            }}
          >
            {i % 2 === 0 ? <ExperienceEntry exp={exp} align="left" /> : <Box />}
            <Box sx={{ display: "flex", justifyContent: "center", pt: 0.5 }}>
              <TimelineDot />
            </Box>
            {i % 2 !== 0 ? <ExperienceEntry exp={exp} align="right" /> : <Box />}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
