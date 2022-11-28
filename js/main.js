let menu = prompt("Welcome! \nPlease select one of the following options.\n For balance inquiry enter 1 \n For desposite enter 2 \n For withdrawal enter 3 \n To check account holder enter 4 \n For Exit enter 5");
function atm(){
    console.log(menu);
}
atm();

let account = {accountName: "Oscar Jones", balance: 200,
getBalance(){
    alert("Your current balance is: " +this.balance + " Kr");
    alert("Thank You for using our services!");
},
deposite(){
    let depositeAmount = parseInt(prompt("How much would you like to deposite?")); 
    if (depositeAmount > 1){
        account.deposite = depositeAmount;
        alert("You have deposited: " +this.deposite + " Kr");
        this.balance += depositeAmount;
        alert("Your current balance is now: " +this.balance + " Kr");
        alert("Thank You for using our services!");
    }
    else if (depositeAmount > 1){
        this.deposite = depositeAmount;
        alert("You have deposited: " +this.deposite + " Kr");
        this.balance += depositeAmount;
        alert("Your current balance is now: " +this.balance + " Kr");
        alert("Thank You for using our services!");
    }
    else if (depositeAmount <= 0){        
            alert("Please enter positive value/amount. \nThank You!")
        }
    else{
        alert("Please enter digits. \nThank You!")
    } 
},
withdrawal(){
    let withdrawalAmount = parseInt(prompt("How much would you like to withdraw?"));
    if (withdrawalAmount > 1 && withdrawalAmount <= this.balance){
        this.withdrawal = withdrawalAmount;
        alert("Your withdrawal amount is: " +this.withdrawal + " Kr");
        this.balance -= withdrawalAmount;
        alert("Your current balance is now: " +this.balance + " Kr");
        alert("Thank You for using our services!")
    }
    else if (withdrawalAmount <= 0){
        alert("Please enter positive value/amount. \nThank You!")
    }
    else if (withdrawalAmount > this.balance){
        alert("You don't have enough amount in your account. Please check your balance and try again. \nThank You!")
    }
    else{
        alert("Please enter digits. \nThank You!")
    }
},
getAccountName(){
    alert("Account holder is: " +this.accountName);
},
accountError(){
    alert("You entered a wrong key. Please choose from 1 to 5 and try again. \nThank You!");
},
exitAccount(){
    alert("Are you sure to logout?");
    alert("Thank You for using our services!");
}
};
if (menu==1){
    account.getBalance();
}
else if (menu==2){
    account.deposite();
}
else if (menu==3){
    account.withdrawal();
}
else if (menu==4){
  account.getAccountName();  
}
else if (menu==5){
    account.exitAccount();    
}
else {
 account.accountError();    
}









 






