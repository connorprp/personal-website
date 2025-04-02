let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let currencyUnits = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.10],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
  changeDue.innerHTML = ""; // Reset display
  const cashValue = parseFloat(cash.value);
  
  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  
  if (cashValue === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }

  const result = getChange(cashValue - price, cid);

  if (result.status === "INSUFFICIENT_FUNDS") {
    changeDue.innerText = `Status: ${result.status}`;
  } else {
    changeDue.innerText = `Status: ${result.status}\n${formatChange(result.change)}`;
  }
});

const getChange = (changeDue, cashDrawer) => {
  let remainingChange = Math.round(changeDue * 100); // in cents
  let totalCid = parseFloat(cashDrawer.reduce((sum, [_, amt]) => sum + amt, 0).toFixed(2));

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  
  if (totalCid === changeDue) {
    return {
      status: "CLOSED",
      change: cashDrawer.filter(([_, amount]) => amount > 0).reverse()
    };
  }

  let changeArray = [];
  let drawer = cashDrawer.map(([unit, amt]) => [unit, Math.round(amt * 100)]); 

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const [unit, value] = currencyUnits[i];
    const unitValue = Math.round(value * 100);
    let unitInDrawer = drawer[i][1];
    let amountTaken = 0;

    while (remainingChange >= unitValue && unitInDrawer > 0) {
      remainingChange = parseFloat((remainingChange - unitValue).toFixed(2));
      unitInDrawer -= unitValue;
      amountTaken += unitValue;
    }

    if (amountTaken > 0) {
      changeArray.push([unit, amountTaken / 100]); 
    }
  }

  if (remainingChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
};

const formatChange = changeArr =>
  changeArr
    
    .filter(([_, amt]) => amt > 0)
    .map(([unit, amt]) => `${unit}: \$${amt.toFixed(2)}`)
    .join("\n");