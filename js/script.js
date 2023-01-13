const body = document.querySelector('body');
let selectedMovie = 0;

const sliderReviews = document.querySelector('.slider-review');
const reviewBtnDiv = document.querySelector('.buttons-review');


let movieData = [];

const loadReview = () => {
    review = document.createElement('div')
    userDiv = document.createElement('div');
    userDataDiv = document.createElement('div');
    profileImg = document.createElement('img');
    profileLink = document.createElement('a');
    userInfo = document.createElement('div');
    spanUserName = document.createElement('span');
    spanDate = document.createElement('span');
    spanRate = document.createElement('span');
    pContent = document.createElement('p');
    review.classList.add('review');
    userDiv.classList.add("user");
    userDataDiv.classList.add("user-data");
    profileImg.classList.add("profile-img");
    profileLink.classList.add("profile-link");
    userInfo.classList.add("user-info");
    spanUserName.classList.add("username");
    spanDate.classList.add("date");
    spanRate.classList.add("rate");
    pContent.classList.add("review-content");
    sliderReviews.appendChild(review);
    sliderReviews.children[0].classList.add('current-review')
    review.appendChild(userDiv);
    userDiv.appendChild(userDataDiv);
    userDiv.appendChild(pContent);
    userDataDiv.appendChild(profileImg);
    userDataDiv.appendChild(userInfo);
    userInfo.appendChild(profileLink);
    profileLink.appendChild(spanUserName);
    userInfo.appendChild(spanDate);
    userInfo.appendChild(spanRate);
    userDiv.appendChild(pContent);
};





const mobileMenu = document.querySelector('.mobile-nav-btn');
const headerNav = document.querySelector('.mobile-nav');
headerNav.addEventListener('click', () => {
    headerNav.style.display = 'none';
})
mobileMenu.addEventListener('click', () => {
    headerNav.style.display = 'flex'
});
const listNav = document.querySelectorAll('.mobile-nav li a');
for (index of listNav) {
    index.addEventListener('click', (event) => {
        headerNav.style.display = 'none'
    });
};

const form = document.querySelector('.form');
const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const spanNameInput = document.querySelector('.name-msg');
const spanEmailInput = document.querySelector('.email-msg');

form.addEventListener('submit', (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!inputName.value) {
        inputName.classList.add('error');
        spanNameInput.classList.remove('off');
        return
    };
    if (inputName.classList.contains('error')) {
        inputName.classList.remove('error');
        spanNameInput.classList.add('off');
    };
    if (!inputEmail.value || inputEmail.value.search('@') === -1) {
        inputEmail.classList.add('error');
        spanEmailInput.classList.remove('off');
        return
    };
    if (inputEmail.classList.contains('error')) {
        inputEmail.classList.remove('error');
        spanEmailInput.classList.add('off');
    };

    Swal.fire({
        title: 'Sucesso',
        text: 'Sua inscrição foi realizada e em breve você comecará a receber nossas notícias.',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
    })
})


let movieList = []
const getMovieData = async () => {
    const response = await api.get('3/movie/now_playing?api_key=ebfa926d29440aa3d72079d299f2df42&language=en-US&page=1');
    const items = response.data.results;
    for (let i = 0; i < 6; i++) {
        movieList.push({
            id: items[i].id,
            original_title: items[i].original_title,
            overview: items[i].overview,
            vote_average: items[i].vote_average,
            poster: "http://image.tmdb.org/t/p/w342" + items[i].poster_path,
            background_path: "http://image.tmdb.org/t/p/w1280" + items[i].backdrop_path
        }
        )
    }
    getMovieReviews();
}

const cards = document.querySelectorAll('.card');

const getMovieReviews = async () => {
    try {
        for (let i = 0; i < movieList.length; i++) {
            const response = await api.get(`3/movie/${movieList[i].id}/reviews?api_key=ebfa926d29440aa3d72079d299f2df42&language=en-US&page=1`);
            movieData.push({
                data: movieList[i],
                comments: response.data.results,
            });
        }
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundImage = `url(${movieData[i].data.poster})`;
            cards[i].addEventListener('click', () => {
                selectedMovie = i;
                fillReview(movieData);
            })
        }
        createSlide(movieData);
        fillReview(movieData);
    } catch (erro) {
        console.log(erro.message);
    }
}

getMovieData();




const slideBackground = document.querySelectorAll('.slide');
const slideTitle = document.querySelectorAll('.content h1');
const content = document.querySelectorAll('.content p')
const createSlide = (movieData) => {
    for (let i = 0; i < movieData.length; i++) {
        slideBackground[i].style.background = `url(${movieData[i].data.background_path}) no-repeat center center/cover`
        slideTitle[i].textContent = movieData[i].data.original_title;
        content[i].textContent = movieData[i].data.overview;

    }
}

const profileLinks = document.querySelectorAll('.profile-link');
const username = document.querySelectorAll('.username');
const spanDate = document.querySelectorAll('.date');
const spanRating = document.querySelectorAll('.rating');
const reviewContent = document.querySelectorAll('.review-content');
const reviewContainerTitle = document.querySelector('.container-reviwes h2');

const fillReview = (movieData) => {
    reviewContainerTitle.textContent = `${movieData[selectedMovie].data.original_title}'s Reviews`
    clearReviews();
    try {
        for (let i = 0; i < 4; i++) {
            let { author, content, created_at, author_details, url } = movieData[selectedMovie].comments[i];
            profileLinks[i].href = url;
            username[i].textContent = author;
            spanDate[i].textContent = new Date(created_at).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
            });
            spanRating[i].textContent = `Rating: ${author_details.rating.toFixed(2)}`;
            reviewContent[i].textContent = content;
        }
    } catch (erro) {
        console.log(erro);
    }
}

const clearReviews = () => {
    for (let i = 0; i < 4; i++) {
        profileLinks[i].href = '';
        username[i].textContent = '';
        spanDate[i].textContent = '';
        spanRating[i].textContent = '';
        reviewContent[i].textContent = 'Não existem comentários para o filme selecionado.';
    }
}


