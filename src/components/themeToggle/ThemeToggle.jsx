import { useContext } from "react";
import { ThemeContext } from "../../theme/MuiThemeProvider";
import { Tooltip, IconButton, Zoom, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


export const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Tooltip
      title={"Toggle theme"}
      placement="right"
      TransitionComponent={Zoom}
    >
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        aria-label={"Toggle theme"}
        sx={{
          position: "fixed",
          bottom: theme.spacing(6),
          right: theme.spacing(6),
          [theme.breakpoints.down("sm")]:{
            right: theme.spacing(4),
            bottom: theme.spacing(2),
          },
          height: "2.5rem",
          width: "2.5rem"
        }}
      >
        {theme === "light" ? (
          <Brightness4
            sx={{
              fontSize: "1.25rem"
            }}
          />
        ) : (
          <Brightness7
            sx={{
              fontSize: "1.25rem"
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};
