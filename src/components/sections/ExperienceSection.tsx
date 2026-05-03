"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import type { Experience } from "@/data/portfolio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {
  experienceEntryPeriodSx,
  experienceEntryCompanySx,
  experienceEntryCompanyLinkSx,
  experienceEntryRoleSx,
  experienceEntryDescSx,
  experienceEntryStackSx,
  experienceEntryStackChipSx,
  experienceEntrySx,
  timelineDotSx,
  timelineMobileLineSx,
  timelineMobileContainerSx,
  timelineMobileItemSx,
  timelineMobileDotWrapperSx,
  timelineDesktopLineSx,
  timelineDesktopContainerSx,
  timelineDesktopRowSx,
  timelineDesktopDotCenterSx,
  timelinePlaceholderSx,
} from "@/styles/sx";

const STEP = 320;

function ExperienceEntry({ exp, align }: { exp: Experience; align: "left" | "right" }) {
  const isLeft = align === "left";
  return (
    <Box sx={experienceEntrySx(isLeft)}>
      <Typography variant="caption" sx={experienceEntryPeriodSx}>
        {exp.period}
        {exp.location && <><br />{exp.location}</>}
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
      {exp.stack && exp.stack.length > 0 && (
        <Box sx={experienceEntryStackSx}>
          {exp.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" sx={experienceEntryStackChipSx} />
          ))}
        </Box>
      )}
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
      <SectionHeading
        title={content?.ui.sections.experience.title ?? "Experience"}
        subtitle={content?.ui.sections.experience.subtitle}
      />

      {/* Mobile */}
      <Box sx={timelineMobileContainerSx}>
        {experiences.map((exp, i) => (
          <Box key={i} sx={timelineMobileItemSx}>
            <Box sx={timelineMobileDotWrapperSx}>
              <TimelineDot />
              {i < experiences.length - 1 && <Box sx={timelineMobileLineSx} />}
            </Box>
            <ExperienceEntry exp={exp} align="right" />
          </Box>
        ))}
      </Box>

      {/* Desktop staircase */}
      <Box sx={timelineDesktopContainerSx(experiences.length, STEP)}>
        <Box sx={timelineDesktopLineSx} />

        {experiences.map((exp, i) => (
          <Box key={i} sx={timelineDesktopRowSx(i * STEP)}>
            {i % 2 === 0 ? <ExperienceEntry exp={exp} align="left" /> : <Box sx={timelinePlaceholderSx} />}
            <Box sx={timelineDesktopDotCenterSx}>
              <TimelineDot />
            </Box>
            {i % 2 !== 0 ? <ExperienceEntry exp={exp} align="right" /> : <Box sx={timelinePlaceholderSx} />}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
