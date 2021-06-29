let submit = document.querySelector('.submit-btn');
let people = document.querySelector('#Fname');
let errorN = document.querySelector('.errorN');
let errorM = document.querySelector('.errorM');
let errorP= document.querySelector('.errorP');
let mail = document.querySelector('#mail');
let phone = document.querySelector('#phone');
let homeRedirect = document.querySelector('.btn-home');



function validate(){
  if(people.value.length < 1){
    errorN.style.opacity = 1
    errorN.innerText = "This field cannot be empty"
  }
 else if(mail.value.length<3 ){
    errorM.style.opacity = 1
    errorM.innerText = "This field cannot be empty"
  }
  else if(phone.value.length < 10 || phone.value.length >10){
    errorP.style.opacity = 1
    errorP.innerText = "Enter correct phone number"
  }
  else{
    errorM.style.opacity=0
    errorN.style.opacity=0
    errorP.style.opacity=0
    location.replace("./send.html")
    }
  
}
submit.addEventListener('click',(e)=>{
  validate()
  e.preventDefault();
  
})

