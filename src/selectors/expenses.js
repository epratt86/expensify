//get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1; //if b is created before a return 1. otherwise -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1; //if b is less than a, return 1. otherwise return -1
    }
  });
};