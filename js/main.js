window.onload = function() {

	let container = document.getElementById('sliderContainer');
	let li = container.querySelectorAll('li.slider-item');
	let lengthOfElements = li.length;
	li[0].classList.add('active');	
	let count = 0;
	let isHoverOnSlide = false;

	slider();
	function slider(count) {
		count = 0;
		let nextSlide = setInterval(function() {
			for(let i = 0; i < lengthOfElements; i++) {
				li[i].classList.remove('active');		
			}

			if(count >= lengthOfElements) {
				count = 0;
			}
			li[count].classList.add('active');
			li[count].onmouseover = function() {
				isHoverOnSlide = true;
				console.log(isHoverOnSlide);
				if(isHoverOnSlide) {
					clearInterval(nextSlide);			
				}
			}
			li[count].onmouseleave = function() {
				isHoverOnSlide = false;
				if(!isHoverOnSlide) {
						slider();
				}
			}
			count++; 

		}, 2000);
	}








	// let next = function () {
	// 	setInterval(next, 2000);
	// 	for(let i = 0; i < lengthOfElements; i++) {
	// 		li[i].classList.remove('active');		
	// 	}
	// 	if(count >= lengthOfElements) {
	// 		count = 0;
	// 	} 
	// 	li[count].classList.add('active');
	// 	count++;
	// }

	// setInterval(next, 2000);

};
