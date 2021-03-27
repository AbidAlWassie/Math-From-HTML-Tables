window.onload = () => {
  
  var table = document.getElementById("root");
  
  let result = 0;
  
  for(i = 0; i < table.rows.length; i++) {
    let salary = parseInt(table.rows[i].cells[3].innerHTML);
    
    result = result + salary;
  }
  document.getElementById("result").innerHTML = result;
  console.log(result);
}