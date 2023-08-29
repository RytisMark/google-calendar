export function getDateNthDaysFromCurrent(date: Date, nthDays: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + nthDays);
}
