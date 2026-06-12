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

      <Typography sx={{ ...educationSecondaryLabelSx, mt: 4 }}>
        Certifications
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "flex-start" }}>
        {(content?.certifications ?? []).map((cert, i) => (
          <Box
            key={i}
            component={cert.link ? "a" : "div"}
            href={cert.link}
            target={cert.link ? "_blank" : undefined}
            rel={cert.link ? "noopener noreferrer" : undefined}
            sx={{
              ...educationSecondaryCardSx,
              width: 150,
              minHeight: 270,
              justifyContent: "flex-start",
              textDecoration: "none",
              ...(cert.link && {
                cursor: "pointer",
                "&:hover": { opacity: 0.85, transform: "translateY(-2px)" },
                transition: "opacity 0.2s, transform 0.2s",
              }),
            }}
          >
            {cert.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cert.logo}
                alt={cert.degree}
                style={{ width: "100%", height: "auto", borderRadius: 6, marginBottom: 8 }}
              />
            )}
            <Typography variant="caption" sx={educationSecondaryPeriodSx}>
              {cert.period}
            </Typography>
            <Typography sx={educationSecondaryDegreeSx}>{cert.degree}</Typography>
            {cert.field && (
              <Typography variant="caption" sx={educationSecondaryFieldSx}>
                {cert.field}
              </Typography>
            )}
            <Typography variant="caption" sx={educationSecondaryInstitutionSx}>
              {cert.institution}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
