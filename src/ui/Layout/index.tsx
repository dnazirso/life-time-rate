import { ReactNode, useContext } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import SignInContext from "../../core/SignInContext";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const context = useContext(SignInContext);

  const signed = context.user.birthdate !== new Date("10/10/1910").getTime();

  return (
    <Grid container direction="column" minHeight="100vh">
      <CssBaseline />
      <Grid item>
        <Header signed={signed} />
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs>
        <Grid item>{children}</Grid>
      </Grid>
      <Grid item>
        <Footer signed={signed} />
      </Grid>
    </Grid>
  );
}
