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

Employee.prototype.getSalary = function() {
    var max ;
    var min ;
             
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

        //  for( var i = 0 ; i < employees.length ; i++){     
            //employees[i].getId();   
        //     employees[i].getSalary();
            //renderAll();
        //     console.log(employees[i].getSalary());
        // }


        function renderBody(){
            table.innerHTML = "";
            renderHeader();
            for(let i =0; i < employees.length; i++){
                employees[i].getSalary();
                console.log(employees[i].salary);
            }   
            renderTableBody()
        }
    let totalAdminSalary = 0 ;
    let avgAdminSalary = 0 ;
    let totalFinanceSalary = 0 ;
    let avgFinanceSalary = 0 ;
    let totalMarketingSalary = 0 ;
    let avgMarketingSalary = 0 ;
    let totalDevelopmentSalary = 0 ;
    let avgDevelopmentSalary = 0 ;
    let adminNum = 0 ;
    let financeNum = 0 ;
    let marketingNum = 0 ;
    let developmentNum = 0 ;

    
 function renderTableBody(){          
    for(let i = 0 ; i < employees.length ; i++){
        employees[i].getSalary();
        console.log(employees[i].salary);
        if(employees[i].department == "Administration"){
            totalAdminSalary += employees[i].salary ;
            adminNum += 1 ;            
        }
        else if(employees[i].department == "Finance"){
            totalFinanceSalary += employees[i].salary ;
            financeNum += 1 ;            
        }
        else if(employees[i].department == "Marketing"){
            totalMarketingSalary += employees[i].salary ;
            marketingNum += 1 ;            
        }
        else {
            totalDevelopmentSalary += employees[i].salary ;
            developmentNum += 1 ;                  
        }
         
    }
    let departmentCell = document.createElement("tr"); 
    let administrationtdCell = document.createElement("td");   
    administrationtdCell.textContent= "Administration" ;
    departmentCell.appendChild(administrationtdCell);        
    let numEmployeeCell = document.createElement("td");
    numEmployeeCell.textContent= adminNum;
    departmentCell.appendChild(numEmployeeCell);
    table.appendChild(departmentCell); 
    let sumSalary = totalAdminSalary + totalFinanceSalary + totalMarketingSalary + totalDevelopmentSalary ;    

    // Finance
    let financeCell = document.createElement("tr");    
    let financetrCell = document.createElement("td");
    financetrCell.textContent= "Finance";   
    financeCell.appendChild(financetrCell);
    let financetdCell = document.createElement("td");
    financetdCell.textContent= financeNum;
    financeCell.appendChild(financetdCell);
    table.appendChild(financeCell);


    // Marketing
    let marketingCell = document.createElement("tr");
    let marketingtrCell = document.createElement("td");    
    marketingtrCell.textContent= "Marketing" ;
    marketingCell.appendChild(marketingtrCell);
    let marketingtdCell = document.createElement("td");
    marketingtdCell.textContent= marketingNum;
    marketingCell.appendChild(marketingtdCell);
    table.appendChild(marketingCell);

    //Devlopment
    let developmentCell = document.createElement("tr"); 
    let developmenttrCell = document.createElement("td");   
    developmenttrCell.textContent= "Development" ;
    developmentCell.appendChild(developmenttrCell);
    let developmenttdCell = document.createElement("td");
    developmenttdCell.textContent= developmentNum;
    developmentCell.appendChild(developmenttdCell);
    table.appendChild(developmentCell);


    avgAdminSalary = totalAdminSalary/adminNum ;
    avgFinanceSalary = totalFinanceSalary/financeNum ;
    avgMarketingSalary = totalMarketingSalary/marketingNum ;
    avgDevelopmentSalary = totalDevelopmentSalary/developmentNum ;
    //Salary
    let totalAdminSalaryCell = document.createElement("td");
    totalAdminSalaryCell.textContent= totalAdminSalary;
    departmentCell.appendChild(totalAdminSalaryCell);
    //avg
    let avgAdminSalaryCell = document.createElement("td");
    avgAdminSalaryCell.textContent= avgAdminSalary;
    departmentCell.appendChild(avgAdminSalaryCell);
    //salary
    let totalFinanceSalaryCell = document.createElement("td");
    totalFinanceSalaryCell.textContent= totalFinanceSalary;
    financeCell.appendChild(totalFinanceSalaryCell);
    //avg
    let avgFinanceSalaryCell = document.createElement("td");
    avgFinanceSalaryCell.textContent= avgFinanceSalary;
    financeCell.appendChild(avgFinanceSalaryCell);
    //salary
    let totalMarketingSalaryCell = document.createElement("td");
    totalMarketingSalaryCell.textContent= totalMarketingSalary;
    marketingCell.appendChild(totalMarketingSalaryCell);
    //avg
    let avgMarketingSalaryCell = document.createElement("td");
    avgMarketingSalaryCell.textContent= avgMarketingSalary;
    marketingCell.appendChild(avgMarketingSalaryCell);    
    //salary
    let totalDevelopmentSalaryCell = document.createElement("td");
    totalDevelopmentSalaryCell.textContent= totalDevelopmentSalary;
    developmentCell.appendChild(totalDevelopmentSalaryCell);
    //avg
    let avgDevelopmentSalaryCell = document.createElement("td");
    avgDevelopmentSalaryCell.textContent= avgDevelopmentSalary;
    developmentCell.appendChild(avgDevelopmentSalaryCell);

    let totalCell = document.createElement("tr");
    let totaltdCell = document.createElement("td");    
    totaltdCell.textContent= "Total" ;
    totalCell.appendChild(totaltdCell);
    // # of Employee
    let numOfEmployeeCell = document.createElement("td");
    numOfEmployeeCell.textContent= employees.length;
    totalCell.appendChild(numOfEmployeeCell);
    //total salary
    let totalSalaryCell = document.createElement("td");
    totalSalaryCell.textContent= sumSalary;
    totalCell.appendChild(totalSalaryCell);
    // total of avg salary
    let sumAVGSalary =  avgAdminSalary + avgFinanceSalary + avgMarketingSalary + avgDevelopmentSalary;
    let totalAVGSalaryCell = document.createElement("td");
    totalAVGSalaryCell.textContent= sumAVGSalary;
    totalCell.appendChild(totalAVGSalaryCell);
    table.appendChild(totalCell);

    // let totalSalaryCell = document.createElement("td");
    // totalSalaryCell.textContent = this.salary;
    // tr.appendChild(totalSalaryCell);

    // let avgSalaryCell = document.createElement("td");
    // avgSalaryCell.textContent = this.salary;
    // tr.appendChild(avgSalaryCell);
};
renderBody();