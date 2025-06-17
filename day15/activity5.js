//test 9;
// class Account {
//   // Private field
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   // Method to deposit money
//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Deposited ₹${amount}. New Balance: ₹${this.#balance}`);
//     } else {
//       console.log("Deposit amount must be positive.");
//     }
//   }

//   // Method to withdraw money
//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`Withdrew ₹${amount}. New Balance: ₹${this.#balance}`);
//     } else {
//       console.log("Invalid withdraw amount or insufficient balance.");
//     }
//   }

//   // Optional: method to check balance
//   checkBalance() {
//     return this.#balance;
//   }
// }

// // Usage
// const myAccount = new Account(1000);

// myAccount.deposit(500);      // Deposited ₹500. New Balance: ₹1500
// myAccount.withdraw(300);     // Withdrew ₹300. New Balance: ₹1200

// console.log(myAccount.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
//test 10;
class Account {
  // Private field
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}. Updated Balance: ₹${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. Updated Balance: ₹${this.#balance}`);
    } else {
      console.log("Invalid withdraw amount or insufficient balance.");
    }
  }

  // Method to check current balance
  checkBalance() {
    return this.#balance;
  }
}

// ✅ Create an instance of Account
const myAccount = new Account(1000);  // Starting balance ₹1000

// ✅ Deposit ₹500
myAccount.deposit(500);  // Balance: ₹1500

// ✅ Withdraw ₹200
myAccount.withdraw(200); // Balance: ₹1300

// ✅ Check and log final balance
console.log(`Final Balance: ₹${myAccount.checkBalance()}`);
