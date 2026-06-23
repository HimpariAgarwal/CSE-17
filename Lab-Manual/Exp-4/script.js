function calculateResult(){


let subjects = document.getElementById("subjects").value;


let total = 0;



if(subjects<=0){

document.getElementById("result").innerHTML =
"Please enter valid subjects";

return;

}




for(let i=1;i<=subjects;i++){


let marks = Number(prompt(
"Enter marks of subject " + i
));


total = total + marks;


}




let average = total / subjects;


let grade;
let result;



if(average >= 75){

grade="A";
result="Pass";

}

else if(average >= 60){

grade="B";
result="Pass";

}

else if(average >= 40){

grade="C";
result="Pass";

}

else{

grade="F";
result="Fail";

}




document.getElementById("result").innerHTML =

`
<b>Total Marks:</b> ${total}<br>

<b>Average:</b> ${average.toFixed(2)}<br>

<b>Grade:</b> ${grade}<br>

<b>Status:</b> ${result}

`;

}