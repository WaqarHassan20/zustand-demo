import { Container, Typography, Box, AppBar, Toolbar, Paper } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import useHabitStore from "./store/store";
import { useEffect } from "react";
import HabitStats from "./components/HabitStats";
import { AutoAwesome } from "@mui/icons-material";

function App() {
  const { fetchHabit } = useHabitStore();
  useEffect(() => {
    fetchHabit();
  }, [fetchHabit]);

  return (
    <Box className="min-h-screen" sx={{ 
      background: 'linear-gradient(to bottom right, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
    }}>
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
          background: 'rgba(15, 23, 42, 0.8)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
        }}
      >
        <Toolbar>
          <AutoAwesome sx={{ mr: 2, color: '#fbbf24', fontSize: 28 }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Habit Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box>
          {/* Hero Section */}
          <Box sx={{ 
            mb: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                width: 4,
                height: 60,
                background: 'linear-gradient(180deg, #6366f1 0%, #ec4899 100%)',
                borderRadius: 2
              }} />
              <Box>
                <Typography 
                  variant="h3" 
                  component="h1"
                  sx={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    letterSpacing: '-0.02em'
                  }}
                >
                  Habit Tracker
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    mt: 0.5
                  }}
                >
                  Track your habits, achieve your goals 🎯
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Form Section */}
          <Paper 
            elevation={8} 
            sx={{ 
              p: 4, 
              mb: 4,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <AddHabitForm />
          </Paper>

          {/* Habit List Section */}
          <Box sx={{ mb: 4 }}>
            <HabitList />
          </Box>

          {/* Stats Section */}
          <Paper 
            elevation={8} 
            sx={{ 
              p: 4,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <HabitStats />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
