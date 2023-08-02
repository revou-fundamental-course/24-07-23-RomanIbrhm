// Baru bangen belajar JS pas week 2 day 1 di kelas sefc jadi gapaham per-JS-an

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const destination = document.getElementById('dstination')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Username is required')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email cannot be blank');
    } else if(!isEmail(emailvalue)) {
        messages.push('Email cannot be blank');
    }
    
    if (destination.value === '' || destination.value == null) {
        messages.push('Destination cannot be blank');
    }

    if (messages.length > 0 )
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
})

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}