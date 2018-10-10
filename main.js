
window.onload = function() {

	setInterval(clock, 1000);

	let sec = document.querySelector('div.seconds');
	let min = document.querySelector('div.minutes');
	let hours = document.querySelector('div.hours');;

	let date = new Date();

	function clock() {
		console.log('hi');
		sec.style.transform = 'rotate('+ date.getSeconds() * 6 +'deg)';
		min.style.transform = 'rotate('+ date.getMinutes() * 6 +'deg)';
		hours.style.transform = 'rotate('+ date.getHours() * 30 +'deg)';
		date = new Date();   
	}
}