let x0 = document.getElementById('x0');
let newEl;
var stepCount = 0;

x0.style.cssText = "width: 270px; \
	display: flex;\
	flex-wrap: wrap; \
	margin: 200px auto; \
";


for(let i = 0; i < 9; i++) {
	newEl = document.createElement('div');
  newEl.classList.add('div-item');
	x0.prepend(newEl);

	newEl.addEventListener('click', (e) => {
		doStep(e);
	});
}

let newElt = document.querySelectorAll('div');
function doStep(e) {
let target = e.target;
	if(stepCount % 2 == 0 && (target.innerText != '0' && target.innerText != 'x')) {
			target.innerText = '0';
			stepCount++;
			checkingStep();
	} else if (stepCount % 2 != 0 && (target.innerText != 'x' && target.innerText != '0')) {
			target.innerText = 'x';
			stepCount++;
			checkingStep();
	}


};
function checkingStep() {
	if(newElt[1].innerText == "0" && newElt[2].innerText  == "0" && newElt[3].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[4].innerText == "0" && newElt[5].innerText  == "0" && newElt[6].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[7].innerText == "0" && newElt[8].innerText  == "0" && newElt[9].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[1].innerText == "0" && newElt[4].innerText  == "0" && newElt[7].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[2].innerText == "0" && newElt[5].innerText  == "0" && newElt[8].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[3].innerText == "0" && newElt[6].innerText  == "0" && newElt[9].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[1].innerText == "0" && newElt[5].innerText  == "0" && newElt[9].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	} else if (newElt[3].innerText == "0" && newElt[5].innerText  == "0" && newElt[7].innerText  == "0") {
		modalService('Выиграли нолики');
		clearFields(newElt);
	}

	if (newElt[1].innerText == "x" && newElt[2].innerText  == "x" && newElt[3].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[4].innerText == "x" && newElt[5].innerText  == "x" && newElt[6].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[7].innerText == "x" && newElt[8].innerText  == "x" && newElt[9].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[1].innerText == "x" && newElt[4].innerText  == "x" && newElt[7].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[2].innerText == "x" && newElt[5].innerText  == "x" && newElt[8].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[3].innerText == "x" && newElt[6].innerText  == "x" && newElt[9].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[1].innerText == "x" && newElt[5].innerText  == "x" && newElt[9].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} else if (newElt[3].innerText == "x" && newElt[5].innerText  == "x" && newElt[7].innerText  == "x") {
		modalService('Выиграли крестики');
		clearFields(newElt);
	} 

}


let BODY = document.querySelector('body');

function modalService(message, widthOfModal, heightOfModal) {
	let w = widthOfModal || 400;
	let h = heightOfModal || 250;
	let halfOfWidth = w / 2;
	let halfOfHeight = h / 2;

	let modalNewNode = document.createElement('div');
	let modalNewText = document.createElement('p');
	let modalNewDiv = document.createElement('div');
	let modalNewBtn = document.createElement('button');

	modalNewNode.classList.add('modal-popup');
	modalNewText.classList.add('modal-popup-text');
	modalNewDiv.classList.add('modal-popup-panel');
	modalNewBtn.classList.add('modal-popup-btn');
	modalNewBtn.innerText = 'Cancel';

	modalNewNode.prepend(modalNewText);
	modalNewNode.append(modalNewDiv);
	modalNewDiv.prepend(modalNewBtn);

	modalNewText.innerText = message;
	modalNewNode.style.width =  w + 'px';
	modalNewNode.style.height =  h + 'px';
	modalNewNode.style.position =  'absolute';
	modalNewNode.style.left =  '50%';
	modalNewNode.style.top =  '50%';
	modalNewNode.style.marginLeft =  -halfOfWidth + 'px';
	modalNewNode.style.marginTop =  -halfOfHeight + 'px';


	BODY.prepend(modalNewNode);

	modalNewBtn.addEventListener('click', () => {
		modalNewNode.remove();
	});
	// modalNewNode.innerHTML = message;
}


function clearFields(element) {
	for(let i = 1; i < element.length; i++) {
		element[i].innerText = '';
	}
}

