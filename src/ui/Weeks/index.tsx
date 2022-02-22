import { Container, Box, Paper } from "@mui/material";
import { useAppSelector } from "../../core/Store";
import Days from "./Days";

export default function Weeks() {
  const { weeks } = useAppSelector((state) => state.weeks);

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: 650,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            flex: 1,
            position: "relative",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            justifyContent="space-evenly"
            maxWidth={420}
            sx={{
              overflow: "auto",
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(52, 1fr)",
            }}
          >
            {weeks.map((week) => (
              <Days key={week.id} week={week} />
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
