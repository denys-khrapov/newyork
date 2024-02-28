export function additional() {
// Викликати функцію для налаштування FAQ
	setupFAQ();
	seo();
	blogSliders()

	function setupFAQ() {
		var faqBox = $('.faq__box');
		var showMoreBtn = $('#showMoreBtn');
		var isExpanded = false; // Track the state for showMoreBtn

		// Додати подію на кнопку "Показати більше"
		showMoreBtn.click(function () {
			faqBox.slideToggle(300); // Adjust the duration as needed
			isExpanded = !isExpanded;

			var buttonText = isExpanded ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ';
			$(this).toggleClass('active', isExpanded).find('.btn-text').text(buttonText);
		});

		$('.faq__header').click(function () {
			var faqHeader = $(this);
			var faqItem = faqHeader.closest('.faq__item');

			// Toggle 'active' class on clicked header
			faqHeader.toggleClass('active');

			// Toggle 'active' class on other headers within the document
			$('.faq__header').not(faqHeader).removeClass('active');

			// Toggle 'active' class on other items within the document
			$('.faq__item').not(faqItem).removeClass('active').find('.faq__content').slideUp(300);

			// Toggle 'active' class on clicked item and toggle content visibility
			faqItem.toggleClass('active').find('.faq__content').slideToggle(300);
		});

	}

	function seo() {
		$('#seo__btn').click(function () {
			$('.seo__main').slideToggle(300);
			$(this).toggleClass('active');
			var buttonText = $(this).hasClass('active') ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ';
			$(this).find('.btn-text').text(buttonText);
		});
	}

	function blogSliders() {
		let blog = new Swiper('.blog__main', {
			slidesPerView: 'auto',
			spaceBetween: 48,
			loop: true,
			speed: 500,
			pagination: {
				el: '.blog__navigation .swiper-pagination',
				type: 'fraction',
				formatFractionCurrent: function(number) {
					return ('0' + number).slice(-2)
				},
				formatFractionTotal: function(number) {
					return ('0' + number).slice(-2)
				},
				renderFraction: function(currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
						'/' +
						'<span class="' + totalClass + '"></span>'
				}
			},
			navigation: {
				nextEl: '.blog__navigation .swiper-button-next',
				prevEl: '.blog__navigation .swiper-button-prev'
			}
		})
	}
}

