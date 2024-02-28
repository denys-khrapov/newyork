export function main() {
	initSwiper()

	function initSwiper() {
		let popularObj = new Swiper('.popular-obj-slider', {
			slidesPerView: 'auto',
			spaceBetween: 48,
			loop: true,
			speed: 500,
			pagination: {
				el: '.popular-obj__nav .swiper-pagination',
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
				nextEl: '.popular-obj__nav .swiper-button-next',
				prevEl: '.popular-obj__nav .swiper-button-prev'
			}
		})
	}
}