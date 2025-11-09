import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import useHabitStore from "../store/store";
import { EmojiEvents, CheckCircle, TrendingUp } from "@mui/icons-material";

function HabitStats() {
  const { habits } = useHabitStore();

  const totalHabits = habits.length;
  const completedHabits = habits.filter(
    (habit) => habit.completedDates.length > 0
  ).length;
  const completionRate = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  const stats = [
    {
      title: "Total Habits",
      value: totalHabits,
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    },
    {
      title: "Active Habits",
      value: completedHabits,
      icon: <CheckCircle sx={{ fontSize: 40 }} />,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    {
      title: "Success Rate",
      value: `${completionRate}%`,
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      color: '#fbbf24',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    },
  ];

  return (
    <Box>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4, 
          fontWeight: 700,
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        📊 Your Progress
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid key={index} size={{ xs: 12, sm: 4 }}>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                textAlign: 'center',
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${stat.color}22`,
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: `0 8px 30px ${stat.color}30`,
                  border: `1px solid ${stat.color}44`,
                }
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: stat.gradient,
                  mb: 2,
                  boxShadow: `0 8px 24px ${stat.color}40`,
                }}
              >
                <Box sx={{ color: 'white' }}>
                  {stat.icon}
                </Box>
              </Box>
              
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800,
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1
                }}
              >
                {stat.value}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.875rem'
                }}
              >
                {stat.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HabitStats;
