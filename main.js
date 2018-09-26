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

window.onload = function () {
	var tabs = document.getElementsByClassName('tab');
	var tab = document.getElementsByClassName('tab'); 
	var tabItemContent = document.getElementsByClassName('tab-item-content');
	var bodyClass = document.querySelector('body');

	hideTabsContent(1);

console.log('1')
console.log(bodyClass)
	function hideTabsContent(activeTab) {
	    for (var i = activeTab; i < tabItemContent.length; i++) {
	        tabItemContent[i].classList.remove('show');
	        tabItemContent[i].classList.add("hide");
	    }
	}


	function showNextTab(event) {
	    var target = event.target;
	    if (target.className == 'tab') {
	     	for (var i = 0; i < tab.length; i++) {
	        if (target == tab[i]) {
	          showTabsContent(i);
	          console.log(bodyClass);
				}
			}
		}
	}

	function showTabsContent(currentTabContent){
	    if (tabItemContent[currentTabContent].classList.contains('hide')) {
	        hideTabsContent(0);
	        tabItemContent[currentTabContent].classList.remove('hide');
	        tabItemContent[currentTabContent].classList.add('show');
	    }
	}
}

