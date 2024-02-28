export function additional() {
// Викликати функцію для налаштування FAQ
	setupFAQ();


	function setupFAQ() {
		var faqItems = $('.faq__item');
		var showMoreBtn = $('#showMoreBtn');
		var hiddenItems = faqItems.slice(5);
		var isExpanded = false; // Track the state for showMoreBtn

		// Сховати всі блоки, крім перших 5
		hiddenItems.hide();

		// Додати подію на кнопку "Показати більше"
		showMoreBtn.click(function () {
			hiddenItems.slideToggle(300); // Adjust the duration as needed
			isExpanded = !isExpanded;
			var buttonText = isExpanded ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ';
			$(this).toggleClass('active', isExpanded).text(buttonText);
		});

		$('.faq__header').click(function () {
			var faqHeader = $(this);
			var faqItem = faqHeader.closest('.faq__item');

			// Toggle 'active' class on clicked header
			faqHeader.toggleClass('active');

			// Toggle 'active' class on other headers within the same item
			faqItem.siblings().find('.faq__header').removeClass('active');

			// Toggle 'active' class on other items
			faqItem.siblings().removeClass('active').find('.faq__content').slideUp(300);

			// Toggle 'active' class on clicked item and toggle content visibility
			faqItem.toggleClass('active').find('.faq__content').slideToggle(300);
		});
	}





}

