console.log("Challenge #4");

const bills = [275, 40, 430]

bills.forEach(bills => {
    const tip = bills >=50 && bills <= 300 ? bills * 0.5 : bills * 0.2;
    const total = bills + tip;
    console.log(`The bill was ${bills}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
})
