import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Typography>Sorry page was not found</Typography>
      <Link to="/">go back</Link>
    </>
  );
}
