export type DayMark = "done" | "skipped" | "none";

export interface Habit {
    id: string;
    name: string;
    marks:{
        [date: string]: DayMark;
    }
}

export type HabitModalFormProps={
    habit: Habit | null; 
    onClose: ()=>void;
}

export type ModalType = "add" | "edit" | "confirmDelete" | null;
