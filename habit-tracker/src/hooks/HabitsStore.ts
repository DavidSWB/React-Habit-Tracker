import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Habit, DayMark } from '../types';

type HabitStore = {
  habits: Habit[];
  addHabit: (name: string) => void;
  removeHabit: (id: string) => void;
  toggleDayMark: (habitId: string, date: string) => void;
  updateHabitName: (id: string, newName: string) => void;
};

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export const useHabitsStore = create<HabitStore>()(
  persist(
    (set) => ({
      habits: [
          {
            id: 'test-habit',
            name: 'Stretch',
            marks: {}
          }
      ],
      addHabit: (name) =>{
        set((state) => ({
          habits: [...state.habits, { id: generateId(), name, marks: {} }],
        }))
        console.log(name)},
      removeHabit: (id) =>
        set((state) => ({
          habits: state.habits.filter((h) => h.id !== id),
        })),
      toggleDayMark: (habitId, date) =>
        set((state) => ({
          habits: state.habits.map((habit) => {
            if (habit.id !== habitId) return habit;

            const current = habit.marks[date] || 'none';
            let next: DayMark;
            switch (current) {
              case 'none':
                next = 'done';
                break;
              case 'done':
                next = 'skipped';
                break;
              case 'skipped':
                next = 'none';
                break;
            }

            return {
              ...habit,
              marks: {
                ...habit.marks,
                [date]: next,
              },
            };
          }),
        })),
      updateHabitName: (id, newName) =>
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === id ? { ...habit, name: newName } : habit
          ),
        })),
    }),
    {
      name: 'habit-store',
    }
  )
);
