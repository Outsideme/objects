const popLinks = document.querySelectorAll('.pop-link');
const body = document.body;
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;


if (popLinks.length > 0) {

	for (let index = 0; index < popLinks.length; index++) {
	
		const popLink = popLinks[index];
		
			popLink.addEventListener('click', event => {
	  		const popName = popLink.getAttribute('href').replace('#', '');
			const currentPop = document.getElementById(popName);
				popOpen(currentPop);
				event.preventDefault();
		});
	}
}


const popCloseIcon = document.querySelectorAll('.pop__close');
	if (popCloseIcon.length > 0) {
		for (let index = 0; index < popCloseIcon.length; index++) {
			const element = popCloseIcon[index];
			element.addEventListener('click', e => {
				popClose(element.closest('.pop'));
				e.preventDefault();
			});
		}
	}

	const popOpen = currentPop => {
		if (currentPop && unlock) {
			const popActive = document.querySelector('.pop.open');
				if (popActive) {
					popClose(popActive, false);
				} else {
					bodyLock();
				}
				currentPop.classList.add('open');
				currentPop.addEventListener('click', event => {
					if (!event.target.closest('.pop__content')){
						popClose(event.target.closest('.pop'));
					}
				});
			}
	};
	const popClose = (popActive, doUnlock = true) => {
		if (unlock) {
			popActive.classList.remove('open');
		} 
		if (doUnlock) {
				bodyUnlock();
		}
	};

const bodyLock = () => {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	for (let index = 0; index < lockPadding.length; index++) {
		const element = lockPadding[index];
		element.style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout);
};

const bodyUnlock = () => {
	setTimeout(() => {
		for (let index = 0; index < lockPadding.length; index++) {
			const element = lockPadding[index];
			element.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');	
	}, timeout);
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, setTimeout);
	};

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		const popActive = document.querySelector('.pop.open');
		popClose(popActive);
	}
});
