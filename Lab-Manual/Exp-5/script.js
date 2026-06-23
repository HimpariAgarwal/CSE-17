let employees=[];


function addEmployee(){

let emp={
name:name.value,
id:id.value,
salary:Number(salary.value),
department:dept.value
};


if(emp.name==""||emp.id==""||emp.salary==0||emp.department==""){
alert("Fill all details");
return;
}


employees.push(emp);

alert("Employee Added");


name.value="";
id.value="";
salary.value="";
dept.value="";

}



function display(){

let data="<h3>Employee List</h3>";


employees.forEach(e=>{

data+=`
${e.name} | ${e.id} | ₹${e.salary} | ${e.department}<br>
`;

});


output.innerHTML=data;

}





function filterSalary(){

let data=employees.filter(e=>e.salary>50000);


output.innerHTML=
"<h3>Salary Above 50000</h3>"+
data.map(e=>e.name+" ₹"+e.salary).join("<br>");

}





function totalSalary(){

let total=employees.reduce(
(sum,e)=>sum+e.salary,0
);


output.innerHTML=`

<div class="result">

<h3>Total Salary</h3>

<p>₹${total}</p>

</div>

`;

}





function avgSalary(){

if(employees.length==0){

output.innerHTML="No Employee Data";
return;

}


let total=employees.reduce(
(sum,e)=>sum+e.salary,0
);


let avg=total/employees.length;


output.innerHTML=`

<div class="result">

<h3>Average Salary</h3>

<p>₹${avg.toFixed(2)}</p>

</div>

`;

}





function deptCount(){

let d=prompt("Enter Department Name");


let count=employees.filter(
e=>e.department==d
).length;


output.innerHTML=

`

<div class="result">

<h3>${d} Department</h3>

<p>${count} Employees</p>

</div>

`;

}