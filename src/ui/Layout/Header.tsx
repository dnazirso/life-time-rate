import { Logout } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignInContext from "../../core/SignInContext";
import { useAppDispatch, useAppSelector } from "../../core/Store";
import { Page, setPage } from "../../core/Store/appSlice";


export default function Header({ signed }: { signed: boolean }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(SignInContext);
  const { title } = useAppSelector((state) => state.app);
  const { page } = useAppSelector((state) => state.app);


  const handleLogout = () => {
    context.logout();
    dispatch(setPage("/"));
    navigate("/");
  };

  const handleProfile = () => {
    dispatch(setPage("/profile"));
    navigate("/profile");
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
            onClick={handleProfile}
          >
            <AccountCircleIcon />
          </IconButton>
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
