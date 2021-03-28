window.onload = () => {
  
  var table = document.getElementById("root");
  
  const salaryElement = document.getElementById("salary");
  const ageElement = document.getElementById("age");
  
  let inSalary = 0;
  let inAge = 0;
  let counter = 0;
  let avAge;
  
  for(i = 0; i < table.rows.length; i++) {
    counter++;
    
    let salary = parseInt(table.rows[i].cells[3].innerHTML);
    let age = parseInt(table.rows[i].cells[4].innerHTML);
    
    inSalary = inSalary + salary;
    inAge = inAge + age;
    avAge = inAge / counter;
    
  }
  
  salaryElement.innerHTML = "Total " + inSalary + "$";
  ageElement.innerHTML = "Average " + avAge;
  console.log(counter);
  // console.log("Total Salary: " + inSalary + " & " + "Total Age: " + inAge);
}