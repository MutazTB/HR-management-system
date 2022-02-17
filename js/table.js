"Use strict";

let table = document.getElementById("table");


var employees = [];
let id = 1000 ;
function Employee( name , department ,level , image){
    this.employee_ID = 0  ;
    this.name = name;
    this.department = department;
    this.level = level ;
    this.image = image ;
    this.salary = 0 ;
    employees.push(this);
}

let ghaziSamer = new Employee( "Ghazi Samer" , "Administration" , "Senior" , "url"  );
let lanaAli = new Employee( "Lana Ali" , "Finance" , "Senior" , "url" );
let tamaraAyoub = new Employee( "Tamara Ayoub" , "Marketing" , "Senior" , "url" );
let safiWaleed = new Employee( "Safi Walid" , "Administration" , "Mid-Senior" , "url" );
let omarZaid = new Employee( "Omar Zaid" , "Development" , "Senior" , "url" );
let ranaSaleh = new Employee("Rana Saleh" , "Administration" , "Junior" , "url" );
let hadiAhmad = new Employee("Hadi Ahmad" , "Finance" , "Mid-Senior" , "url" );

Employee.prototype.getSalary = function() {
    var max ;
    var min ;
       // console.log(employees[i].level);      
        if(this.level == "Senior"){
             min = 1500 ;
             max = 2000 ;
        }
        else if (this.level == "Mid-Senior"){
             min = 1000 ;
             max = 1500 ;
        }
        else {
             min = 500 ;
             max = 1000 ;
        }
       let totalSalary = Math.random() * (max - min) + min; 
        this.salary = totalSalary - totalSalary * 0.075;
        } 
//         let administrationNum = 0 ;
//         let developmentNum = 0 ;
//         let financeNum = 0 ;
//         let marketingNum = 0
// for(let i = 0 ; i < employees.length ; i ++ ){
// if(employees[i].department == "Administration"){}

// else if(employees[i].department == "Marketing"){}
// else if(employees[i].department == "Development"){}
// else{}
// }



function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Department";
    tr.appendChild(columnName);

    let numEmployee = document.createElement('th');
    numEmployee.textContent = "# of employee";
    tr.appendChild(numEmployee);

    let salary = document.createElement('th');
    salary.textContent = "Total Salary";
    tr.appendChild(salary);

    let avrSalary = document.createElement('th');
    avrSalary.textContent = "Average";
    tr.appendChild(avrSalary);
}
let a = 0;
for(let i = 0 ; i < employees[i].length ; i++){
    if(employees[i].department == "Administration"){
        a = 1 ;
        
    }
    else if(employees[i].department == "Finance"){
        a = 2 ;
        
    }
    else if(employees[i].department == "Marketing"){
       a = 3 ;
        
    }
    else {
        a = 4 ;       
    }
}


Employee.prototype.renderTableBody = function(){
    
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let departmentCell = document.createElement("td");    
    departmentCell.textContent= a ;
    tr.appendChild(departmentCell);

    let numEmployeeCell = document.createElement("td");
    numEmployeeCell.textContent= employees.length;
    tr.appendChild(numEmployeeCell);

    let totalSalaryCell = document.createElement("td");
    totalSalaryCell.textContent = this.name;
    tr.appendChild(totalSalaryCell);

    let avgSalaryCell = document.createElement("td");
    avgSalaryCell.textContent = this.name;
    tr.appendChild(avgSalaryCell);
};


function renderBody(){
    table.innerHTML = "";
    renderHeader();
    for(let i =0; i < employees.length; i++){
        employees[i].renderTableBody();
    }
}

renderBody();