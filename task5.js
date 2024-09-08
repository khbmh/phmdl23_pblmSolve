/*

For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
        
        */
const employees = [
  { name: 'shahin', experience: 5, starting: 20000, increment: 5000 },
  { name: 'shihab', experience: 3, starting: 15000, increment: 7000 },
  { name: 'shikot', experience: 9, starting: 30000, increment: 1000 },
  { name: 'shohel', experience: 0, starting: 29000, increment: 4000 },
];

function totalMonthlySalary(salaryArr) {
  /*
* iterate all the elements of the array
* then calculate the salary for each employee: starting + experience * increment
* add to the total salary

  */
  let totalSalary = 0;
  for (const element of salaryArr) {
    totalSalary += element.starting + element.experience * element.increment;
  }

  return totalSalary;
}

console.log(totalMonthlySalary(employees));
