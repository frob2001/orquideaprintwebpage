export function isHolidayPromoActive(date = new Date()) {
  const month = date.getMonth() // 0 = enero … 11 = diciembre
  return month === 10 || month === 11 // noviembre y diciembre
}

export function getHolidayPromoStorageKey(date = new Date()) {
  return `orquideaprint-holiday-modal-dismissed-${date.getFullYear()}`
}
