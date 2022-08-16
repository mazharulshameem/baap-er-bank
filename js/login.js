document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  if(email === 'baaper@bank.com' && password === 'baapertaka'){
    window.location.href = 'bank.html';
  }else{
    alert('password vule gecho ,tahole tw taka pabe na ..!');
  }

})
