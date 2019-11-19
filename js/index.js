let button = document.getElementById(`calculate`);
const annlIntrst = 0.05;

function calculateLoan()
{
    
    let loanAmnt = parseInt(document.getElementById(`loanAmount`).value); //1
    let yearNmbr = parseInt(document.getElementById(`yearNumber`).value);
    let loanTermInMnth = yearNmbr*12; //2
    let mnthlyIntrst = annlIntrst/12; //3
    
    let mnthlyIntrst1 = 1+mnthlyIntrst; //4
    let raise = Math.pow(mnthlyIntrst1,-loanTermInMnth); //5
    let subtrct = 1-raise; //6
    let usrMnthlyIntrst = loanAmnt*mnthlyIntrst; //7
    let usrMnthlyInstll = usrMnthlyIntrst/subtrct; //8
    let usrMnthlyInstll1 = Number(usrMnthlyInstll).toFixed(2);
    let table = document.getElementsByTagName(`table`)[0];
    let newRow = table.insertRow(table.rows.length/2+1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = loanAmnt;
    cell2.innerHTML = mnthlyIntrst;
    cell3.innerHTML = yearNmbr;
    cell4.innerHTML = usrMnthlyInstll;

    let box = document.getElementById(`answer`);
    box.innerHTML = `Your Monthly Payment ${usrMnthlyInstll}<br>
    Loan Amount ${loanAmnt} <br> 
    Loan Term ${loanTermInMnth} in Months <br>
    Monthly Interest ${mnthlyIntrst} <br>
    Add 1 ${mnthlyIntrst1}<br>
    Raise ${raise} <br>
    Substract ${subtrct} <br>
    Multiply ${usrMnthlyIntrst}<br>
    User Monthly Installment ${usrMnthlyInstll1}`;
    
}



button.addEventListener(`click`,calculateLoan);
// function writeOutputToDocument( result ) {
//   document.getElementById(`output`).innerHTML += `<th>${result}</th>`;
// }




