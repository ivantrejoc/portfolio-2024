import { Box, useMediaQuery, useTheme } from "@mui/material";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/themeToggle/ThemeToggle";
import { Resume } from "../components/resume/Resume";
import { SocialIcons } from "../components/content/SocialIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Works } from "../components/works/Works";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { TechStack } from "../components/techStack/TechStack";

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        id="home"
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        {!isMobile ? <SocialIcons /> : <SpeedDials />}
        <Resume />
      </Box>
      <SideNavbar />
      <Works />
      <TechStack />
      <About />
      <Contact />
    </Box>
  );
};
