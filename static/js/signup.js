let firstName = document.getElementById('signup-fname')
let lastName = document.getElementById('signup-lname')
let email = document.getElementById('InputEmail')
let password = document.getElementById('InputPassword')
let errorMsg = document.querySelector('.error-msg')
let register = document.querySelector('.signup-reg')


function validateSignup(){
   if( firstName.value.length ===0){
    errorMsg.style.opacity = 1;
    errorMsg.innerText = "Please enter your first name"
     }
  else if( lastName.value.length ===0){
  errorMsg.style.opacity = 1;
  errorMsg.innerText = "Please enter your second name"
   }
   else if( email.value.length ===0){
    errorMsg.style.opacity = 1;
    errorMsg.innerText = "Email field cannot be empty"
     }
  
  else if (password.value.length<6 ){
    
    alert("password is too short")
   }
   else{
     location.replace("./conditions.html");
     errorMsg.style.opacity = 0;
   }

};

register.addEventListener('click',(e)=>{
  validateSignup();
  e.preventDefault()
})
