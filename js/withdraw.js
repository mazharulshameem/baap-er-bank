// 1 add event listener add button ...

document.getElementById('btn-withdraw').addEventListener('click', function(){
 
  // 2 get the deposit amount from the deposit field 
  const withdrawField = document.getElementById('user-withdraw');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat (newWithdrawAmountString);
  // 3. field clear 
  withdrawField.value = '';
//  4. provide valid number 
  if (isNaN(newWithdrawAmount)){
    alert(' halar pola koto lagbe amount bosa ..?')
    return;
  }

// 5 get the deposit total amount....for non input use innerText
  const WithdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   // 6 balance total 
  const balanceTotalElement = document.getElementById ('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 
  // 7 if withdraw amount geetwr than total balance 
  if (newWithdrawAmount > previousBalanceTotal){
    alert('Tomar Baap er Bank eeto taka nai .!');
    return;
  }
  //  8 add number total withdraw 
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;
  // 9 calculate current total balance 
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  //  10 set the balance total 
  balanceTotalElement.innerText = newBalanceTotal;  
  
})