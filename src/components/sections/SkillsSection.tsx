"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import {
  skillsFilterRowSx,
  skillsPoolSx,
  skillsChipSx,
  skillsFilterButtonActiveSx,
  skillsFilterButtonInactiveSx,
} from "@/styles/sx";

const ALL = "All";

export function SkillsSection() {
  const content = useContent();
  const skillCategories = content?.skillCategories ?? [];
  const [active, setActive] = useState(ALL);

  const categories = [ALL, ...skillCategories.map((g) => g.category)];

  const allSkills = skillCategories.flatMap((g) =>
    g.items.map((item) => ({ item, category: g.category }))
  );

  const isVisible = (category: string) => active === ALL || active === category;

  return (
    <Section id="skills">
      <SectionHeading title={content?.ui.sections.skills.title ?? "Skills"} subtitle={content?.ui.sections.skills.subtitle} />

      {/* Filter buttons */}
      <Box sx={skillsFilterRowSx}>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActive(cat)}
            size="small"
            variant={active === cat ? "contained" : "outlined"}
            sx={active === cat ? skillsFilterButtonActiveSx : skillsFilterButtonInactiveSx}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Box sx={skillsPoolSx}>
        {allSkills.map(({ item, category }) => (
          <motion.div
            key={`${category}-${item}`}
            animate={{ opacity: isVisible(category) ? 1 : 0.12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Chip label={item} sx={skillsChipSx} />
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}
