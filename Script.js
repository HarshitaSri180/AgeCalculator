let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
var resul=document.getElementById("result");


function calculateAge() {
    let birthDate = new Date(userInput.value);
  
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear(); 
    console.log(`the date and month and time is ${d1},${m1},${y1}`);
    
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    console.log(resul);
    // newDate

    let d3, m3, y3;
    
    y3 = y2 - y1;
    // y3=newDate-userInputYear

    if (m2 >= m1) {    
        // monthNewDAte>UserInputMOnth  not possible because it is 1 month
        m3 = m2 - m1;
                                                             
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
resul.innerHTML=`you are ${y3} years, ${m3} months, and ${d3} days` ;
    
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
const CurrentDate=new Date();
console.log(CurrentDate);
const Hours=CurrentDate.getHours();
const MInute=CurrentDate.getMinutes();
const Second=CurrentDate.getSeconds();
const Month=CurrentDate.getMonth()+1;



console.log(`the time is ${Hours}hour, ${MInute}Minute,${Second}Second,${Month}month`);
// let x=9;
// let res = ~x;
// let name="JOllhn";
// console.log(name);
