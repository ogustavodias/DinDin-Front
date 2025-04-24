const TODAY: Date = new Date();

export function getPreviousThirtyDays() {
  let previousThirtyDays: Date = new Date();
  previousThirtyDays.setDate(TODAY.getDate() - 30);
  const year = previousThirtyDays.getFullYear();
  const month = String(previousThirtyDays.getMonth() + 1).padStart(2, '0');
  const day = String(previousThirtyDays.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getToday() {
  const year = TODAY.getFullYear();
  const month = String(TODAY.getMonth() + 1).padStart(2, '0');
  const day = String(TODAY.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
