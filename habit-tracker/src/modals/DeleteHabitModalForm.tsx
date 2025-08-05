import { useHabitsStore } from "../hooks/HabitsStore"
import type { HabitModalFormProps } from "../types";

export default function DeleteHabitModalForm({ onClose, habit }: HabitModalFormProps) {
    const deleteHabit = useHabitsStore(state=> state.removeHabit);
    const habitToDelete = habit?.id;
    
    function manageDelete(){
        if(habitToDelete){
            deleteHabit(habitToDelete);
            onClose()  
        }
    }

  return (
        <div>
            <h2 className="text-xl font-bold mb-4">Are you sure you want to DELETE this habit?</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={manageDelete}>Delete</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
        </div>
  )
}

