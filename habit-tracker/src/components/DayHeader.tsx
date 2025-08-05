import { getDayStringForCurrentMonth } from "../utils/date"
export default function DayHeader() {
  const days = getDayStringForCurrentMonth()

  return (
    <>
      {days.map(day => (
        <div
          key={day}
          className="w-8 h-8 flex items-center justify-center text-sm font-semibold"
        >
          {day}
        </div>
      ))}
    </>
  )
}