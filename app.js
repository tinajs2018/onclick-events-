const password=document.querySelector("#password");
const togglePassword=document.querySelector('#togglePassword');
togglePassword.addEventListener('click',function(e){
const type=password.getAttribute('type')==='password' ? 'text':'password';
password.setAttribute('type',type);
this.classList.toggle('fa-eye-slash')
});

