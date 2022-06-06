document.querySelector('#fname').addEventListener('keypress', validateName)
document.querySelector('#email').addEventListener('keypress', validateEmail)

const me = document.querySelector('#me')

me.addEventListener('click',clickButton)

function clickButton(e){
    const name = document.querySelector('#fname');
    e.preventDefault();
  
} 


function validateName(){
    const name = document.querySelector('#fname');
    const re = /^([a-zA-z]+)(\s{1}[a-zA-z]+)$/;
    // /^ ([a-zA-z]+)(\s{1}[a-zA-z]+)$/
    // /^\(?\+?\d{3}\)? [-.]?\d{10}$/
    if(re.test(name.value)){
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
    }
    else{
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
    }
}

function validateEmail(){
    const email = document.querySelector('#email');
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // /^ ([a-zA-z]+)(\s{1}[a-zA-z]+)$/
    // /^\(?\+?\d{3}\)? [-.]?\d{10}$/
    if(re.test(email.value)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }
}