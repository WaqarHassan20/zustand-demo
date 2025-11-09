import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import useHabitStore from "../store/store";
import { Add, Stars } from "@mui/icons-material";

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
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Stars sx={{ mr: 1, color: '#fbbf24' }} />
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Create New Habit
        </Typography>
      </Box>
      
      <form onSubmit={handleSubmit}>
        <Box className="flex flex-col gap-4">
          <TextField
            label="Habit Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Morning meditation, Exercise..."
            fullWidth
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(99, 102, 241, 0.6)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
            }}
          />
          <FormControl fullWidth>
            <InputLabel 
              id="frequency-label"
              sx={{
                '&.Mui-focused': {
                  color: '#6366f1',
                }
              }}
            >
              Frequency
            </InputLabel>
            <Select
              labelId="frequency-label"
              value={frequency}
              label="Frequency"
              onChange={(e: SelectChangeEvent) => setFrequency(e.target.value as "daily" | "weekly")}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(99, 102, 241, 0.6)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6366f1',
                },
              }}
            >
              <MenuItem value="daily">📅 Daily</MenuItem>
              <MenuItem value="weekly">📆 Weekly</MenuItem>
            </Select>
          </FormControl>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            size="large"
            startIcon={<Add />}
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                boxShadow: '0 6px 25px rgba(99, 102, 241, 0.6)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Add Habit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddHabitForm;
