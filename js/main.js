/*********************Object***********************/
const account = {accountName: "Oscar Jones", balance: 200, exitCode: 0,
getBalance(){
    alert(`Your current balance is:  ${this.balance} Kr`);
},
//Deposite function
deposite(){
    let depositeAmount = parseInt(prompt("How much would you like to deposite?")); 
    if (depositeAmount > 0){
        alert(`You have deposited: ${depositeAmount} Kr`);
        this.balance += depositeAmount;
        alert(`Your current balance is now: ${this.balance} Kr`);
        alert("Thank You for using our services!");
    }
    else if (depositeAmount <= 0){        
            alert("Please enter positive value/amount and try again. \nThank You!")
        }
    else{
        alert("Please enter digits. \nThank You!")
    } 
},//Deposite function end

//withdrawal function
withdrawal(){
    let withdrawalAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (withdrawalAmount >= 1 && withdrawalAmount <= this.balance){
        alert(`Your withdrawal amount is: ${withdrawalAmount} Kr`);
        this.balance -= withdrawalAmount;
        alert(`Your current balance is now: ${this.balance} Kr`);
        alert("Thank You for using our services!")
    }
    else if (withdrawalAmount <= 0){
        alert("Please enter positive value/amount and try again. \nThank You!")
    }
    else if (withdrawalAmount > this.balance){
        alert("You don't have enough amount in your account. Please check your balance and try again. \nThank You!")
    }
    else{
        alert("Please enter digits. \nThank You!")
    }
},
getAccountName(){
    alert(`Account holder is: ${this.accountName}`);
},//withdrawal function end

//account-error function
accountError(){
    alert("You entered a wrong key. Please choose from 1 to 5 and try again. \nThank You!");
},//account-error function end

//exit-account function
exitAccount(){
    if (confirm("Are you sure to logout?")){
        alert("Thank You for using our services!");        
        this.exitCode = 1;
    }
    else {
        this.exitCode = 0;
    }     
}//exit-account function end
};
/*********************Object end***********************/

/*********************show Menu function***********************/
function showMenu(){
    let menu = parseInt(prompt(`Welcome to banking services!
    Please select one of the following options.
    For balance inquiry, please enter 1.
    For desposite, please enter 2.
    For withdrawal, please enter 3.
    To check account holder, please enter 4. 
    For Exit, please enter 5.`));
    return menu;
}
/*********************show Menu function end***********************/

/*********************atm Function/to take inputs/choices from user***********************/
function atm(input){ //strict equality (===) operator to compare and checks the data types. 
    if (input===1){
        account.getBalance();
    }
    else if (input===2){
        account.deposite();
    }
    else if (input===3){
        account.withdrawal();
    }
    else if (input===4){
      account.getAccountName();  
    } else if (input===5) {
        account.exitAccount();
    }
    else {
     account.accountError();    
    }
}
/*********************atm Function/to take inputs/choices from user end***********************/

/******************while loop/show menu to the user**********************/
while (true) {
    const input = showMenu();
    atm(input);
    if (account.exitCode){
        break;
    } else {
        continue;
    }
}
/******************while loop/show menu to the user end**********************/







 






