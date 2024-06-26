export function additional() {
// Викликати функцію для налаштування FAQ
	blogSliders();
	feedbackSliders()

	jQuery(document).ready(function ($) {
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

			$(document).on('click', '.faq__header', function () {
				var faqHeader = $(this);
				var faqItem = faqHeader.closest('.faq__item');
				faqHeader.toggleClass('active');
				$('.faq__header').not(faqHeader).removeClass('active');
				$('.faq__item').not(faqItem).removeClass('active').find('.faq__content').slideUp(300);
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

		function feedback() {
			$('.feedback__btn').click(function () {
				var targetBlock = $(this).data('target');
				var $textElement = $('.feedback__text-holder[data-block="' + targetBlock + '"]');

				$textElement.toggleClass('expanded'); // Add or remove 'expanded' class

				var isExpanded = $textElement.hasClass('expanded');
				var buttonText = isExpanded ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ';

				$(this).find('.btn-text').text(buttonText);

				// Add or remove 'active' class on the button
				$(this).toggleClass('active', isExpanded);

				if (isExpanded) {
					$textElement.css('-webkit-line-clamp', 'unset'); // Remove line clamp
				} else {
					$textElement.css('-webkit-line-clamp', '6'); // Apply line clamp
				}
			});
		}

		setupFAQ();
		seo();
		feedback();

	});// jQuery(document).ready


	function blogSliders() {
		let blog = new Swiper('.blog__main', {
			slidesPerView: 'auto',
			spaceBetween: 48,
			loop: true,
			speed: 500,
			pagination: {
				el: '.blog__navigation .swiper-pagination',
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
				nextEl: '.blog__navigation .swiper-button-next',
				prevEl: '.blog__navigation .swiper-button-prev'
			}
		})
	}

	function feedbackSliders() {
		let blog = new Swiper('.feedback__slider', {
			slidesPerView: 'auto',
			spaceBetween: 48,
			loop: true,
			speed: 500,
			pagination: {
				el: '.feedback__navigation .swiper-pagination',
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
				nextEl: '.feedback__navigation .swiper-button-next',
				prevEl: '.feedback__navigation .swiper-button-prev'
			}
		})
	}

}

