const loginOpt = document.getElementById('loginOpt');
const RegisterOpt = document.getElementById('SignUpOpt');
const loginDiv = document.getElementById('signIn');
const SignUpDiv = document.getElementById('signUp');

loginOpt.addEventListener('click',()=>{
 loginDiv.style.display = 'flex'
 SignUpDiv.style.display = 'none'
})

RegisterOpt.addEventListener('click',()=>{
loginDiv.style.display = 'none'
SignUpDiv.style.display = 'flex'
})
