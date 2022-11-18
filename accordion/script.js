accors.forEach(el => {
	el.addEventListener('click', e => {
		const accorIcons = document.querySelectorAll('.accor-icon')
		console.log(accorIcons)
		const self = e.currentTarget.children[1].classList
		const rotateArrow = e.currentTarget.children[0].children[1].children[0].classList
		accorIcons.forEach(icon => {
			icon.children[0].classList.remove('open-accor')
			console.log(icon)
		})
		if (!e.currentTarget.children[1].classList.contains('open-accor')) {
			content.forEach(it => {

				return it.classList.remove('open-accor')
			})
			self.add('open-accor')
			rotateArrow.add('open-accor')
		 } else if (e.currentTarget.children[1].classList.contains('open-accor')) {
			rotateArrow.remove('open-accor')
			self.remove('open-accor')
		 }

	})
})
