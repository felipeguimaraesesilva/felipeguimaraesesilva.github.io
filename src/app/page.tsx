import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { BeyondTheCodeSection } from "@/components/sections/BeyondTheCodeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Box from "@mui/material/Box";

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
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: position,
          opacity,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #0a0a0f 0%, transparent 15%, transparent 85%, #0a0a0f 100%)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>{children}</Box>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
