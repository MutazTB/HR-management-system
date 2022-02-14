"Use strict";

var employees = [];
function Employee(employee_ID , name , department ,level , image){
    this.employee_ID = employee_ID ;
    this.name = name;
    this.department = department;
    this.level = level ;
    this.image = image ;
    employees.push(this);
}

let ghaziSamer = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior" , "url"  );
let lanaAli = new Employee(1001 , "Lana Ali" , "Finance" , "Senior" , "url" );
let tamaraAyoub = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , "url" );
let safiWaleed = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , "url" );
let omarZaid = new Employee(1003 , "Omar Zaid" , "Development" , "Senior" , "url" );
let ranaSaleh = new Employee(1003 , "Rana Saleh" , "Administration" , "Junior" , "url" );
let hadiAhmad = new Employee(1003 , "Hadi Ahmad" , "Finance" , "Mid-Senior" , "url" );

function Salary() {
    var max ;
    var min ;
    for( var i = 0 ; i<employees.length ; i++){  
        console.log(employees[i].level);      
        if(employees[i].level == "Senior"){
             min = 1500 ;
             max = 2000 ;
             employees[i].salary = Math.random() * (max - min) + min;
        }
        else if (employees[i].level == "Mid-Senior"){
             min = 1000 ;
             max = 1500 ;
             employees[i].salary = Math.random() * (max - min) + min;
        }
        else {
             min = 500 ;
             max = 1000 ;
             employees[i].salary = Math.random() * (max - min) + min;
        }
        }        
  }
Salary();
Employee.prototype.render = function(){
    document.write(`<h2 style = " margin-top : 30px ; margin-left : 200px ;color : red ; justify-content: center;">${this.name} : ${this.salary}</h2>`);
}

for( var i = 0 ; i < employees.length ; i++){
employees[i].render();
console.log(employees[i]);
}






