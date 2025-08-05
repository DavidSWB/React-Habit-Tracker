import { useHabitsStore } from "../hooks/HabitsStore";
import type { Habit, ModalType } from "../types"
import { getDateStringsForCurrentMonth } from "../utils/date";
import DayCell from "./DayCell";

export default function HabitRow({ habit, openModal }: { habit: Habit; openModal: (type: ModalType, habit:Habit)=>void }) {
  const dates = getDateStringsForCurrentMonth();
  const toggleDayMark = useHabitsStore(state => state.toggleDayMark);

  return (
    <>
      <div className="w-32 font-semibold flex flex-col items-start">
        {habit.name}
        <div className="text-xs space-x-2">
          <button onClick={() => openModal("edit", habit)}>✏</button>
          <button onClick={() => openModal("confirmDelete", habit)}>❌</button>
        </div>
      </div>
      {dates.map(date => (
        <DayCell
          key={`${habit.id}-${date}`}
          stat={habit.marks[date] || "none"}
          onToggle={() => toggleDayMark(habit.id, date)}
        />
      ))}
    </>
  )
}
