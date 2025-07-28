document.getElementById('free-trial-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let isValid = true

    const inputs = ['firstName', 'lastName', 'email', 'password']

    inputs.forEach(id => {
        const field = document.getElementById(id)
        const error = document.getElementById(id + "Error")
        const inputBox = field.parentElement

        if(field.value.trim() === '') {
            inputBox.classList.add('error')
            error.style.display = 'block'
            isValid = false
        }else{
            inputBox.classList.remove('error')
            error.style.display = 'none'
        }
    })

    if(isValid) {
        alert('Form submitted successfully!')
    }
})


console.log(id, error);
