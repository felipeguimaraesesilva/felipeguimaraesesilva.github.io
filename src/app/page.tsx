import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { BeyondTheCodeSection } from "@/components/sections/BeyondTheCodeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LocaleTransition } from "@/components/LocaleTransition";
import Box from "@mui/material/Box";
import {
  sectionBgOuterSx,
  sectionBgImageSx,
  sectionBgGradientSx,
  sectionBgContentSx,
} from "@/styles/sx";

function SectionBg({
  image,
  position = "center",
  opacity = 0.07,
  children,
}: {
  image: string;
  position?: string;
  opacity?: number;
  children: React.ReactNode;
}) {
  return (
    <Box sx={sectionBgOuterSx}>
      <Box sx={sectionBgImageSx(image, position, opacity)} />
      <Box sx={sectionBgGradientSx} />
      <Box sx={sectionBgContentSx}>{children}</Box>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <LocaleTransition>
        <main>
          <SectionBg image="/images/bg-portrait.jpg" position="center top" opacity={0.07}>
            <AboutSection />
            <ExperienceSection />
          </SectionBg>

          <SectionBg image="/images/bg-workspace.jpg" position="center" opacity={0.06}>
            <SkillsSection />
            <EducationSection />
            <BeyondTheCodeSection />
            <ContactSection />
          </SectionBg>
        </main>
      </LocaleTransition>
      <Footer />
    </>
  );
}
