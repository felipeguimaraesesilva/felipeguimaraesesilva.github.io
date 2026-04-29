"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const ALL = "All";

export function SkillsSection() {
  const content = useContent();
  const skillCategories = content?.skillCategories ?? [];
  const [active, setActive] = useState(ALL);

  const categories = [ALL, ...skillCategories.map((g) => g.category)];

  const allSkills = skillCategories.flatMap((g) =>
    g.items.map((item) => ({ item, category: g.category }))
  );

  const isVisible = (category: string) =>
    active === ALL || active === category;

  return (
    <Section id="skills">
      <SectionHeading title={content?.ui.sections.skills.title ?? "Skills"} subtitle={content?.ui.sections.skills.subtitle} />

      {/* Filter buttons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActive(cat)}
            size="small"
            variant={active === cat ? "contained" : "outlined"}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontSize: "0.78rem",
              fontWeight: active === cat ? 700 : 400,
              px: 2,
              py: 0.5,
              minWidth: 0,
              ...(active === cat
                ? {
                    backgroundColor: "rgba(59,130,246,0.15)",
                    color: "primary.light",
                    border: "1px solid rgba(59,130,246,0.5)",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "rgba(59,130,246,0.22)", boxShadow: "none" },
                  }
                : {
                    color: "text.disabled",
                    borderColor: "divider",
                    "&:hover": { color: "text.primary", borderColor: "rgba(59,130,246,0.3)" },
                  }),
              transition: "all 0.2s",
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Skills pool — all chips always in DOM, visibility animated */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {allSkills.map(({ item, category }) => (
          <motion.div
            key={`${category}-${item}`}
            animate={{
              opacity: isVisible(category) ? 1 : 0,
              scale: isVisible(category) ? 1 : 0.75,
              pointerEvents: isVisible(category) ? "auto" : "none",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ pointerEvents: isVisible(category) ? "auto" : "none" }}
          >
            <Chip
              label={item}
              sx={{
                backgroundColor: "rgba(255,255,255,0.03)",
                color: "text.secondary",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "0.82rem",
                fontWeight: 500,
                px: 0.5,
                height: 34,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "rgba(59,130,246,0.1)",
                  color: "text.primary",
                  borderColor: "rgba(59,130,246,0.3)",
                },
                transition: "all 0.2s",
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
