// 1 add event listener add button ...

document.getElementById('btn-deposit').addEventListener('click', function(){
 
  // 2 get the deposit amount from the deposit field 
  const depositField = document.getElementById('user-deposit');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat (newDepositAmountString);
//  3. field clear 
  depositField.value = '';
  // 4. provide valid number 

  if (isNaN(newDepositAmount)){
    alert(' Takar amount bosa hala..?')
    return;
  }

// 5. get the deposit total amount....for non input use innerText
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
//  6. add number set the total deposit 
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // 7. set the deposit total 
  depositTotalElement.innerText = currentDepositTotal;

  // 8. balance total 
  const balanceTotalElement = document.getElementById ('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // 9. calculate current total balance 
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //  10. set the balance total 
  balanceTotalElement.innerText = currentBalanceTotal;


})