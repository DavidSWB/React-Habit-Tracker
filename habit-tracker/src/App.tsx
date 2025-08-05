import { useState } from "react"
import DayHeader from "./components/DayHeader"
import HabitRow from "./components/HabitRow"
import { useHabitsStore } from "./hooks/HabitsStore"
import AddHabitModalForm from "./modals/AddHabitModalForm"
import Modal from "./modals/Modal"
import DeleteHabitModalForm from "./modals/DeleteHabitModalForm"
import EditHabitModalForm from "./modals/EditHabitModalForm"
import type { ModalType, Habit } from "./types"
import { getDateStringsForCurrentMonth } from "./utils/date"

function App() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toUpperCase();
  const numDays = getDateStringsForCurrentMonth().length;
  const habits = useHabitsStore(state => state.habits)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeModal, setActiveModal]= useState<ModalType>(null)
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null)

  const renderModalContent = ()=>{
    const close = () => {
      setIsModalOpen(false)
      setSelectedHabit(null)
    }
  
    switch(activeModal){
      case ("add"):
        return <AddHabitModalForm onClose={close} />
      case ("confirmDelete"):
        return <DeleteHabitModalForm  onClose={close} habit={selectedHabit}/>
      case ("edit"):
        return <EditHabitModalForm  onClose={close} habit={selectedHabit}/>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4">
      <h1 className="text-2xl font-bold">Habit Tracker</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => {
          setIsModalOpen(prev => !prev)
          setActiveModal("add")
        }}
      >
        ➕
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {renderModalContent()}
      </Modal>

      <h3 className="text-1xl font-bold p-2">{currentMonth}</h3>

      <div className="grid gap-1 mt-4 items-start"
          style={{
            gridTemplateColumns: `8rem repeat(${numDays}, minmax(2rem, 1fr))`
          }}>
      <div /> 
      
        <DayHeader />
        {habits.map(habit => (
          <HabitRow
            key={`${habit.name}/${habit.marks}`}
            habit={habit}
            openModal={(type, habit) => {
              setActiveModal(type)
              setIsModalOpen(true)
              setSelectedHabit(habit)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default App
