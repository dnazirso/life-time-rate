import { Button } from "@mui/material";
import { Year } from "../../core/Store/yearsSlice";

export default function Age({ year }: { year: Year }) {
  return (
    <Button
      variant={
        new Date(year.date).getFullYear() > new Date().getFullYear()
          ? "outlined"
          : "contained"
      }
      color={
        new Date(year.date).getFullYear() !== new Date().getFullYear()
          ? "primary"
          : "success"
      }
      sx={{
        p: 1,
        textAlign: "center",
        borderRadius: 20,
        height: 40,
        minWidth: 40,
      }}
    >
      {year.age}
    </Button>
  );
}
