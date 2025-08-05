import { useState } from "react"
import { useHabitsStore } from "../hooks/HabitsStore"

export default function AddHabitModalForm({ onClose }: { onClose: () => void }) {
  const [description, setDescription] = useState("")
  const addHabit = useHabitsStore((state) => state.addHabit)

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if (!description.trim()) return;
      addHabit(description);
      setDescription("");
      onClose();
  }

  return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Add Habit</h2>
            <input 
              type="text" 
              placeholder="Assing a brief description.." 
              value={description} 
              onChange={(e)=>setDescription(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </form>
  )
}
