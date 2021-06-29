let submit = document.querySelector('.submit-btn');
let people = document.querySelector('#Fname').value;
let error = document.querySelector('.error');
let phone = document.querySelector('#phone').value;
let mail = document.querySelector('#mail').value;


function validate(){
  if(mail ==''){
    error.innerText = "this field cannot be empty";
    error.style.opacity = 1
  }
  
}
submit.addEventListener('click',(e)=>{
  validate()
  e.preventDefault();
})