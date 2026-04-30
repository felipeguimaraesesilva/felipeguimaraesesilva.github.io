"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { useContent } from "@/context/ContentContext";
import type { SkillLevelId } from "@/data/portfolio";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import {
  skillsFilterRowSx,
  skillsLevelGroupSx,
  skillsLevelHeaderSx,
  skillsLevelLabelSx,
  skillsLevelDescSx,
  skillsLevelDividerSx,
  skillsPoolSx,
  skillsChipSx,
  skillsFilterButtonActiveSx,
  skillsFilterButtonInactiveSx,
} from "@/styles/sx";

const ALL_SENTINEL = "__all__";

export function SkillsSection() {
  const content = useContent();
  const skillCategories = content?.skillCategories ?? [];
  const skillsUi = content?.ui.sections.skills;
  const levelDefs = skillsUi?.levels ?? [];
  const [active, setActive] = useState(ALL_SENTINEL);

  const categories = [ALL_SENTINEL, ...skillCategories.map((g) => g.category)];

  const getItemsForLevel = (levelId: SkillLevelId) =>
    skillCategories.flatMap((cat) =>
      (cat.levels[levelId] ?? []).map((item) => ({ item, category: cat.category }))
    );

  const isHighlighted = (category: string) =>
    active === ALL_SENTINEL || active === category;

  return (
    <Section id="skills">
      <SectionHeading
        title={skillsUi?.title ?? "Skills"}
        subtitle={skillsUi?.subtitle}
      />

      <Box sx={skillsFilterRowSx}>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActive(cat)}
            size="small"
            variant={active === cat ? "contained" : "outlined"}
            sx={active === cat ? skillsFilterButtonActiveSx : skillsFilterButtonInactiveSx}
          >
            {cat === ALL_SENTINEL ? (skillsUi?.filterAll ?? "All") : cat}
          </Button>
        ))}
      </Box>

      {levelDefs.map((levelDef) => {
        const items = getItemsForLevel(levelDef.id);
        if (items.length === 0) return null;
        return (
          <Box key={levelDef.id} sx={skillsLevelGroupSx}>
            <Box sx={skillsLevelHeaderSx}>
              <Typography component="span" sx={skillsLevelLabelSx}>
                {levelDef.label}
              </Typography>
              <Typography component="span" sx={skillsLevelDescSx}>
                {levelDef.description}
              </Typography>
              <Box sx={skillsLevelDividerSx} />
            </Box>
            <Box sx={skillsPoolSx}>
              {items.map(({ item, category }) => (
                <motion.div
                  key={`${category}-${item}`}
                  animate={{ opacity: isHighlighted(category) ? 1 : 0.15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Chip label={item} sx={skillsChipSx} />
                </motion.div>
              ))}
            </Box>
          </Box>
        );
      })}
    </Section>
  );
}
