function evaluateEmployees(employees) {
  const getPerformanceLevel = (rating) => {
    if (rating > 4.5) {
      return "Excellent";
    } else if (rating >= 3 && rating <= 4.5) {
      return "Good";
    } else {
      return "Needs Improvement";
    }
  };

  const performanceOrder = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  const processedEmployees = employees
    .filter(employee => employee.tasksCompleted > 5)
    .map(employee => ({
      name: employee.name,
      performance: getPerformanceLevel(employee.rating)
    }))
    .sort((a, b) => {
      return performanceOrder[b.performance] - performanceOrder[a.performance];
    });

  return processedEmployees;
}

const employeeData = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

const evaluationResult = evaluateEmployees(employeeData);
console.log(evaluationResult);
