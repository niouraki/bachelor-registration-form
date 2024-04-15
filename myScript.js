function submitForm(event) {
    // prevent page from refreshing
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value

    let emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    // check if there is a checked radio, if not assign null
    let checkedRadio = document.querySelector('input[name="timeRadio"]:checked') ? document.querySelector('input[name="timeRadio"]:checked').value : null
    let result = document.getElementById('result')
    let registrationForm = document.getElementById('registrationForm')
    let mainTitle = document.getElementById('mainTitle')

    if (firstName !== '' && surname !== '' && email !== '' && phoneNumber && checkedRadio !== null) {
        if (!emailValidator.test(email)) {
            result.innerText = 'Please use a valid email'
            result.classList.add("registration-fail")
        } else {
            result.innerText = 'Well done, a member of our team will get back to you.'
            registrationForm.style.display = 'none'
            mainTitle.style.display = "none"
            result.classList.add("registration-success")
            result.classList.remove("registration-fail")
        }
        
    } else {
        result.innerText = 'Please fill in all the fields above to register for the event.'
        result.classList.add("registration-fail")
    }
}