import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

// We can warp the whole code of this store function in brackets
// that will open a window in the chrome with zustand dev tools
// to make it easier to debug the state and further development
// like to show the current state, actions, etc.

const useHabitStore = create<HabitState>()((set) => {
  return {
    habits: [],
    addHabit(name, frequency) {
      set((state) => ({
        habits: [
          ...state.habits,
          {
            id: Date.now().toString(),
            name: name,
            frequency: frequency,
            completedDates: [],
            createdAt: new Date().toISOString(),
          },
        ],
      }));
    },
    removeHabit: (id) => {
      set((state) => ({
        habits: state.habits.filter((habit) => habit.id !== id),
      }));
    },
    toggleHabit: (id, date) => {},
  };
});




export default useHabitStore