var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var schoolError = document.getElementById('schoolError');
var phoneError = document.getElementById('phoneError');
var checkBoxError = document.getElementById('checkBoxError');
var radioError = document.getElementById('radioError');

//validate name
function validateName() {
    let name = document.getElementById('name');

    if (name.value.length == 0) {
        nameError.innerHTML = 'Name is required cannot be left Empty';
        name.style.border = "1px solid red";
        return false;
    }

    if (!name.value.match(/^[a-zA-Z ]+$/)) {
        nameError.innerHTML = 'Name should conatin letters only';
        name.style.border = "1px solid red";
        name.style.outline = 'none';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check""></i>';
    name.style.border = "1px solid green";
    name.style.outline = 'none';
    return true;
}

//validate email
function validateEmail() {
    let email = document.getElementById('email');

    if (email.value.length == 0) {
        emailError.innerHTML = 'Email is required';
        email.style.border = "1px solid red";
        return false;
    }

    if (!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-za-z]*[\.][a-z]{3}$/)) {
        emailError.innerHTML = 'Email is invalid';
        email.style.border = "1px solid red";
        email.style.outline = 'none';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    email.style.border = "1px solid green";
    email.style.outline = 'none';
    return true;
}

//validate school
function validateSchool() {
    let school = document.getElementById('school');

    if (school.value.length == 0) {
        schoolError.innerHTML = 'School is required';
        school.style.border = "1px solid red";
        return false;
    }

    if (!school.value.match(/^[a-zA-Z.,' ]+$/)) {
        schoolError.innerHTML = 'School should conatin letters only';
        school.style.border = "1px solid red";
        school.style.outline = 'none';
        return false;
    }
    schoolError.innerHTML = '<i class="fa-solid fa-circle-check""></i>';
    school.style.border = "1px solid green";
    school.style.outline = 'none';
    return true;
}

//validate phone
function validatePhone() {
    let phone = document.getElementById('phone');
    var phoneLength = 10;
    console.log(phone.value.length)

    if (phone.value.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        phone.style.border = "1px solid red";
        return false;
    }
    if (!phone.value.match(/^[0-9 ]+$/)) {
        phoneError.innerHTML = 'Phone should conatin Numbers only';
        phone.style.border = "1px solid red";
        phone.style.outline = 'none';
        return false;
    }
    if (phone.value.length !== phoneLength) {
        phoneError.innerHTML = 'Phone should contain 10 numbers';
        phone.style.border = "1px solid red";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check""></i>';
    phone.style.border = "1px solid green";
    phone.style.outline = 'none';
    return true;
}

//validate radio buttons
function validateRadioButtons() {
    var radio = document.querySelectorAll('input[type="radio"]');
    console.log("hi");
    var atLeastOneChecked = false; //at least one cb is checked

    radio.forEach(radiobutton => {
        if (radiobutton.checked) {
            atLeastOneChecked = true;
        }
    })
    if (atLeastOneChecked) {
        return true;
    } else {
        radioError.innerHTML = 'Required';
        setTimeout(() => {
            radioError.innerHTML = '';
        }, 2000)
    }
}

//validate check boxes
function validateCheckboxes() {
    var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    var atLeastOneChecked = false; //at least one cb is checked

    checkBoxes.forEach(checkBox => {
        if (checkBox.checked) {
            atLeastOneChecked = true;
        }
    })
    if (atLeastOneChecked) {
        return true;
    } else {
        checkBoxError.innerHTML = 'Required';
        setTimeout(() => {
            checkBoxError.innerHTML = '';
        }, 2000)
    }
}

//validate Form
var form = document.getElementById('form');

function validateForm() {
    if (!validateName() || !validateEmail() || !validateSchool() || !validatePhone() ||
        !validateRadioButtons() || !validateCheckboxes()) {

    } else {
        form.submit();
    }
}
