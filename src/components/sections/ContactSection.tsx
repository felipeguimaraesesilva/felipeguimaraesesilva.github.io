"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { contactStackSx, linkButtonSx } from "@/styles/sx";

export function ContactSection() {
  const content = useContent();

  return (
    <Section id="contact">
      <SectionHeading title={content?.ui.sections.contact.title ?? "Contact"} subtitle={content?.ui.sections.contact.subtitle} />

      <Stack direction="row" sx={contactStackSx}>
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
