import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  fetchHabit: () => Promise<void>;
  isLoading?: boolean;
  error: string | null;
}

// We can warp the whole code of this store function in brackets
// that will open a window in the chrome with zustand dev tools
// to make it easier to debug the state and further development
// like to show the current state, actions, etc.

const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => {
      return {
        habits: [],
        isLoading: false,
        error: null,
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
        toggleHabit: (id, date) => {
          set((state) => ({
            habits: state.habits.map((habit) =>
              habit.id === id
                ? {
                    ...habit,
                    completedDates: habit.completedDates.includes(date)
                      ? habit.completedDates.filter((d) => d !== date)
                      : [...habit.completedDates, date],
                  }
                : habit
            ),
          }));
        },
        fetchHabit: async () => {
          set({ isLoading: true });
          try {

            const currentHabits = get().habits;
            if (currentHabits.length > 0) {
              set({ isLoading: false });
              return;
            }

            await new Promise((resolve) => {
              setTimeout(() => {
                resolve("Fetched");
              }, 2000);

              const mockedHabits: Habit[] = [
                {
                  id: "1",
                  name: "Read a book",
                  frequency: "daily",
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
                {
                  id: "2",
                  name: "Go to gym",
                  frequency: "daily",
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
                {
                  id: "3",
                  name: "Watch a documentary",
                  frequency: "weekly",
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
              ];
              set(() => {
                return { habits: mockedHabits, isLoading: false };
              });
            });
          } catch (error) {
            set({
              error:
                error instanceof Error ? error.message : "An error occurred",
              isLoading: false,
            });
          }
        },
      };
    },
    { name: "Habit-Local-Storage" }
  )
);

export default useHabitStore;
