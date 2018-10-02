window.onload = function() {
	let head = document.querySelector('head');
	let listWrapper = document.getElementById('main-list');
	let firstList = document.getElementById('first-list');
	let listOfNumbers = listWrapper.getElementsByTagName('li');
	let listOfPeople = firstList.getElementsByTagName('li');
	let mainTitle = document.getElementById('title');
	let newElement;
	let getContainer = document.getElementsByClassName('table-container')[0];
	let getRows = getContainer.getElementsByClassName('row');

	for(var i = 1; i <= 5; i++) {
		newElement = document.createElement('li');
		newElement.innerHTML = '#' + i;
		newElement.classList.add('list-item-' + i);
		listWrapper.appendChild(newElement);
	}

	// Style of DOM elements
	mainTitle.style.color = '#3E2D25';
	mainTitle.style.paddingTop = '15px';

	listOfPeople[1].style.color = 'red';

	listOfNumbers[0].id = "first";
	listOfNumbers[1].classList.add('class-two');
	listOfNumbers[2].setAttribute('style', 'color: red');
	listOfNumbers[3].setAttribute('style', 'display: none');
	listOfNumbers[4].innerHTML = '<strong>#4</strong>';


	for(let i = 0; i < getsRows.length; i++) {
		let cols = getRows[i].getElementsByClassName('col');

		for(let j = 0; j < cols.length; j++) {
			cols[j].innerHTML = j + i + 1;
		}
	}

	// Дикарьский способ :)
	
	// for(var i = 0; i < getRow.length; i++) {
	// 	getContainer.getElementsByClassName('row')[i].getElementsByClassName('col')[0].innerHTML = i + 1;
	// 	getContainer.getElementsByClassName('row')[i].getElementsByClassName('col')[1].innerHTML = i + 2;
	// 	getContainer.getElementsByClassName('row')[i].getElementsByClassName('col')[2].innerHTML = i + 3;	
	// 	getContainer.getElementsByClassName('row')[i].getElementsByClassName('col')[3].innerHTML = i + 4;		
	// }	
};