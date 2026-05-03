"use client";

import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import {
  heroContainerSx,
  heroContentSx,
  heroInnerSx,
  heroPhotoBoxSx,
  heroTextColumnSx,
  heroGreetingSx,
  heroNameSx,
  heroRoleSx,
  heroDividerSx,
  heroCompetenciesBoxSx,
  heroCompetenciesTextSx,
  heroSocialBoxSx,
  socialButtonSx,
  impactStatsWrapperSx,
  impactGridSx,
  impactCardSx,
  impactValueSx,
  impactLabelSx,
  impactDescSx,
} from "@/styles/sx";

export function AboutSection() {
  const content = useContent();
  const personal = content?.personal;
  const impactStats = content?.impactStats ?? [];

  return (
    <Box id="about" sx={heroContainerSx}>
      {/* Hero content */}
      <Box sx={heroContentSx}>
        <Box sx={heroInnerSx}>
          {/* Photo — rectangular, left column */}
          {personal?.photo && (
            <Box sx={heroPhotoBoxSx}>
              <Image
                src={personal.photo}
                alt={`${personal.name} — ${personal.role}, ${personal.location}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </Box>
          )}

          {/* Text — right column */}
          <Box sx={heroTextColumnSx}>
            <Typography sx={heroGreetingSx}>{personal?.greeting}</Typography>

            <Typography component="h1" sx={heroNameSx}>
              {personal?.name}
            </Typography>

            <Typography sx={heroRoleSx}>{personal?.role}</Typography>

            <Divider sx={heroDividerSx} />

            <Box sx={heroCompetenciesBoxSx}>
              <Typography sx={heroCompetenciesTextSx}>{personal?.competencies}</Typography>
            </Box>

            <Box sx={heroSocialBoxSx}>
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

      {/* Impact stats */}
      {impactStats.length > 0 && (
        <Box sx={impactStatsWrapperSx}>
          <Box sx={impactGridSx}>
            {impactStats.map((stat, i) => (
              <Box key={i} sx={impactCardSx}>
                <Typography sx={impactValueSx}>{stat.value}</Typography>
                <Typography sx={impactLabelSx}>{stat.label}</Typography>
                <Typography sx={impactDescSx}>{stat.description}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
