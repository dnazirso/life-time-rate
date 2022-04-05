import { Box } from "@mui/material";
import { Week } from "../../core/Store/weeksSlice";
import { WeeksColor } from "../../core/Store/weeksColor";
export default function Days({
  week,
  weeksColor,
  idColors,
}: {
  week: Week;
  weeksColor: WeeksColor;
  idColors: number;
}) {
  console.log(weeksColor.color);
  let colors1;
  let colors2;
  let colors3;
  try {
    colors1 = Number(weeksColor.color[idColors][0]);
    colors2 = Number(weeksColor.color[idColors][1]);
    colors3 = Number(weeksColor.color[idColors][2]);
  } catch (error) {
    colors1 = Number(0);
    colors2 = Number(100);
    colors3 = Number(120);
  }

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
        backgroundColor:
          week.id > Date.now()
            ? "rgb(0, 100, 120)"
            : `rgb(${colors1}, ${colors2}, ${colors3})`,
      }}
    />
  );
}
