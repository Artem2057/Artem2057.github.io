let usernameContainer = document.querySelector('.ive-header-username i > span');
let toggleSidebarBtn = document.querySelector('#toggleSidebar');
let iveSidebar = document.querySelector('.ive-left-sidebar');
let overley = document.querySelector('.ive-overley');
let table = document.querySelector('.ive-irregular-verbs-table');
let showTable = iveSidebar.querySelector('#showTable');
let hideTable = table.querySelector('#hideTable');
let listOfIrregularVerbs = table.querySelector('.list');
let main = document.querySelector('main');
let iveGame = document.querySelector('.ive-game');
let checkingMessagePositive = document.querySelector('#checkingMessagePositive');
let checkingMessageNegative = document.querySelector('#checkingMessageNegative');
let iveRightFormContainer = document.querySelector('#iveRightFormContainer');
let finishPopup = document.querySelector('#finishPopup');
let countRightAnswers = finishPopup.querySelector('#countRightAnswers');
let countWrongAnswers = finishPopup.querySelector('#countWrongAnswers');
let maxQuantityFirstLvl = finishPopup.querySelector('#maxQuantityFirstLvl');
let closeResultBtn = finishPopup.querySelector('#closeResult');

let levelOneInput = document.querySelector('#level_1-input');

const arrayColumn = (arr, n) => arr.map(x => x[n]);

class Interface {
  constructor(currentRundomData) {

    // Рандомный элемент массива хранится в переменной this.currentRundomData
    this.currentRundomData = currentRundomData;

    // Индекс рандомного элемента массива хранится в переменной this.currentRundomDataIndex
    this.currentRundomDataIndex;

    // Массив содержащий рандомный элемент и его индекс
    this.arrOfElemAndIndex = [];

    this.countRightAnswers = 0;
    this.countWrongAnswers = 0;
    this.maxStep = 0;

    if(localStorage.length > 0) {
      this.username = JSON.parse(localStorage.getItem('userdata')).username;
      usernameContainer.innerText = this.username;
    }

    this.responsiveInterface();
  }


  responsiveInterface() {
      this.toggleSwipeSidebar();

      toggleSidebarBtn.addEventListener('touchstart', (e) => {
        toggleSidebarBtn.classList.toggle('toggle-sidebar-btn_active');
        iveSidebar.classList.toggle('ive-left-sidebar_active');
        overley.classList.toggle('ive-overley_active');
      });
      

      // Показываем таблицу глаголов
      showTable.addEventListener('touchstart', () => {
        table.classList.add('ive-irregular-verbs-table_active');
        main.style.overflow = 'auto';
      });


      // Скрываем таблицу глаголов
      hideTable.addEventListener('touchstart', () => {
        table.classList.remove('ive-irregular-verbs-table_active');
        main.style.overflow = 'hidden';
      });


      // Отрисовать таблицу глаголов в панели "Таблица глаголов"
      firstForm.forEach((el, i) => {
        this.makeULS(arrayColumn(allArrays, i), listOfIrregularVerbs);
      });


      let checkValue = document.querySelector('#checkValue');
      let someVerb = document.querySelector('#someVerb');
      let next = document.querySelector('#next');

      checkValue.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle buttons Ok and Next
        this.toggleButtonsOkAndNext();

        this.validateSecondForm(levelOneInput);
      });


      next.addEventListener('click', (e) => {
        e.preventDefault();

        this.getRandomDataOfArray(firstForm, someVerb);

        // Toggle buttons Ok and Next
        this.toggleButtonsOkAndNext();
        
        checkingMessageNegative.classList.add('hide');
        checkingMessagePositive.classList.add('hide');

        /******* I need to fix speed of this block of script !!! ********/
        iveRightFormContainer.querySelectorAll('li').forEach((el) => {
          el.remove();
        });

      });

      closeResultBtn.addEventListener('touchstart', () => {
        finishPopup.classList.remove('show');
        iveGame.classList.add('hide');
      });

      main.addEventListener('click', (e) => {

        switch(e.target.id) {
          case 'level_1':
            iveGame.classList.toggle('hide');
            this.getRandomDataOfArray(firstForm, someVerb);
            break;
          case 'level_2':
            alert('2');
            break;
          case 'level_3':
            alert('3');
            break;
          case 'level_4':
            alert('4');
            break;
        }

      });
  }


  // Метод для получение рандомного элемента с массива - возвращает массив this.arrOfElemAndIndex = [el, idx] с элементом и индексом
  /* @params: 
      - параметр array - указываем массив в котором ищем рандомное значение
      - selectorForPush - элемент в который выводим рандомное значение
  */

  getRandomDataOfArray(array, selectorForPush) {
    // Получаем рандомное число
    let rand =  Math.floor(1 + Math.random() * (array.length - 1));
    let intermediateArr = [];

    // В переменную this.currentRundomData записываем рандомный элемент  масссива
    this.currentRundomData =  array[rand];
    // В переменную this.currentRundomDataIndex записываем индекс рандомного элемента из масссива
    this.currentRundomDataIndex = array.indexOf(this.currentRundomData);

    // Очищаем массив this.arrOfElemAndIndex чтобы записать в него новое значение
    this.arrOfElemAndIndex.splice(0, this.arrOfElemAndIndex.length);


    this.arrOfElemAndIndex.push(this.currentRundomData, this.currentRundomDataIndex, intermediateArr);

    // Выводим рандомное значение в selectorForPush - элемент в DOM дереве
    selectorForPush.innerHTML = this.currentRundomData;

    // Получаем все формы неправильного глагола
    this.getAllForms();

    // Получаем массив с глаголами которые уже встречались за одну игровую сессию
    this.returnArrOfVerbsAreMet();

    return this.arrOfElemAndIndex;
  }


  // We get all forms of irregular verbs
  getAllForms() {    
    allArrays.forEach((el) => {
      this.arrOfElemAndIndex[2].push(el[this.arrOfElemAndIndex[1]]);
    });
  }


  validateSecondForm(input) {
    let idx = this.arrOfElemAndIndex[1];
    let val = levelOneInput.value.toLowerCase();
    let el = secondForm[idx];
    let maxQuantityRandomDataOmFirstLevel = JSON.parse(localStorage.getItem('userdata')).maxQuantityRandomDataOmFirstLevel;
    this.maxStep++;
    console.log(removedAllForms);
    if(this.maxStep <= maxQuantityRandomDataOmFirstLevel) {
      if(val == el) {
        this.countRightAnswers++;
        // Показываем сообщение "Правильно" !
        this.checkingMessage(true);
  
        // Удаляем рандомный элемент из массива и все его формы
        this.removeCurrentRundomData();
  
        // Пересчитываем количество правильных ответов за день и записываем в localStorage
        MainApp.recountAnswers(true);
  
      } else {
        this.countWrongAnswers++;
  
        // Показываем сообщение "Не правильно" !
        this.checkingMessage(false);
  
        // Create list of right form
        this.arrOfElemAndIndex[2].forEach((el, i) => {
          let newLi = document.createElement('li');
          newLi.innerHTML = el;
          iveRightFormContainer.append(newLi);
        });
  
         // Пересчитываем количество правильных ответов за день и записываем в localStorage
        MainApp.recountAnswers(false);
  
        // Удаляем рандомный элемент из массива и все его формы
        this.removeCurrentRundomData();     
      }
    } else {
      finishPopup.classList.add('show');
      countRightAnswers.innerText = this.countRightAnswers;
      countWrongAnswers.innerText = this.countWrongAnswers;
      maxQuantityFirstLvl.innerText = maxQuantityRandomDataOmFirstLevel;
      this.countRightAnswers = 0;
      this.countWrongAnswers = 0;
      levelOneInput.value = '';
      this.maxStep = 0;
      this.toggleButtonsOkAndNext();
      console.log(firstForm.length);
      console.log(secondForm.length);
      console.log(thirdForm.length);
      console.log(designation.length);


    }

  }


  validateSecondAndThirdForm() {
   
  }



  // Метод который возвращает глаголы которые уже в стречались в одной игровой сессии
  returnArrOfVerbsAreMet() {
    // Проходимся по каждому эллементу массива removedAllForms
    removedAllForms.forEach((el, i) => {
      // и записываем в него глаголы которые уже выводились...
      el.push(allArrays[i][this.currentRundomDataIndex]);
    });
  }


  removeCurrentRundomData() {
    allArrays.forEach((el, i) => {
      el.splice(this.currentRundomDataIndex , 1);
    });
  }

  // Show message "Right" or "Wrong"
    // @param : boolean : true,  false
  checkingMessage(boolean) {
    
    if(boolean) {
      checkingMessageNegative.classList.add('hide');
      checkingMessagePositive.classList.remove('hide');
    } else {
      checkingMessagePositive.classList.add('hide');
      checkingMessageNegative.classList.remove('hide');
    }
    levelOneInput.value = '';
  }


  // Create a list
  makeULS(array, container) {
    let list = document.createElement('ul');
    container.append(list);

    array.forEach((el, i) => {
      let item = document.createElement('li');

      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);
    });

    return list;
  }


  toggleButtonsOkAndNext() {
    checkValue.classList.toggle('hide');
    next.classList.toggle('hide');
  }


  // We can swipe left sidebar to left and right with using your finger:)
  toggleSwipeSidebar() {
    let hammertime = new Hammer(main);

    hammertime.on('swipe', (ev)=> {
      switch(ev.direction) {
        case Hammer.DIRECTION_LEFT:
          toggleSidebarBtn.classList.remove('toggle-sidebar-btn_active');
          iveSidebar.classList.remove('ive-left-sidebar_active');
          overley.classList.remove('ive-overley_active');
          break;
        case Hammer.DIRECTION_RIGHT:
          toggleSidebarBtn.classList.add('toggle-sidebar-btn_active');
          iveSidebar.classList.add('ive-left-sidebar_active');
          overley.classList.add('ive-overley_active');
          break;
      }
    });
  }

  
}

new Interface();