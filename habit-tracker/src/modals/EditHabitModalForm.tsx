import { useState } from "react";
import { useHabitsStore } from "../hooks/HabitsStore";
import type { HabitModalFormProps } from "../types";

export default function EditHabitModalForm({ onClose, habit }: HabitModalFormProps) {
  const [description, setDescription] = useState("");
  const updateHabit = useHabitsStore((state) => state.updateHabitName);
  const habitToEdit = habit?.id;

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if (!description.trim()) return;
    else if(habitToEdit){
      updateHabit(habitToEdit, description);
      setDescription("");
      onClose();
    }
  }

  return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Update Habit</h2>
            <input 
              type="text" 
              placeholder={`${habit?.name}...` }
              value={description} 
              onChange={(e)=>setDescription(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        </form>
  )
}
