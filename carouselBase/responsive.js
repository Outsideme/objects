
const images = document.querySelectorAll('.img-carousel');
const sliderLine = document.querySelector('.slider-line');
let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');
let divHide = document.querySelector('#divHide');
let slidesToScroll = 1;
let count = 0;
let width;
let slidesToShow = 2;


window.addEventListener('resize', e => {
	e = window.screen.width;
	if (e < 712) {
		slidesToShow = 1;
		divHide.classList.remove('img-carousel');
		divHide.classList.add('div-hide');


		init();
	}
	if (e > 712) {
		slidesToShow = 2;
		divHide.classList.remove('div-hide');
		divHide.classList.add('img-carousel');
		init();
	}
	console.log(e);
});

function init() {
	console.log('resize');
	width = document.querySelector('.slider').offsetWidth / slidesToShow;
	sliderLine.style.width = width * images.length + 'px';
	images.forEach(item => {
		item.style.width = width * slidesToScroll + 'px';
		//item.style.height = 'auto';
	});
	rollSlider();
}

init();
window.addEventListener('resize', init);




next.addEventListener('click', function () {


	if (count < images.length - 2 && slidesToShow === 2) {
		count++;
		images[count].classList.add('blur-image');
		images[count].classList.remove('blur-none');
		console.log(count);
	} else if (count < images.length - 2 && slidesToShow === 1) {
		count++;
	}

	if (count >= images.length) {
		return next.disabled;
	}

	rollSlider();

});

prev.addEventListener('click', function () {
	let elRight = (images.length - 1) - count;
	let elLeft = images.length - elRight;
	images[elLeft - 1].classList.remove('blur-image');
	images[elLeft - 1].classList.add('blur-none');
	if (count >= 1) {
		count--;
	}
	console.log(count);

	if (count === 0) {
		prev.style.disabled;
	}
	rollSlider();
});

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width * slidesToScroll + 'px)';

}
