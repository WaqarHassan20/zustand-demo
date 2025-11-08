import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import useHabitStore from "../store/store";

function AddHabitForm() {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const { addHabit } = useHabitStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addHabit(name, frequency);
    setName(""); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box className="flex flex-col gap-3 my-4">
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
          <Select
            value={frequency}
            label="Frequency"
            onChange={(e: SelectChangeEvent) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
}

export default AddHabitForm;
