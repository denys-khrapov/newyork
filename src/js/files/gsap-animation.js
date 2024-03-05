gsap.registerPlugin(ScrollTrigger, TextPlugin)

gsap.from('.hero__title', {
	opacity: 0,
	x: -300,
	ease: 'expo.inOut',
	duration: 1.8
})

gsap.from('.hero__subtitle', {
	opacity: 0,
	x: 300,
	ease: 'expo.inOut',
	duration: 1.8
})

gsap.from('.introduction__content', {
	scrollTrigger: {
		trigger: '.introduction__container'
	},
	x: 300,
	opacity: 0,
	duration: 0.5,
	delay: 0.2
})


gsap.from('.about__text-box--left', {
	scrollTrigger: {
		trigger: '.about'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.about__text-box--right', {
	scrollTrigger: {
		trigger: '.about'
	},
	x: 300,
	opacity: 0,
	duration: 0.5,
	delay: 1.5
})

gsap.from('.principles__title', {
	scrollTrigger: {
		trigger: '.principles'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.principles__left-col', {
	scrollTrigger: {
		trigger: '.principles'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 1.5
})

gsap.to('.principles-adv__item', {
	scrollTrigger: {
		trigger: '.principles'
	},
	opacity: 1,
	delay: 2,
	ease: 'power3.inOut',
	duration: 1.2,
	stagger: 0.5
})


gsap.from('.cta__left-col', {
	scrollTrigger: {
		trigger: '.cta__container'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 0.5
})

gsap.from('.cta__right-col', {
	scrollTrigger: {
		trigger: '.cta__container'
	},
	x: 300,
	opacity: 0,
	duration: 0.5,
	delay: 0.5
})

gsap.from('.popular-obj__title', {
	scrollTrigger: {
		trigger: '.popular-obj'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 0.5
})


gsap.from('.popular-obj__nav', {
	scrollTrigger: {
		trigger: '.popular-obj'
	},
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.popular-obj__slide', {
	scrollTrigger: {
		trigger: '.popular-obj'
	},
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.feedback__title', {
	scrollTrigger: {
		trigger: '.feedback'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.feedback__slider', {
	scrollTrigger: {
		trigger: '.feedback'
	},
	x: 300,
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.experts__title', {
	scrollTrigger: {
		trigger: '.experts'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.experts__box-card', {
	scrollTrigger: {
		trigger: '.experts'
	},
	opacity: 0,
	duration: 0.5,
	stagger: 0.5,
	delay: 1.5
})

gsap.from('.blog__title', {
	scrollTrigger: {
		trigger: '.blog'
	},
	x: -300,
	opacity: 0,
	duration: 0.5,
	delay: 0.5
})


gsap.from('.blog__navigation', {
	scrollTrigger: {
		trigger: '.blog'
	},
	opacity: 0,
	duration: 0.5,
	delay: 1
})

gsap.from('.blog__slide', {
	scrollTrigger: {
		trigger: '.blog'
	},
	opacity: 0,
	duration: 0.5,
	delay: 1
})


// gsap.from('.header .button--radius', {
// 	opacity: 0,
// 	x: -20,
// 	ease: 'expo.inOut',
// 	duration: 0.5,
// 	delay: 0.3
// })
//
// gsap.from('.header .bar', {
// 	opacity: 0,
// 	x: -20,
// 	ease: 'expo.inOut',
// 	duration: 0.5,
// 	delay: 0.4
// })
//
// gsap.from('.header__buttons .button--main', {
// 	opacity: 0,
// 	x: -20,
// 	ease: 'expo.inOut',
// 	duration: 0.5,
// 	delay: 0.6
// })
//
// if (document.querySelector('.hero__title')) {
// 	gsap.from('.hero__title', {
// 		opacity: 0,
// 		delay: 0.6,
// 		y: 20,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
// if (document.querySelector('.hero__subheading')) {
// 	gsap.from('.hero__subheading', {
// 		opacity: 0,
// 		delay: 0.6,
// 		y: 20,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
// if (document.querySelector('.hero__text-holder')) {
// 	gsap.from('.hero__text-holder', {
// 		opacity: 0,
// 		delay: 0.6,
// 		y: 20,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
// if (document.querySelector('.hero__buttons')) {
// 	gsap.from('.hero__buttons', {
// 		opacity: 0,
// 		delay: 0.8,
// 		y: 20,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
// if (document.querySelector('.rating-hero')) {
// 	gsap.from('.rating-hero', {
// 		opacity: 0,
// 		delay: 1,
// 		x: -200,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
// if (document.querySelector('.hero__image-holder')) {
// 	gsap.from('.hero__image-holder', {
// 		opacity: 0,
// 		delay: 1.2,
// 		x: 200,
// 		ease: 'expo.inOut',
// 		duration: 0.5
// 	})
// }
//
//
// if (document.querySelector('.about__subtitle')) {
// 	gsap.from('.about__subtitle', {
// 		scrollTrigger: {
// 			trigger: '.about'
//
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.2
//
// 	})
// }
//
// if (document.querySelector('.about__title')) {
// 	gsap.from('.about__title', {
// 		scrollTrigger: {
// 			trigger: '.about'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.about__quote')) {
// 	gsap.from('.about__quote', {
// 		scrollTrigger: {
// 			trigger: '.about__left-col'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.about__left-col')) {
// 	gsap.from('.about__left-col', {
// 		scrollTrigger: {
// 			trigger: '.about__left-col'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.about__right-col')) {
// 	gsap.from('.about__right-col', {
// 		scrollTrigger: {
// 			trigger: '.about__right-col'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.8
// 	})
// }
//
//
// if (document.querySelector('.services__subtitle')) {
// 	gsap.from('.services__subtitle', {
// 		scrollTrigger: {
// 			trigger: '.services'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.2
// 	})
// }
//
// if (document.querySelector('.services__title')) {
// 	gsap.from('.services__title', {
// 		scrollTrigger: {
// 			trigger: '.services'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.services__quote')) {
// 	gsap.from('.services__quote', {
// 		scrollTrigger: {
// 			trigger: '.header-services__right-col'
// 		},
// 		x: 100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.services__header')) {
//
// 	const tl = gsap.timeline({
// 		defaults: { duration: 0.5, ease: 'power2.inOut', delay: 0.8 },
// 		scrollTrigger: {
// 			trigger: '.services__header',
// 			start: 'top center',
// 			toggleActions: 'play none none none'
// 		}
// 	})
//
// // Получаем все карточки и анимируем их в зависимости от их индекса
// 	document.querySelectorAll('.services__card').forEach((card, index) => {
// 		let xValue = 0 // Стартовое значение по оси X
// 		let yValue = 0 // Стартовое значение по оси Y
//
// 		// Левая карточка
// 		if (index === 0) {
// 			xValue = -100 // Выезжает слева
// 		}
// 		// Правая карточка
// 		else if (index === 2) {
// 			xValue = 100 // Выезжает справа
// 		}
// 		// Центральная карточка
// 		else if (index === 1) {
// 			yValue = 50 // Выезжает снизу
// 		}
//
// 		// Создаем анимацию для текущей карточки
// 		tl.from(card, { xPercent: xValue, y: yValue, autoAlpha: 0 }, index * 0.1)
// 	})
// }
//
// if (document.querySelector('.services__list')) {
// 	gsap.from('.services__list', {
// 		scrollTrigger: {
// 			trigger: '.services__card'
// 		},
// 		y: 150,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.9
// 	})
// }
//
// if (document.querySelector('.cta__left-col')) {
// 	gsap.from('.cta__left-col', {
// 		scrollTrigger: {
// 			trigger: '.cta'
// 		},
// 		x: -150,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.3
// 	})
// }
//
// if (document.querySelector('.cta__right-col')) {
// 	gsap.from('.cta__right-col', {
// 		scrollTrigger: {
// 			trigger: '.cta'
// 		},
// 		x: 150,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.clients__header')) {
// 	gsap.from('.clients__header', {
// 		scrollTrigger: {
// 			trigger: '.clients__header'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.2
// 	})
// }
//
// if (document.querySelector('.cases__subtitle')) {
// 	gsap.from('.cases__subtitle', {
// 		scrollTrigger: {
// 			trigger: '.cases__header'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.2
// 	})
// }
//
//
// if (document.querySelector('.cases__title')) {
// 	gsap.from('.cases__title', {
// 		scrollTrigger: {
// 			trigger: '.cases__header'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.cases__slider')) {
// 	gsap.from('.cases__slider', {
// 		scrollTrigger: {
// 			trigger: '.cases__header'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.slider-cases__nav')) {
// 	gsap.from('.slider-cases__nav', {
// 		scrollTrigger: {
// 			trigger: '.cases__header'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.text-image__left-col')) {
// 	gsap.from('.text-image__left-col', {
// 		scrollTrigger: {
// 			trigger: '.text-image__body'
// 		},
// 		x: -150,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.text-image__right-col')) {
// 	gsap.from('.text-image__right-col', {
// 		scrollTrigger: {
// 			trigger: '.text-image__body'
// 		},
// 		x: 150,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.team__left-col')) {
// 	gsap.from('.team__left-col', {
// 		scrollTrigger: {
// 			trigger: '.team__container'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.3
// 	})
// }
//
// if (document.querySelector('.team__right-col')) {
// 	gsap.from('.team__right-col', {
// 		scrollTrigger: {
// 			trigger: '.team__container'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.header-news-podcast__subtitle')) {
// 	gsap.from('.header-news-podcast__subtitle', {
// 		scrollTrigger: {
// 			trigger: '.news-podcast__header'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.2
// 	})
// }
//
// if (document.querySelector('.header-news-podcast__title')) {
// 	gsap.from('.header-news-podcast__title', {
// 		scrollTrigger: {
// 			trigger: '.news-podcast__header'
// 		},
// 		x: -100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.4
// 	})
// }
//
// if (document.querySelector('.header-news-podcast__link')) {
// 	gsap.from('.header-news-podcast__link', {
// 		scrollTrigger: {
// 			trigger: '.news-podcast__header'
// 		},
// 		x: 100,
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.6
// 	})
// }
//
// if (document.querySelector('.news-podcast__content')) {
//
// 	gsap.from('.news-podcast__content', {
// 		scrollTrigger: {
// 			trigger: '.news-podcast__content'
// 		},
// 		opacity: 0,
// 		duration: 0.5,
// 		delay: 0.8
// 	})
// }