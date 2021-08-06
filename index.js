const user = document.getElementById('username');
const userErr = document.getElementById('errorMail')
const passErr = document.getElementById('errorPass')
const pass = document.getElementById('password');
user.addEventListener('keyup', () => {
    if (user.value.length < 2 || user.value == "") {
        user.style.border = "1px solid red";
        return false
    } else {
        user.style.border = "1px solid green"
        userErr.style.display = 'none'
    }

})

pass.addEventListener('keyup', () => {
    if (pass.value.length < 8) {
        pass.style.border = "1px solid red"
        passErr.style.display = 'block'
        pass.focus()
        return false
    } else {
        pass.style.border = "1px solid green"
        passErr.style.display = 'none'
    }

})

function validate() {
    if (user.value < 2) {
        userErr.style.display = 'block'
        return false
    } else if (pass.value < 8) {
        passErr.style.display = 'block'
        return false
    } else {
        return true
    }
}

const signUpPage = document.getElementById("signUpPage");
signUpPage.addEventListener('click', () => {
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.signup').style.display = 'flex'
})

const signInPage = document.getElementById("signinTrget");
signInPage.addEventListener('click', () => {
    document.querySelector('.signin').style.display = 'flex';
    document.querySelector('.signup').style.display = 'none'
})



// SignUp 


const firstName = document.getElementById('firsName');
firstName.addEventListener('keyup', () => {
    if (firstName.value.length < 2) {
        firstName.style.border = "1px solid red"
        return false
    } else {
        firstName.style.border = "1px solid green"
    }
});

const lastName = document.getElementById('lastName')
lastName.addEventListener('keyup', () => {
    if (lastName.value.length < 2) {
        lastName.style.border = "1px solid red"
        return false
    } else {
        lastName.style.border = "1px solid green"
    }
});

const userName = document.getElementById('uName');
userName.addEventListener('keyup', () => {
    if (userName.value === "" || userName.value.length < 6) {
        userName.style.border = "1px solid red"
        return false
    } else {
        userName.style.border = "1px solid green"
    }
})

const userMail = document.getElementById('signUpMail');
userMail.addEventListener('keyup', () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail.value)) {
        userMail.style.border = "1px solid green"
        return true;
    } else {
        userMail.style.border = "1px solid red"

    }
})


const signUpPass = document.getElementById("signUpPass");
const confPass = document.getElementById('confPass');

signUpPass.addEventListener('keyup', () => {
    if (signUpPass.value.length < 8) {
        signUpPass.style.border = "1px solid red"
        signUpPass.focus()
        return false
    } else {
        signUpPass.style.border = "1px solid green"
    }
})

// confPass.addEventListener('keyup', () => {
//     if (signUpPass !== confPass) {
//         confPass.style.border = "1px solid red"
//         return false
//     } else {
//         confPass.style.border = "1px solid green"
//     }
// })
let passchek = document.querySelector(".signUpPassErr")
let passchek2 = document.querySelector('.passchek')

function validate2() {
    if (signUpPass.value.length < 8) {
        passchek.style.display = 'block'
        return false
    } else if (signUpPass.value !== confPass.value) {
        passchek2.style.display = 'block'
        confPass.style.border = "1px solid red"
        return false
    } else {
        return true
    }
}