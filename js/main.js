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
var tab = document.getElementsByClassName('tab'); 
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
     	for (var i = 0; i < tab.length; i++) { // Запускаем цикл
            if (target == tab[i]) { // Если текущий таб равен табу с таким номером, то идём дальше
                showTabsContent(i); // Показываем контент
                bodyClass.classList.remove("bg-1"); // Скрываем все градиенты
                bodyClass.classList.remove("bg-2"); // Скрываем все градиенты
                bodyClass.classList.remove("bg-3"); // Скрываем все градиенты
                bodyClass.classList.remove("bg-4"); // Скрываем все градиенты
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

