import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
} from 'date-fns';

export function getDateStringsForCurrentMonth(): string[]{
    const start = startOfMonth(new Date);
    const end = endOfMonth(new Date);
    return eachDayOfInterval({start, end}).map((date)=>
        format(date, "yyyy-MM-dd")
    );
}

export function getDayStringForCurrentMonth(): string[]{
    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date);
    return eachDayOfInterval({start, end}).map((date)=>
        format(date, "dd")
    );
}
export function getNumberOfDaysCurrentMonth(): number {
    return endOfMonth(new Date()).getDate();
}

export function getTodayString(): string{
    return format(new Date(), "yyyy-MM-dd");
}