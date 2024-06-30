import { Typography, Link, useTheme } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import ResumePDF from "./../../assets/resume.pdf";
import { ResumeIcon } from "../content/ResumeButton";

export const Resume = () => {
  const theme = useTheme();

  return (
    <Link
      color="inherit"
      underline="none"
      href={`${ResumePDF}`}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        "&:hover": {
          color: theme.palette.primary.main
        },
        transition: "all 0.5s ease",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <ResumeIcon />
      <Typography component="span">
        <TextDecrypt text={" Resume"} />
      </Typography>
    </Link>
  );
};
