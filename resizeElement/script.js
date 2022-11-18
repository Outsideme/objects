
const container = document.querySelector('.header__container')
const search = document.querySelector('.search-btn')
const distance = document.querySelector('.search-btn')

const left = () => {
window.addEventListener('resize', function (e) {
	console.log(container.clientWidth)
	if (search.style.transform) {
	search.style.transform = `translateX(-${search.offsetLeft - 15}px)`
	}
	return container.offsetWidth
})
}
console.log(left())




function searchTranslate () {
search.addEventListener('click', e => {
	if (!search.style.transform) {
	search.style.transform = `translateX(-${search.offsetLeft - 15}px)`
	} else {
		search.style.removeProperty('transform')

	}
	console.log('work')
})
}
searchTranslate()
