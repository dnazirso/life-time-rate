import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignInContext from "../../core/SignInContext";
import { useAppDispatch, useAppSelector } from "../../core/Store";
import { setPage } from "../../core/Store/appSlice";

export default function Header({ signed }: { signed: boolean }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(SignInContext);
  const { title } = useAppSelector((state) => state.app);

  const handleLogout = () => {
    context.logout();
    dispatch(setPage("/"));
    navigate("/");
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Typography component="div" variant="h5" sx={{ flexGrow: 1 }} px={2}>
            {title || "Life Calendar"}
          </Typography>
          <IconButton
            size="large"
            sx={{ display: signed ? "" : "none" }}
            onClick={handleLogout}
          >
            <Logout />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
