class BankAccount {
  constructor(balance = 0, accountType, transHist) {
    this.bal = balance
    this.type = accountType
    this.transHist = []
  }


  withdraw(num) {
    this.transHist.push(["withdraw:" + num])
    this.bal = this.bal - num
  }
  deposit(num) {
    this.transHist.push(["deposit:" + num])
    this.bal = this.bal + num
  }
  showBalance() {
    return this.bal
    }
}

let acc = new BankAccount (1000, 'savings')

acc.withdraw(30)
acc.deposit(50)
acc.deposit(356)
console.log(acc.type)
console.log(acc.transHist)
console.log(acc.showBalance())






