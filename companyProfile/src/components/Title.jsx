import { Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});


const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl ||
      variant.lg ||
      variant.md ||
      variant.sm ||
      variant.xs ||
      "h6";

  const _variantStyles =
    typeof variant !== "object"
      ? variant
      : {
        xs: variant.xs,
        sm: variant.sm || variant.xs,
        md: variant.md || variant.sm || variant.xs,
        lg: variant.lg || variant.md || variant.sm || variant.xs,
        xl:
          variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
      };

  return (
    <ThemeProvider theme={theme}>
      <Typography
        // variant={variant}
        sx={{
          ...sx,
          typography: typeof _variantStyles === "object" && _variantStyles,
          fontWeight: `${sx.fontWeight || 1000}!important`,
        }}
        component={_component}
        {...props}
      >
        {children}
      </Typography>
    </ThemeProvider>

  );
};

export default Title;