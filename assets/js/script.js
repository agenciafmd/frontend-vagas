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

const curios1 = document.getElementById('curiosity1')
const curios2 = document.getElementById('curiosity2')
const curios3 = document.getElementById('curiosity3')
const btn2 = document.getElementById('btn2')
const btn1 = document.getElementById('btn1')
const btn3 = document.getElementById('btn3')

btn1.addEventListener('click', ()=>{
    curios1.style.display="block"
    curios2.style.display="none"
    curios3.style.display="none"
    btn1.style.backgroundColor = "#6495ed"
    btn2.style.backgroundColor = "#ffffff"
    btn3.style.backgroundColor = "#ffffff"
})

btn2.addEventListener('click', ()=>{
    curios1.style.display="none"
    curios2.style.display="block"
    curios3.style.display="none"
    btn2.style.backgroundColor = "#6495ed"
    btn1.style.backgroundColor = "#ffffff"
    btn3.style.backgroundColor = "#ffffff"
})

btn3.addEventListener('click', ()=>{
    curios1.style.display="none"
    curios2.style.display="none"
    curios3.style.display="block"
    btn3.style.backgroundColor = "#6495ed"
    btn1.style.backgroundColor = "#ffffff"
    btn2.style.backgroundColor = "#ffffff"
})

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