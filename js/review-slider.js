const reviews = document.querySelectorAll('.review');
const btnNextReview = document.querySelector('#next-review');
const btnPrevReview = document.querySelector('#prev-review');

const nextReview = () => {
    const currentReview = document.querySelector('.current-review');
    currentReview.classList.remove('current-review');
    if (currentReview.nextElementSibling) {
        currentReview.nextElementSibling.classList.add('current-review');
    } else {
        reviews[0].classList.add('current-review');
    }
    setTimeout(() => currentReview.classList.remove('current-review'));
}

const prevReview = () => {
    const currentReview = document.querySelector('.current-review');
    currentReview.classList.remove('current-review');
    if (currentReview.previousElementSibling) {
        currentReview.previousElementSibling.classList.add('current-review');
    } else {
        reviews[reviews.length - 1].classList.add('current-review');
    }
    setTimeout(() => currentReview.classList.remove('current-review'));
}

btnNextReview.addEventListener('click', (event) => {
    nextReview();
});
btnPrevReview.addEventListener('click', (event) => {
    prevReview();
});

