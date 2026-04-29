"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import type { Experience } from "@/data/portfolio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  experienceEntryPeriodSx,
  experienceEntryCompanySx,
  experienceEntryCompanyLinkSx,
  experienceEntryRoleSx,
  experienceEntryDescSx,
  timelineDotSx,
  timelineMobileLineSx,
  timelineDesktopLineSx,
} from "@/styles/sx";

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
      <Typography variant="caption" sx={experienceEntryPeriodSx}>
        {exp.period}
      </Typography>
      <Typography sx={experienceEntryCompanySx}>
        {exp.website ? (
          <Box
            component="a"
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            sx={experienceEntryCompanyLinkSx}
          >
            {exp.company}
          </Box>
        ) : (
          exp.company
        )}
      </Typography>
      <Typography variant="body2" sx={experienceEntryRoleSx}>
        {exp.role}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={experienceEntryDescSx}>
        {exp.description}
      </Typography>
    </Box>
  );
}

function TimelineDot() {
  return <Box sx={timelineDotSx} />;
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
              {i < experiences.length - 1 && <Box sx={timelineMobileLineSx} />}
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
        <Box sx={timelineDesktopLineSx} />

        {experiences.map((exp, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: i * STEP,
              left: 0,
              right: 0,
              display: "grid",
              gridTemplateColumns: "1fr 80px 1fr",
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
