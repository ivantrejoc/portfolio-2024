import {
  Box,
  Button,
  Menu,
  MenuItem,
  Fade,
  Typography,
  Link,
  useTheme
} from "@mui/material";
import { useState } from "react";

export const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      id="dropdown-container"
      sx={{
        position: "absolute",
        top: "8%",
        marginLeft: "18vw",
        marginRight: "auto",
        marginBottom: "1.5rem",
        [theme.breakpoints.down("md")]: {
          top: "5%"
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft: "30vw",
          top: "6%"
        }
        
      }}
    >
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography
          variant="body"
          sx={{
            color: theme.palette.foreground.default,
            fontSize: "1.5rem",
            textTransform: "none !important",
            "&:active": {
              color: "#59E0C6"
            }
          }}
        >
         Menu ≡
        </Typography>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          style: {
            backgroundColor: open
              ? isLightTheme
                ? "#F9F9F9"
                : "#121212"
              : "inherit"
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={500}
      >
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          href="/#reasoning"
          onClick={handleClose}
        >
          <Link
            sx={{
              color: theme.palette.foreground.default,
              textDecoration: "none"
            }}
            href="/#works"
          >
            Projects
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: theme.palette.foreground.default,
              textDecoration: "none"
            }}
            href="/#techstack"
          >
            Tech Stack
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: theme.palette.foreground.default,
              textDecoration: "none"
            }}
            href="/#about"
          >
            About
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#AAAAAA"
            },
            "&:active": {
              color: "#AAAAAA"
            }
          }}
          onClick={handleClose}
        >
          <Link
            sx={{
              color: theme.palette.foreground.default,
              textDecoration: "none"
            }}
            href="/#contact"
          >
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};
