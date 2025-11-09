import { Box, Button, LinearProgress, Paper, Typography, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
import useHabitStore, { type Habit } from "../store/store";
import { CheckCircle, Delete, LocalFireDepartment } from "@mui/icons-material";

function HabitList() {
  const { habits, removeHabit, toggleHabit } = useHabitStore();

  const today = new Date().toISOString().split("T")[0];

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];
      if (habit.completedDates.includes(dateString)) {
        streak++;
      } else {
        break;
      }
      currentDate.setDate(currentDate.getDate() - 1);
    }

    return streak;
  };

  return (
    <Box>
      {habits.length === 0 ? (
        <Paper 
          elevation={4}
          sx={{ 
            p: 6, 
            textAlign: 'center',
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            No habits yet. Create one above to get started! 🚀
          </Typography>
        </Paper>
      ) : (
        habits.map((habit) => {
          const streak = getStreak(habit);
          const isCompleted = habit.completedDates.includes(today);
          
          return (
            <Paper 
              key={habit.id} 
              elevation={6} 
              sx={{ 
                p: 3, 
                mb: 3,
                background: `linear-gradient(135deg, ${
                  isCompleted 
                    ? 'rgba(16, 185, 129, 0.08)' 
                    : 'rgba(15, 23, 42, 0.95)'
                } 0%, rgba(15, 23, 42, 0.95) 100%)`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${
                  isCompleted 
                    ? 'rgba(16, 185, 129, 0.4)' 
                    : 'rgba(71, 85, 105, 0.3)'
                }`,
                boxShadow: `0 4px 20px ${
                  isCompleted 
                    ? 'rgba(16, 185, 129, 0.15)' 
                    : 'rgba(0, 0, 0, 0.3)'
                }`,
                transition: 'all 0.3s ease',
                opacity: isCompleted ? 0.85 : 1,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  opacity: 1,
                  boxShadow: `0 8px 30px ${
                    isCompleted 
                      ? 'rgba(16, 185, 129, 0.25)' 
                      : 'rgba(99, 102, 241, 0.2)'
                  }`,
                }
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600,
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        color: isCompleted ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.95)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {habit.name}
                    </Typography>
                    {isCompleted && (
                      <CheckCircle sx={{ color: '#10b981', fontSize: 28 }} />
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Chip 
                      label={habit.frequency} 
                      size="small" 
                      sx={{ 
                        background: isCompleted 
                          ? 'rgba(71, 85, 105, 0.3)' 
                          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        opacity: isCompleted ? 0.6 : 1
                      }}
                    />
                    {streak > 0 && (
                      <Chip 
                        icon={<LocalFireDepartment sx={{ color: '#f97316 !important' }} />}
                        label={`${streak} day${streak > 1 ? 's' : ''}`}
                        size="small"
                        sx={{ 
                          background: 'rgba(249, 115, 22, 0.2)',
                          border: '1px solid rgba(249, 115, 22, 0.3)',
                          fontWeight: 600,
                          opacity: isCompleted ? 0.7 : 1
                        }}
                      />
                    )}
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{ 
                      display: "flex", 
                      justifyContent: { xs: 'flex-start', sm: 'flex-end' }, 
                      gap: 1.5,
                      flexWrap: 'wrap'
                    }}
                  >
                    <Button
                      variant={isCompleted ? "contained" : "outlined"}
                      color={isCompleted ? "success" : "primary"}
                      startIcon={<CheckCircle />}
                      onClick={() => {
                        toggleHabit(habit.id, today);
                      }}
                      sx={{
                        ...(isCompleted ? {
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                          color: 'white',
                          borderColor: 'transparent',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
                          }
                        } : {
                          borderColor: 'rgba(99, 102, 241, 0.5)',
                          color: '#6366f1',
                          background: 'rgba(99, 102, 241, 0.05)',
                          '&:hover': {
                            borderColor: '#6366f1',
                            background: 'rgba(99, 102, 241, 0.1)',
                            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)',
                          }
                        }),
                        transition: 'all 0.3s ease',
                        fontWeight: 600,
                        '&:hover': {
                          transform: 'scale(1.05)',
                        }
                      }}
                    >
                      {isCompleted ? "✓ Completed" : "Complete"}
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {
                        removeHabit(habit.id);
                      }}
                      sx={{
                        borderColor: 'rgba(239, 68, 68, 0.4)',
                        color: '#ef4444',
                        background: 'rgba(239, 68, 68, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          background: 'rgba(239, 68, 68, 0.15)',
                          borderColor: '#ef4444',
                          boxShadow: '0 4px 15px rgba(239, 68, 68, 0.2)',
                        }
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 600,
                      color: isCompleted ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    Progress Streak
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isCompleted ? 'rgba(16, 185, 129, 0.7)' : '#6366f1'
                    }}
                  >
                    {streak} / 30 days
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={Math.min((streak / 30) * 100, 100)}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    background: 'rgba(71, 85, 105, 0.3)',
                    '& .MuiLinearProgress-bar': {
                      background: streak > 20 
                        ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                        : streak > 10
                        ? 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)'
                        : 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
                      borderRadius: 5,
                    }
                  }}
                />
              </Box>
            </Paper>
          );
        })
      )}
    </Box>
  );
}

export default HabitList;
