export const getFirstDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
