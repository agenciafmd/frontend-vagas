const imagesArray = ['PIA03149', 'PIA00342', 'as16-113-18339', 'PIA15985']

function displayImages() {
    for (let i = 0; i <= imagesArray.length; i++) {
        fetch(`https://images-assets.nasa.gov/image/${imagesArray[i]}/collection.json`)
            .then((response) => {
                return response.json()
            })
            .then((jsonParsed) => {
                createDiv(jsonParsed[0])
                console.log(jsonParsed[0])
            })
    }
}

displayImages()

function createDiv(img) {
    const section = document.getElementById('planets-images')
    const div = document.createElement('div')
    const image = document.createElement('img')

    image.src = img

    div.classList.add('planet')
    section.appendChild(div)
    div.appendChild(image)
}

const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (nameInput.value === '') {
        nameInput.style.borderColor = "#FF0000"
        return
    }

    if (emailInput.value === '' || isEmailValid(emailInput.value)) {
        emailInput.style.borderColor = "#FF0000"
        return
    }

    form.submit()
})

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    if (emailRegex.test(email)) {
        return false
    }

    return true
}