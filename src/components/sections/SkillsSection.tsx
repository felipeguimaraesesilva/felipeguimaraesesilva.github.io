"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export function SkillsSection() {
  const content = useContent();
  const skillCategories = content?.skillCategories ?? [];

  return (
    <Section id="skills">
      <SectionHeading title={content?.ui.sections.skills.title ?? "Skills"} subtitle={content?.ui.sections.skills.subtitle} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {skillCategories.map((group) => (
          <Box key={group.category}>
            <Typography
              variant="overline"
              sx={{
                color: "text.disabled",
                letterSpacing: "0.2em",
                fontSize: "0.68rem",
                display: "block",
                mb: 2,
              }}
            >
              {group.category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {group.items.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
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
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
