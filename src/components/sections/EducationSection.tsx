"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  educationFeaturedGridSx,
  educationSecondaryGridSx,
  educationFeaturedCardSx,
  educationSecondaryCardSx,
  educationPeriodSx,
  educationSecondaryPeriodSx,
  educationDegreeSx,
  educationSecondaryDegreeSx,
  educationFieldSx,
  educationSecondaryFieldSx,
  educationInstitutionSx,
  educationSecondaryInstitutionSx,
  educationLocationSx,
  educationSecondaryLabelSx,
} from "@/styles/sx";

export function EducationSection() {
  const content = useContent();
  const education = content?.education ?? [];

  const featured = education.filter((e) => e.featured);
  const secondary = education.filter((e) => !e.featured);

  return (
    <Section id="education">
      <SectionHeading
        title={content?.ui.sections.education.title ?? "Education"}
        subtitle={content?.ui.sections.education.subtitle}
      />

      <Box sx={educationFeaturedGridSx}>
        {featured.map((edu, i) => (
          <Box key={i} sx={educationFeaturedCardSx}>
            <Typography variant="caption" sx={educationPeriodSx}>
              {edu.period}
            </Typography>
            <Typography sx={educationDegreeSx}>{edu.degree}</Typography>
            {edu.field && (
              <Typography variant="body2" sx={educationFieldSx}>
                {edu.field}
              </Typography>
            )}
            <Typography variant="body2" sx={educationInstitutionSx}>
              {edu.institution}
            </Typography>
            {edu.location && (
              <Typography variant="caption" sx={educationLocationSx}>
                {edu.location}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {secondary.length > 0 && (
        <>
          <Typography sx={educationSecondaryLabelSx}>
            {content?.ui.sections.education.additionalTraining ?? "Additional training"}
          </Typography>
          <Box sx={educationSecondaryGridSx}>
            {secondary.map((edu, i) => (
              <Box key={i} sx={educationSecondaryCardSx}>
                <Typography variant="caption" sx={educationSecondaryPeriodSx}>
                  {edu.period}
                </Typography>
                <Typography sx={educationSecondaryDegreeSx}>{edu.degree}</Typography>
                {edu.field && (
                  <Typography variant="caption" sx={educationSecondaryFieldSx}>
                    {edu.field}
                  </Typography>
                )}
                <Typography variant="caption" sx={educationSecondaryInstitutionSx}>
                  {edu.institution}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Section>
  );
}
