const bankAccount = {
    balance: 0,
    transactions: [],
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.transactions.push({ type: 'Deposit', amount, date: new Date().toLocaleString() });
        console.log(`Successfully deposited $${amount}.`);
      } else {
        console.log('Deposit amount must be greater than zero.');
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push({ type: 'Withdrawal', amount, date: new Date().toLocaleString() });
        console.log(`Successfully withdrew $${amount}.`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be greater than zero.');
      }
    },
  
    checkBalance() {
      console.log(`Your current balance is $${this.balance}.`);
    },
  
    viewTransactionHistory() {
      if (this.transactions.length === 0) {
        console.log('No transactions found.');
      } else {
        console.log('Transaction History:');
        this.transactions.forEach((transaction, index) => {
          console.log(`${index + 1}. ${transaction.type}: $${transaction.amount} on ${transaction.date}`);
        });
      }
    },
  };
  
  function interactWithBankAccount() {
    const actions = `Choose an action:\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. View Transaction History\n5. Exit`;
    let isRunning = true;
  
    while (isRunning) {
      const choice = prompt(actions);
  
      switch (choice) {
        case '1': {
          const amount = parseFloat(prompt('Enter the amount to deposit:'));
          if (!isNaN(amount)) {
            bankAccount.deposit(amount);
          } else {
            console.log('Invalid amount.');
          }
          break;
        }
        case '2': {
          const amount = parseFloat(prompt('Enter the amount to withdraw:'));
          if (!isNaN(amount)) {
            bankAccount.withdraw(amount);
          } else {
            console.log('Invalid amount.');
          }
          break;
        }
        case '3': {
          bankAccount.checkBalance();
          break;
        }
        case '4': {
          bankAccount.viewTransactionHistory();
          break;
        }
        case '5': {
          console.log('Exiting. Thank you for using our service!');
          isRunning = false;
          break;
        }
        default: {
          console.log('Invalid choice. Please try again.');
        }
      }
    }
  }
  
  interactWithBankAccount();
  