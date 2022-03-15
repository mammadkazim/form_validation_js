const form = document.createElement('form');
const nameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmPasswordInput = document.createElement('input');
const submitButton = document.createElement('button');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');

const alertMessage  = document.createElement('p');

document.body.append(form);
form.append(label1,nameInput,label2,passwordInput,label3,confirmPasswordInput,submitButton);

nameInput.setAttribute('type','text');
nameInput.setAttribute('id','name-input');
nameInput.setAttribute('placeholder','name');

passwordInput.setAttribute('type','text');
passwordInput.setAttribute('id','password-input');
passwordInput.setAttribute('placeholder','password');

confirmPasswordInput.setAttribute('type','text');
confirmPasswordInput.setAttribute('id','confirm-password-input');
confirmPasswordInput.setAttribute('placeholder','confirm password');

submitButton.setAttribute('type','submit');
submitButton.innerHTML = 'submit';

label1.setAttribute('for','name-input');
label2.setAttribute('for','password-input');
label3.setAttribute('for','confirm-password-input');

label1.innerHTML = 'Name';
label2.innerHTML = 'Password';
label3.innerHTML = 'Confirm password';

nameInput.style.display = "block";
passwordInput.style.display = "block";
confirmPasswordInput.style.display = "block";

label1.style.cssText = "display: block; margin-top: 20px";
label2.style.cssText = "display: block; margin-top: 20px";
label3.style.cssText = "display: block; margin-top: 20px";
submitButton.style.cssText = "margin-top: 20px";
alertMessage.style.cssText="margin:0;font-size:12px;color:red"

form.addEventListener('submit',e=>e.preventDefault())

nameInput.addEventListener('blur',()=>{
    if(nameInput.value.length < 6){
        alertMessage.innerHTML = '!name is not valid';
        nameInput.style.border = "2px solid red"
        nameInput.after(alertMessage)
    }
})

form.addEventListener('submit',()=>{
    if(nameInput.value.length < 6){
        alertMessage.innerHTML = '!name is not valid';
        nameInput.style.border = "2px solid red"
        nameInput.after(alertMessage)
    }
    if(passwordInput.value.length < 6){
        alertMessage.innerHTML = '!password is not valid';
        passwordInput.style.border = "2px solid red"
        passwordInput.after(alertMessage)
    }
    if(confirmPasswordInput.value !== passwordInput.value){
        alertMessage.innerHTML = '!passwords are not equal';
        confirmPasswordInput.style.border = "2px solid red"
        confirmPasswordInput.after(alertMessage)
    }
})

passwordInput.addEventListener('blur',()=>{
    if(passwordInput.value.length < 6){
        alertMessage.innerHTML = '!password is not valid';
        passwordInput.style.border = "2px solid red"
        passwordInput.after(alertMessage)
    }
})

confirmPasswordInput.addEventListener('blur',()=>{
    if(confirmPasswordInput.value !== passwordInput.value){
        alertMessage.innerHTML = '!passwords are not equal';
        confirmPasswordInput.style.border = "2px solid red"
        confirmPasswordInput.after(alertMessage)
    }
})

