// FlexibleSettings
let position = 0;
const slidesToShow = 4;
const slidesToScroll = 3;

// Elements
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');

// Buttons
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});



const rightHiddenSlides = (itemsCount - slidesToShow) * itemWidth;

prev.addEventListener('click', () => {
    position += movePosition;
    if (position >= 0) {
        position = 0;
    }
    setPosition();
    checkBtns();
});

next.addEventListener('click', () => {
	position -= movePosition;
	if (position <= -rightHiddenSlides) {
			position = -rightHiddenSlides;
	}
	setPosition();
	checkBtns();
});



const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -rightHiddenSlides;

};
checkBtns();





// btnNext.addEventListener('click', () => {
// 	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
// 	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
// 	setPosition();
// 	checkBtns();
// });

// btnPrev.addEventListener('click', () => {
// 	const itemsLeft = Math.abs(position) / itemWidth;
// 	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
// 	setPosition();
// 	checkBtns();
// });
