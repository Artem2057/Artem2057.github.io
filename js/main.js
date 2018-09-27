// var three = 3;
// for(var i = 1; i <= 5; i++) {
// 	alert(i);
// 	if(i >= 5) {
// 		for(var j = 4; j >= 0; j--){
// 			alert(j);
// 			if(i == 5 && j == 0) {
// 				for(var k = 1; k <= 10; k++) {
// 					alert(three * k);
// 				}
// 			}
// 		} 
// 	}
// }
function pal (str, event) {
    str = str.toLowerCase();

    if(str.split('').reverse().join('') == str) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

pal('боб');


function home_one() {
    for(var i = 1; i <= 5; i++) {
     alert(i);
    }
}


function home_two() {
     for(var j = 4; j >= 0; j--){
         alert(j);
    }
}

function home_three() {
    var three = 3;
    for(var k = 1; k <= 10; k++) {
        alert(three * k);
    }
}


var tabs = document.getElementsByClassName('tab');
var tabItemContent = document.getElementsByClassName('tab-item-content');
var bodyClass = document.querySelector('body');

hideTabsContent(1); // Параметр означает, что 1-й жлемент контента мы не будем скрывать

function hideTabsContent(activeTab) {
    for (var i = activeTab; i < tabItemContent.length; i++) { // Тут обычный цикл и отсеивание скрытия 1-го элемента
        tabItemContent[i].classList.remove('show'); // Удаляем у всех элементов кроме 1-го класс Show
        tabItemContent[i].classList.add("hide"); // Добавляем у всех элементов кроме 1-го класс Show
    }
}


function showNextTab(event) {
    var target = event.target;
    if (target.className == 'tab') { // Делаем дополнительную проверку на класс tab
     	for (var i = 0; i < tabs.length; i++) { // Запускаем цикл
            if (target == tabs[i]) { // Если текущий таб равен табу с таким номером, то идём дальше
                showTabsContent(i); // Показываем контент
                deleteBackground();
                bodyClass.classList.add("bg-" + i); // И показываем нужный
		    }
	    }
	}
}

function showTabsContent(currentTabContent){
    if (tabItemContent[currentTabContent].classList.contains('hide')) { // Если текущий контент имеет класс hide, то идём дальше
        hideTabsContent(0); // Скрываем все авто
        tabItemContent[currentTabContent].classList.remove('hide'); // Удаляем у них класс hide
        tabItemContent[currentTabContent].classList.add('show'); // И присваиваем класс Show
    }
}

function deleteBackground(i) { // Убиваем все Background
    for(var i = 0; i < tabs.length; i++) {
        bodyClass.classList.remove("bg-" + i);
    }
}

