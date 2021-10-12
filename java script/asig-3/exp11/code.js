
class BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance)
    {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.getCurrentBalance= function()
        {
            document.write(this.accountBalance);
        };
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance, isSalary){
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
        this.withdraw =function(amount)
        {
            this.accountBalance -= amount;
            if(accountBalance == 0)
            return -1;
        };
    }

}

class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit){
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
        this.withdraw = function(amount)
        {
            this.accountBalance -= amount;
            if(accountBalance < 0)
            return -1;
        };
    }
}

var s1 = new SavingsAccount(50201024, "Changu Vadapavwala", 25000, 1);
s1.withdraw(5000);
s1.getCurrentBalance();
