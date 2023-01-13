const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
let selectedMovie = 0;
let movieData = [];
let movieList = [];

const getMovieData = async () => {
    const response = await api.get('3/movie/now_playing?api_key=ebfa926d29440aa3d72079d299f2df42&language=pt-BR&page=1');
    const items = response.data.results;
    for (let i = 0; i < 6; i++) {
        const review = await api.get(`3/movie/${items[i].id}/reviews?api_key=ebfa926d29440aa3d72079d299f2df42&language=en-US&page=1`);
        movieList.push({
            id: items[i].id,
            original_title: items[i].original_title,
            overview: items[i].overview,
            vote_average: items[i].vote_average,
            poster: "http://image.tmdb.org/t/p/w342" + items[i].poster_path,
            background_path: "http://image.tmdb.org/t/p/w1280" + items[i].backdrop_path,
            comments: review.data.results
        }
        );
    };
    fillSlide(movieList);
    fillCards(movieList);
    fillReview(movieList);
};

const mobileMenu = document.querySelector('.mobile-nav-btn');
const headerNav = document.querySelector('.mobile-nav');
const listNav = document.querySelectorAll('.mobile-nav li a');
headerNav.addEventListener('click', () => {
    headerNav.style.display = 'none';
});
mobileMenu.addEventListener('click', () => {
    headerNav.style.display = 'flex'
});
for (index of listNav) {
    index.addEventListener('click', (event) => {
        headerNav.style.display = 'none'
    });
};

const slideBackground = document.querySelectorAll('.slide');
const slideTitle = document.querySelectorAll('.content h1');
const content = document.querySelectorAll('.content p');
const fillSlide = (movieList) => {
    for (let i = 0; i < movieList.length; i++) {
        slideBackground[i].style.background = `url(${movieList[i].background_path}) no-repeat center center/cover`;
        slideTitle[i].textContent = movieList[i].original_title;
        content[i].textContent = movieList[i].overview;
    };
};

const fillCards = (movieList) => {
    for (let i = 0; i < movieList.length; i++) {
        cards[i].style.backgroundImage = `url(${movieList[i].poster})`;
        cards[i].addEventListener('click', () => {
            selectedMovie = i;
            fillReview(movieList);
        });
    };
};

const profileLinks = document.querySelectorAll('.profile-link');
const username = document.querySelectorAll('.username');
const spanDate = document.querySelectorAll('.date');
const spanRating = document.querySelectorAll('.rating');
const reviewContent = document.querySelectorAll('.review-content');
const reviewContainerTitle = document.querySelector('.container-reviwes h2');
const clearReviews = () => {
    for (let i = 0; i < 4; i++) {
        profileLinks[i].href = '';
        username[i].textContent = '';
        spanDate[i].textContent = '';
        spanRating[i].textContent = '';
        reviewContent[i].textContent = 'Não existem comentários para o filme selecionado.';
    };
};
const fillReview = (movieList) => {
    reviewContainerTitle.textContent = `${movieList[selectedMovie].original_title}'s Reviews`;
    clearReviews();
    try {
        for (let i = 0; i < 4; i++) {
            let { author, content, created_at, author_details, url } = movieList[selectedMovie].comments[i];
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
    };
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
    });
});

getMovieData();