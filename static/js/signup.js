let firstName = document.getElementById('signup-fname')
let lastName = document.getElementById('signup-lname')
let email = document.getElementById('InputEmail')
let password = document.getElementById('InputPassword')
let errorMsg = document.querySelector('.error-msg')
let register = document.querySelector('.signup-reg')


function validateSignup(){
   if(firstName.value ===' '|| lastName.value === ' ' || email.value === ' ' || password.value === ''){
  errorMsg.style.opacity = 1;
  errorMsg.innerText = "Fill the input fields"
   }
   if (password.value.length<6 ){
    // errorMsg.sty.opacity = 1;
    alert("password is too short")
   }
   else{
     location.replace("./index.html");
     errorMsg.style.opacity = 0;
   }

};

register.addEventListener('click',(e)=>{
  validateSignup();
  e.preventDefault()
})
