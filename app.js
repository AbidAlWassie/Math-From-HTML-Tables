window.onload = () => {
  
  var table = document.getElementById("root");
  
  const salaryElement = document.getElementById("salary");
  const ageElement = document.getElementById("age");
  
  let inSalary = 0;
  let inAge = 0;
  let counter = 0;
  
  for(i = 0; i < table.rows.length; i++) {
    let salary = parseInt(table.rows[i].cells[3].innerHTML);
    let age = parseInt(table.rows[i].cells[4].innerHTML);
    inSalary = inSalary + salary;
    inAge = inAge + age;
    counter++;
  }
  
  salaryElement.innerHTML = inSalary;
  ageElement.innerHTML = inAge;
  console.log(counter);
  // console.log("Total Salary: " + inSalary + " & " + "Total Age: " + inAge);
}