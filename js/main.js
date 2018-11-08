'use strict';

let IVEInterface = document.querySelector('.IVE-interface');
let IVEWelcomeConponent = document.querySelector('.IVE-welcome-component');
let IVESubmitBtn = document.getElementById('IVESubmitBtn');
let IVESubmitInput = document.getElementById('IVESubmitInput');
let IVEErrMessage = document.querySelector('.IVE-err-message-any-name');
let preloader =  document.querySelector('.preloader');
let IVEAppComponent =  document.querySelector('.IVE-app-component');

class appClass {
	
	constructor(inputvalue) {
		this.inputValue = inputvalue;
	}

	addUser() {
		let isUserAuth = false;

		if(this.inputValue.value != '') {
			isUserAuth = true;		
			localStorage.setItem('username',  JSON.stringify(this.inputValue.value));
			localStorage.setItem('userIsAuthorized', JSON.stringify(isUserAuth));
			this.show('hidden-preloader', 'visible-preloader');
			IVEWelcomeConponent.remove();
			setTimeout(() => {
				this.hide('visible-preloader','hidden-preloader');
			}, 3000);
			this.loadInterface();
		} else {
			IVEErrMessage.classList.add('visible');
		}	
	}


	loadInterface() {
		let xhr = new XMLHttpRequest();
	 	xhr.open('GET', '../section.html', false);
	 	xhr.setRequestHeader('Content-type', 'text/html');
		xhr.send();
		if (xhr.status != 200) {
  		alert( xhr.status + ': ' + xhr.statusText ); // 404: Not Found
		} else {
				IVEInterface.innerHTML = xhr.responseText;
		}
	}


	logOut() {
		localStorage.clear();
		location.reload();
	}

	show(removeClass, addClass) {
		preloader.classList.remove(removeClass);
		preloader.classList.add(addClass);
	}


	hide(removeClass, addClass) {
		preloader.classList.remove(removeClass);
		preloader.classList.add(addClass);
	}

}


/* 
	*** IVESubmitInput - this input we can show when open the Auntification component ****
*/

let app = new appClass(IVESubmitInput);


if(localStorage.getItem('username') != null || undefined) {
	let localUsername = JSON.parse(localStorage.getItem('username'));
	
	IVEWelcomeConponent.remove();
	app.loadInterface();
	
	let logout = document.querySelector('#logOut');
	let IVEHamburgerBtn = document.querySelector('#IVEHamburgerBtn');
	let leftSidebar = document.querySelector('.IVE-left-sidebar');

	document.querySelector('.username').innerHTML = localUsername;

	logout.addEventListener('click', () => {
		app.logOut();
	});

	IVEHamburgerBtn.addEventListener('touchstart', (e) => {
		e.preventDefault();
		e.stopPropagation();
		IVEHamburgerBtn.classList.toggle("IVE-hamburger-btn_active");
		leftSidebar.classList.toggle("IVE-left-sidebar_active");
	});
}


IVESubmitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	e.stopPropagation();
	app.addUser();
});


// Functions which show or hide preloader
function showPreloader() {
	banterLoader.classList.remove('hidden-preloader');
	banterLoader.classList.add('visible-preloader');
};

function hidePreloader() {
	banterLoader.classList.remove('visible-preloader');
	banterLoader.classList.add('hidden-preloader');
};









