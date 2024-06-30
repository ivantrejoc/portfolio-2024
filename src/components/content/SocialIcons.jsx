import { Link, Tooltip, IconButton, Zoom, Box, useTheme } from "@mui/material";
import Resume from "../../settings/resume.json";

export const SocialIcons = () => {
  const theme = useTheme();

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    >
      <Tooltip
        title={socialItem.username}
        placement="left"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          aria-label={socialItem.network}
          sx={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: theme.spacing(2)
          }}
        >
          <Box
            component="i"
            className={socialItem.x_icon}
            sx={{
              fontSize: "1.25rem"
            }}
          />
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return (
    <Box
      sx={{
        position: "fixed",
        top: (theme) => theme.spacing(6),
        right: (theme) => theme.spacing(6)
      }}
    >
      {socialItems}
    </Box>
  );
};
