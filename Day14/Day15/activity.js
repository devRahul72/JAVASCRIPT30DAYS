//test 9;
//Create a class called account with a balance property and a deposit method.
//The deposit method should add the amount to the balance.
//Create an instance of the account class and deposit 1000 into it.
//Then, withdraw 1600 from the account and log the new balance to the console.

// class account {
//     #balance;
//     constructor(initialBalance) {
//        this.#balance=initialBalance;
//     }
//     deposit(amount) {
//         this.#balance+=amount;
//     }
//     withdraw(amount) {
//         if(this.#balance>=amount) {
//             this.#balance-=amount;
//         }
//         else {
//             console.log("Insufficient balance");
//         }
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }
// const account1 = new account(1000);
// account1.deposit(500);
// account1.withdraw(1600);
// console.log(account1.getBalance());

//test 10;
class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.#balance}`);
      } else {
        console.log("Insufficient balance or invalid amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account1=new Account(1000);
  account1.deposit(500);
  account1.withdraw(500);
  console.log(account1.getBalance());
  