"use client";

import { Section } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import SvgIcon from "@mui/material/SvgIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import {
  beyondOverlineSx,
  beyondProjectsGridSx,
  beyondProjectItemSx,
  beyondProjectLogoBoxSx,
  beyondProjectIconSpotifySx,
  beyondProjectIconGithubSx,
  beyondProjectBodySx,
  beyondProjectHeaderSx,
  beyondProjectLinkSx,
  beyondProjectTagSx,
  beyondProjectDescSx,
} from "@/styles/sx";

function SpotifyIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 01-1.032.25c-2.824-1.725-6.38-2.114-10.567-1.158a.75.75 0 01-.334-1.463c4.583-1.046 8.516-.596 11.683 1.339a.75.75 0 01.25 1.032zm1.47-3.27a.938.938 0 01-1.29.308c-3.23-1.985-8.155-2.56-11.977-1.402a.938.938 0 01-.543-1.793c4.36-1.322 9.78-.682 13.502 1.597a.937.937 0 01.308 1.29zm.127-3.408C15.37 8.39 9.494 8.2 6.033 9.233a1.125 1.125 0 01-.652-2.152c4.007-1.215 10.666-1 14.888 1.548a1.125 1.125 0 01-1.156 1.931z" />
    </SvgIcon>
  );
}

export function BeyondTheCodeSection() {
  const content = useContent();
  const sideProjects = content?.sideProjects ?? [];

  return (
    <Section id="beyond">
      <Typography variant="overline" sx={beyondOverlineSx}>
        {content?.ui.sections.beyondTheCode}
      </Typography>

      <Box sx={beyondProjectsGridSx}>
        {sideProjects.map((project) => (
          <Box key={project.name} sx={beyondProjectItemSx}>
            {/* Icon / logo */}
            {project.logo ? (
              <Box sx={beyondProjectLogoBoxSx}>
                <Image src={project.logo} alt={`${project.name} logo`} fill style={{ objectFit: "cover" }} />
              </Box>
            ) : (
              <Box sx={project.type === "spotify" ? beyondProjectIconSpotifySx : beyondProjectIconGithubSx}>
                {project.type === "spotify"
                  ? <SpotifyIcon sx={{ fontSize: 22, color: "#1ed760" }} />
                  : <GitHubIcon sx={{ fontSize: 20, color: "primary.main" }} />}
              </Box>
            )}

            <Box sx={beyondProjectBodySx}>
              <Box sx={beyondProjectHeaderSx}>
                <Typography
                  component="a"
                  href={project.website ?? project.spotify ?? project.github ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={beyondProjectLinkSx}
                >
                  {project.name}
                </Typography>
                <Chip label={project.tag} size="small" sx={beyondProjectTagSx} />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={beyondProjectDescSx}>
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
