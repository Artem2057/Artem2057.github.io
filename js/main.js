let isDashboardVisible = false;

let openPopupBtn = document.getElementById('openPopupOfToDo');
let todoPopup = document.getElementsByClassName('addTodo-overley')[0];
let closeToDoPopup = document.getElementById('closeToDo');
let dashBoardToggle = document.getElementById('toggleDashboard');
let dashboard = document.getElementsByClassName('dashboard')[0];
let addNewToDo = document.getElementById('addToDobtn');
let inputToDo = document.getElementById('inputToDo');
let option = document.getElementsByClassName('toDoOption')[0];
let newElementLi;
let newElementBtn;
todoPopup.classList.add('hide');

// variables of days
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');
let saturday = document.getElementById('saturday');
let sunday = document.getElementById('sunday');


openPopupBtn.addEventListener('click', () => {
		todoPopup.classList.remove('hide');
		todoPopup.classList.add('show');
});


closeToDoPopup.addEventListener('click', () => {
	todoPopup.classList.remove('show');
	todoPopup.classList.add('hide');
});


dashBoardToggle.addEventListener('click', () =>{
	isDashboardVisible =  !isDashboardVisible;
	if(isDashboardVisible) {
		dashboard.classList.remove('show');
		dashboard.classList.add('hide');
	} else {
		dashboard.classList.remove('hide');
		dashboard.classList.add('show');
	}
});


addNewToDo.addEventListener('click', () => {
	createNewTask();
});

function createNewTask() {
	let getInpVal = inputToDo.value;
	let x = document.getElementById("selectToDo").selectedIndex;
	let y = document.getElementById("selectToDo").options;
	let YXINDEX = y[x].index;

	newElementLi = document.createElement('li');
	newElementLi.id = 'toDo-list-item';
	newElementLi.innerHTML = getInpVal;
	
	newElementBtn = document.createElement('button');
	newElementBtn.classList.add('deleteThisTask');
	newElementBtn.id = 'deleteThisTask';
	newElementBtn.innerText = 'delete';
	newElementLi.prepend(newElementBtn);
	inputToDo.value = '';

	if (YXINDEX == 0) {
		monday.prepend(newElementLi);
	} else if (YXINDEX == 1) {
		tuesday.prepend(newElementLi);
	} else if (YXINDEX == 2) {
		wednesday.prepend(newElementLi);
	} else if (YXINDEX == 3) {
		thursday.prepend(newElementLi);
	} else if (YXINDEX == 4) {
		friday.prepend(newElementLi);
	} else if (YXINDEX == 5) {
		saturday.prepend(newElementLi);
	} else if (YXINDEX == 6) {
		sunday.prepend(newElementLi);
	}

	document.getElementById('deleteThisTask').addEventListener('click', (e) => {
		var target = e.target;
		target.parentElement.remove();
	});
}