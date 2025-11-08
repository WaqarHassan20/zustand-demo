import { Container, Typography, Box } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import useHabitStore from "./store/store";

function App() {
  
  const store = useHabitStore();
  console.log(store);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          ✨ Habit Tracker ✨
        </Typography>

        <Typography variant="h1" align="center" gutterBottom>
          Track your habits, achieve your goals
        </Typography>

        {/* Form */}
        <AddHabitForm />
        {/* list */}
        <HabitList />
        {/* stats */}
      </Box>
    </Container>
  );
}

export default App;
