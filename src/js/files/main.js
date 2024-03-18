export function main() {
	initSwiper();
	menu();

	function initSwiper() {
		let popularObj = new Swiper('.popular-obj-slider', {
			slidesPerView: 'auto',
			spaceBetween: 48,
			loop: true,
			speed: 500,
			pagination: {
				el: '.popular-obj__nav .swiper-pagination',
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return ('0' + number).slice(-2)
				},
				formatFractionTotal: function (number) {
					return ('0' + number).slice(-2)
				},
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
							'/' +
							'<span class="' + totalClass + '"></span>'
				}
			},
			navigation: {
				nextEl: '.popular-obj__nav .swiper-button-next',
				prevEl: '.popular-obj__nav .swiper-button-prev'
			}
		})
	}

	function menu() {
		const buttonOpen = document.querySelectorAll('.header__burger');
		const menu = document.querySelector('.menu-header');
		const html = document.querySelector('html');
		const buttonClose = document.querySelector('.menu-header__close');

		buttonOpen.forEach(button => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				menu.classList.toggle('active');
				if (window.innerWidth <= 676) {
					html.classList.toggle('lock');
				}
			})
		})
		buttonClose.addEventListener('click', (e) => {
			e.preventDefault();
			menu.classList.toggle('active');
			if (html.classList.contains('lock')) {
				html.classList.remove('lock');
			}
		})

	}

	const appHeight = () => {
		const doc = document.documentElement;
		doc.style.setProperty('--app-height', `${window.innerHeight}px`);
	}
	appHeight();

	function adjustArticleTextHeight() {
		document.querySelectorAll('.archive-article__item').forEach(item => {
			if (window.matchMedia('(max-width: 1279px)').matches) {
				const title = item.querySelector('.archive-article__title');
				const textHolder = item.querySelector('.archive-article__text-holder');
				const titleHeight = title.scrollHeight;
				const textHolderMaxHeight = 205;
				const maxTextHeight = textHolderMaxHeight - titleHeight;
				textHolder.style.maxHeight = `${maxTextHeight > 0 ? maxTextHeight : 0}px`;
			} else {
				const title = item.querySelector('.archive-article__title');
				const textHolder = item.querySelector('.archive-article__text-holder');
				const titleHeight = title.scrollHeight;
				console.log(titleHeight)
				const textHolderMaxHeight = 281;
				const maxTextHeight = textHolderMaxHeight - titleHeight;
				textHolder.style.maxHeight = `${maxTextHeight > 0 ? maxTextHeight : 0}px`;
			}
		});
	}

	window.addEventListener('load', adjustArticleTextHeight);
	window.addEventListener('resize', () => {
		appHeight();
		adjustArticleTextHeight();
	})

}