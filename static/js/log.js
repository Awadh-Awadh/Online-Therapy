let mail = document.querySelector('#log-email')
let password = document.querySelector('#log-password');
let submitButton = document.querySelector('.log-btn')

function validateLogIn(){
  if(mail.value === '' || password.value === ''){
    alert("please fill the all the field")
  }
  else{
    location.replace(".")

  }
}

submitButton.addEventListener('click',(e)=>{
  validateLogIn();
  e.preventDefault()
})