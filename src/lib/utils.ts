import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { MonthOption, YearOption } from '../../types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MONTH_OPTIONS: MonthOption[] = [
  {
    value: '01',
    label: '01',
  },
  {
    value: '02',
    label: '02',
  },
  {
    value: '03',
    label: '03',
  },
  {
    value: '04',
    label: '04',
  },
  {
    value: '05',
    label: '05',
  },
  {
    value: '06',
    label: '06',
  },
  {
    value: '07',
    label: '07',
  },
  {
    value: '08',
    label: '08',
  },
  {
    value: '09',
    label: '09',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
]

const currentYear = new Date().getFullYear();

export const YEAR_OPTIONS: YearOption[] = Array.from({ length: 10 }, (_, i) => {
  const year = currentYear + i;
  return {
    value: Number(year.toString().slice(-2)),
    label: year.toString().slice(-2),
  };
});