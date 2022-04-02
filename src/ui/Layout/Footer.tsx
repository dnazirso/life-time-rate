import {
  CalendarViewWeek,
  CalendarToday,
  PermContactCalendar,
} from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Page, setPage } from "../../core/Store/appSlice";
import { useAppSelector } from "../../core/Store";

export default function Footer({ signed }: { signed: boolean }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useAppSelector((state) => state.app);

  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    name: Page
  ) => {
    dispatch(setPage(name));
    navigate(name);
  };

  return (
    <Box
      component={BottomNavigation}
      showLabels
      value={page}
      onChange={handleChange}
      display={signed ? "flex" : "none"}
    >
      <BottomNavigationAction
        label="Years"
        value="/years"
        icon={<PermContactCalendar />}
      />
      <BottomNavigationAction
        label="Weeks"
        value="/weeks"
        icon={<CalendarViewWeek />}
      />
      <BottomNavigationAction
        label="Today"
        value="/today"
        icon={<CalendarToday />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<AccountCircleIcon />}
      />
    </Box>
  );
}
