import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ variant }) => ({
  border: "1px solid white",
  borderRadius: 0,
  color: variant === "primary" ? "black" : "white",
  backgroundColor: variant === "primary" ? "white" : "black",
  height: "2.1rem",
  "&:hover": {
    backgroundColor: "grey",
    color: "black"
  }
}));