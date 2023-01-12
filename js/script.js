const body = document.querySelector('body');

const sliderReviews = document.querySelector('.slider-review');
let review = '';
let userDiv = '';
let userDataDiv = '';
let profileImg = '';
let profileLink = '';
let userInfo = '';
let spanUserName = '';
let spanSpoiler = '';
let spanDate = '';
let spanRate = '';
let h3Title = '';
let pContent = '';

const loadReview = () => {
    review = document.createElement('div')
    userDiv = document.createElement('div');
    userDataDiv = document.createElement('div');
    profileImg = document.createElement('img');
    profileLink = document.createElement('a');
    userInfo = document.createElement('div');
    spanUserName = document.createElement('span');
    spanSpoiler = document.createElement('span');
    spanDate = document.createElement('span');
    spanRate = document.createElement('span');
    h3Title = document.createElement('h3');
    pContent = document.createElement('p');
    review.classList.add('review');
    userDiv.classList.add("user");
    userDataDiv.classList.add("user-data");
    profileImg.classList.add("profile-img");
    profileLink.classList.add("profile-link");
    userInfo.classList.add("user-info");
    spanUserName.classList.add("username");
    spanSpoiler.classList.add("spoiler");
    spanDate.classList.add("date");
    spanRate.classList.add("rate");
    h3Title.classList.add("review-title");
    pContent.classList.add("review-content");

    if (!sliderReviews.firstChild) {
        review.classList.add('review');
    }

    sliderReviews.appendChild(userDiv);
    userDiv.appendChild(userDataDiv);
    userDiv.appendChild(h3Title);
    userDiv.appendChild(pContent);
    userDataDiv.appendChild(profileImg);
    userDataDiv.appendChild(userInfo);
    userInfo.appendChild(profileLink);
    profileLink.appendChild(spanUserName);
    userInfo.appendChild(spanSpoiler);
    userInfo.appendChild(spanDate);
    userInfo.appendChild(spanRate);
    userDiv.appendChild(h3Title);
    userDiv.appendChild(pContent);
}

//loadReview();

const fillReview = () => {

    profileImg.src = '../assets/user-profile.svg'
    profileLink.href = 'www.google.com'
    spanUserName.textContent = 'Usupario'
    spanSpoiler.textContent = 'Spoiler'
    spanDate.textContent = '1 de Março de 2023'
    spanRate.textContent = 'Rate'
    h3Title.textContent = 'Title';
    pContent.textContent = "My 3rd time watching this movie! Yet, it still stunned my mind, kept me enjoyed its every moment and left me with many thoughts afterward.For someone like me, who've rarely slept without dream, it's so exciting watching how Christopher Nolan had illustrated every single characteristic of dream on the big screen. As it's been done so sophisticatedly, I do believe the rumour that Nolan had spent 10 years to finish the script of Inception.In my opinion, it's been so far the greatest achievement in his brilliant writer-direc";
}

//fillReview();

console.log(body.style.width);