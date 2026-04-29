"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const linkButtonSx = {
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

export function ContactSection() {
  const content = useContent();

  return (
    <Section id="contact">
      <SectionHeading title={content?.ui.sections.contact.title ?? "Contact"} subtitle={content?.ui.sections.contact.subtitle} />

      <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
        <Button
          component="a"
          href={content?.personal.linkedin ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="large"
          startIcon={<LinkedinIcon size={20} />}
          sx={linkButtonSx}
        >
          LinkedIn
        </Button>

        <Button
          component="a"
          href={content?.personal.github ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="large"
          startIcon={<GithubIcon size={20} />}
          sx={linkButtonSx}
        >
          GitHub
        </Button>
      </Stack>
    </Section>
  );
}
