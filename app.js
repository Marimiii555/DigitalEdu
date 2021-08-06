const signUpBtn = document.getElementById('signPage');
const signInBtn = document.getElementById('signinTrget')
const loginBtn = document.getElementById('login')



signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.signin').style.display = "none"
    document.querySelector('.signup').style.display = 'flex'
})

signInBtn.addEventListener('click', () => {
    document.querySelector('.signin').style.display = "flex"
    document.querySelector('.signup').style.display = 'none'
});


function validation(e) {
    validationUsername()
    validationPassword()
    if (validationUsername == true) {
        alert('gamovid')
    }
}

// loginBtn.addEventListener('click', (e) => {
//     e.preventDefault()
// })

let validationUsername = () => {
    if (userName.value === '' || userName.value == null) {
        userName.style.border = "1px solid red";
        mailError.style.display = 'block'
        return false
    } else if (userName.value.length >= 1) {
        userName.style.border = "1px solid silver";
        mailError.style.display = "none";
        return true

    }
}

let validationPassword = () => {
    if (password.value.length < 8) {
        password.style.border = "1px solid red"
        passError.style.display = 'block'
        password.focus()
        return false
    } else if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        passError.style.display = "none";
        return true
    }
}
















// const form1 = document.forms['form1']
let userName = document.forms['form1']['username'];
let password = document.forms['form1']['password']

let mailError = document.getElementById('errorMail')
let passError = document.getElementById('errorPass');

// userName.addEventListener('textInPut', userVerify);
// password.addEventListener('input', passVerify);



// function userVerify() {
//     if (userName.value.length >= 1) {
//         userName.style.border = "1px solid silver";
//         mailError.style.display = "none";
//         return true;
//     }
// }

// function passVerify() {
//     if (password.value.length >= 8) {
//         password.style.border = "1px solid silver";
//         passError.style.display = "none";
//         return true;
//     }
// }