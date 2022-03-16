const bank = owner => {
    balance = 0
    return {
        deposit: amount => {
            balance = balance + amount
            return balance
        },
        widthdraw: amount => {
            balance = balance - amount
            return balance
        }
    }
}

const mofijBank = bank('mofij')
console.log(mofijBank.deposit(350));
console.log(mofijBank.deposit(750));
console.log(mofijBank.widthdraw(100));