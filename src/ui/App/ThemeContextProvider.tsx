import { createTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode, useMemo } from "react";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
