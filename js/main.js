let isDashboardVisible = false;

let openPopupBtn = document.getElementById('openPopupOfToDo');
let todoPopup = document.getElementsByClassName('addTodo-overley')[0];
let closeToDoPopup = document.getElementById('closeToDo');
let dashBoardToggle = document.getElementById('toggleDashboard');
let dashboard = document.getElementsByClassName('dashboard')[0];
let addNewToDo = document.getElementById('addToDobtn');
let inputToDo = document.getElementById('inputToDo');
let selectTodo = document.getElementById('selectToDo');


todoPopup.classList.add('hide');

// variables of days
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');
let saturday = document.getElementById('saturday');
let sunday = document.getElementById('sunday');



class Task {
	constructor(inputValue, selectIndex, selectOptions) {
		this.inputValue =  inputValue;
		this.selectIndex = selectIndex;
		this.selectOptions = selectOptions;
	}


	createNewTask() {
		let getInpVal = this.inputValue.value;


		let x =	selectTodo.selectedIndex;
		let y = selectTodo.options;
		let YXINDEX = y[x].index;

		let newElementLi;
		let newElementBtn;

		newElementLi =  document.createElement('li');
		newElementLi.id = 'toDo-list-item';
		newElementLi.innerHTML = getInpVal;


		newElementBtn = document.createElement('button');
		newElementBtn.classList.add('deleteThisTask');
		newElementBtn.id = 'deleteThisTask';
		newElementBtn.innerText = 'delete';
		newElementLi.prepend(newElementBtn);
		this.inputValue.value = '';

		switch(YXINDEX) {
			case 0:  
				monday.prepend(newElementLi);
				break
			case 1:  
				tuesday.prepend(newElementLi);
				break
			case 2:  
				wednesday.prepend(newElementLi);
				break
			case 3:  
				thursday.prepend(newElementLi);
				break
			case 4:  
				friday.prepend(newElementLi);
				break
			case 5:  
				saturday.prepend(newElementLi);
				break
			case 6:  
				sunday.prepend(newElementLi);
				break
		}

		newElementBtn.addEventListener('click', (e) => {
			var target = e.target;
			target.parentElement.remove();
		});
	}

	validateInput() {
		if(this.inputValue.value == '') {
			alert('Please fill in the field')
		} else {
			this.createNewTask();
		}
	}
}


/** 
	1- inputValue - find input which will be use for new task
**/

let createNewTask = new Task(inputToDo);



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
	createNewTask.validateInput()
});

