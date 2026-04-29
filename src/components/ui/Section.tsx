"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export function Section({ id, children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "960px",
        mx: "auto",
        width: "100%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: 7 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "text.primary",
          mb: subtitle ? 0.75 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.disabled" sx={{ letterSpacing: "0.02em" }}>
          {subtitle}
        </Typography>
      )}
      <Box
        sx={{
          mt: 2,
          height: "1px",
          background: "linear-gradient(90deg, rgba(59,130,246,0.6), transparent)",
        }}
      />
    </Box>
  );
}
