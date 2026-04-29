"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useContent } from "@/context/ContentContext";

export function Footer() {
  const content = useContent();

  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: 4, px: { xs: 2, sm: 4 } }}
    >
      <Box
        sx={{
          maxWidth: "960px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {content?.personal.name}
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            component="a"
            href={content?.personal.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="small"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
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
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            <LinkedinIcon size={18} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
