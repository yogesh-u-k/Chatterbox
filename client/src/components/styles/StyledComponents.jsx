import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { greyColor } from "../constants/color";
export const VisuallyHiddenInputs = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: "1rem";
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled("input")`
width: 100%;
height: 6vh;
border: none;
outline: none;
padding: 0 3rem;
border-radius: 1.5rem;
background-color: ${greyColor};`;
