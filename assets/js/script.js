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