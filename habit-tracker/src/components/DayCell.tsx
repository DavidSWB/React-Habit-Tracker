import type { DayMark } from '../types'

type DayCellProps = {
  stat: DayMark;
  onToggle: ()=>void;
}

export default function DayCell({stat, onToggle}: DayCellProps) {
  const getSymbol = (status:DayMark)=>{
    switch(status){
      case 'none':
        return ""
      case 'skipped':
        return "⚫"
      case 'done':
        return "✔"
    }
  }
  return (
    <div className="w-8 h-8 border border-gray-300 flex items-center justify-center cursor-pointer" onClick={onToggle}>
      {getSymbol(stat)}
    </div>
  )
}
