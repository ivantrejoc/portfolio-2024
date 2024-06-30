import { useState } from "react";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  useTheme
} from "@mui/material";
import Resume from "../../settings/resume.json";

export const SpeedDials = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = Resume.basics.profiles.map((action) => (
    <SpeedDialAction
      key={action.network.toLowerCase()}
      icon={
        <i
          className={`${action.x_icon}`}
          style={{ color: theme.palette.foreground.default }}
        ></i>
      }
      tooltipTitle={action.network}
      onClick={handleClose}
      href={action.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    />
  ));

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
        sx={{
          position: "absolute",
          top: theme.spacing(6),
          right: theme.spacing(6)
        }}
      >
        {actionIcons}
      </SpeedDial>
    </>
  );
};
