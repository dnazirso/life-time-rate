import { Box } from "@mui/material";
import { Week } from "../../core/Store/weeksSlice";

export default function Days({ week }: { week: Week }) {
  return (
    <Box
      bgcolor={({ palette }) => palette.primary.main}
      sx={{
        opacity: week.id > Date.now() ? 0.25 : 1,
        p: 0,
        textAlign: "center",
        borderRadius: 4,
        height: 6,
        minWidth: 6,
      }}
    />
  );
}
