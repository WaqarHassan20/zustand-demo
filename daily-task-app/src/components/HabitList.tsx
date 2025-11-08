import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import useHabitStore from "../store/store";
import { CheckCircle, Delete } from "@mui/icons-material";

function HabitList() {
  const { habits } = useHabitStore();
  const today = new Date().toISOString().split('T')[0];

  return (
    <Box>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2, mb: 2 }}>
            <Grid container alignItems="center">
              <Grid size={{ xs: 12, sm: 8 }}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {habit.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircle />}
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark as Completed"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
}

export default HabitList;
