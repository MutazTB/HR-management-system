"Use strict";

var employees = [];
function Employee( name , department ,level , image){
    this.employee_ID = 1000  ;
    this.name = name;
    this.department = department;
    this.level = level ;
    this.image = image ;
    this.salary = 0 ;
    employees.push(this);
}

let name = document.getElementById("#fullname");
let department = document.getElementById("Department");
let level = document.getElementsByName("Level");
let salary = document.getElementById("#salary");

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
        console.log(employees[i].level);      
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


        Employee.prototype.getId = function () {
            for( var i = 0 ; i < employees.length ; i++){
                employees[i].employee_ID += 1;
            }        
        }       


Employee.prototype.render = function(){
    
    //document.write(`<h2 style = " margin-top : 30px ; margin-left : 200px ;color : red ; justify-content: center;">${this.name} : ${this.salary}</h2>`);

    let cardinfoooo = document.getElementById("mycardinfo");
    let cardDiv =document.createElement("div");
    cardDiv.className = "card";
    cardinfoooo.appendChild(cardDiv);
    let cardimgdiv =document.createElement("div");
    cardimgdiv.className = "card-img";
    cardDiv.appendChild(cardimgdiv);
    let cardimg = document.createElement("img");
    cardimg.src = "assets/Employee.jpg";
    cardimg.className = "img-card";
    cardimgdiv.appendChild(cardimg);
    let cardinfo =document.createElement("div");
    cardinfo.className = "card-info";
    cardDiv.appendChild(cardinfo);
    let cardpre =document.createElement("pre");
    cardpre.className = "about-me";
    cardinfo.appendChild(cardpre);
    let b1 = document.createElement("p");
    b1.textContent = "Name: " + this.name +" - ID: " +this.employee_ID;
    cardpre.appendChild(b1);
    let br = document.createElement("br");    
    let b2 = document.createElement("p");
    b2.textContent = "Department: " + this.department +"-Level: " + this.level  ;
    cardpre.appendChild(b2);
    //    
}

for( var i = 0 ; i < employees.length ; i++){     
    employees[i].getId();   
    employees[i].getSalary();
    employees[i].render();
    console.log(employees[i]);
}
let form = document.getElementById("dataForm");
form.addEventListener("submit", handelSubmit);

function handelSubmit(event){
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.Department.value;
    let level = event.target.Level.value;
    let image = event.target.image.value;
    //
    let newEmployee = new Employee(name, department , level , image);
    newEmployee.getId();
    newEmployee.render();    
    form.reset();
}





