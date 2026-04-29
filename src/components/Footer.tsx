"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useContent } from "@/context/ContentContext";
import { footerSx, footerInnerSx, footerIconsSx, footerIconButtonSx } from "@/styles/sx";

export function Footer() {
  const content = useContent();

  return (
    <Box component="footer" sx={footerSx}>
      <Box sx={footerInnerSx}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {content?.personal.name}
        </Typography>

        <Box sx={footerIconsSx}>
          <IconButton
            component="a"
            href={content?.personal.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="small"
            sx={footerIconButtonSx}
          >
            <GithubIcon size={18} />
          </IconButton>
          <IconButton
            component="a"
            href={content?.personal.linkedin ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            size="small"
            sx={footerIconButtonSx}
          >
            <LinkedinIcon size={18} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
