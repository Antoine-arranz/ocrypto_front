import styled from "@emotion/styled";

export const InputError = styled.div(() => ({
  position: "relative",
  color: "red",
  backgroundColor: "white",
  border: "1px solid red",
  borderRadius: "5px",
  padding: "3px",
  marginTop: ".5em",

  "&:before": {
    content: '""',
    border: "inherit",
    borderWidth: "1px 0 0 1px",
    height: "8px",
    width: "8px",
    backgroundColor: "inherit",
    position: "absolute",
    top: "-1px",
    left: "50%",
    zIndex: 2,
    transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
  },
}));
