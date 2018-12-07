let appContainer = document.querySelector('.ive-app');
let bodyTag = document.querySelector('body');

class MainAppClass {
  constructor() {
     this.userData = {
      username: 'user',
      isUserAuthorized: false,
      language: 'ru', // RU/UA
      statistics: {
        statisticsForDay: {
          rightFormForDay: 0, // Ко-во правильных ответов за день
          wrongForDay: 0 // Ко-во не правильных ответов за день
        },
        statisticsForWeek: []
      },
      // Максимальное количество задаваемых рандомных значений на пером уровне
      maxQuantityRandomDataOmFirstLevel: 8,
      currentDate: '01.01.1976',
      numberOfTipsPerDay: 0
    };

    let self = this;

    this.fullDate;

    this.getFullDate();

    if(localStorage.length > 0) {
      self.loadInterface(this.loadScript('js/main-app-logic.js'));
      this.userData['statistics']['statisticsForDay']['rightFormForDay'] = JSON.parse(localStorage.getItem('userdata')).statistics['statisticsForDay'].rightFormForDay;
      this.userData['statistics']['statisticsForDay']['wrongForDay'] = JSON.parse(localStorage.getItem('userdata')).statistics['statisticsForDay'].wrongForDay;

      //***********  Dates cached ************\\
      // if(this.fullDate != JSON.parse(localStorage.getItem('userdata')).currentDate) {
      //   this.userData['currentDate'] = this.fullDate;
      //   this.userData['statistics']['statisticsForDay']['rightFormForDay'] = 0;
      //   this.userData['statistics']['statisticsForDay']['wrongForDay'] = 0;
      //   localStorage.setItem('userdata', JSON.stringify(this.userData));
      // }

      // setInterval(() => {
      //   this.getFullDate();
      //   if(this.fullDate != JSON.parse(localStorage.getItem('userdata')).currentDate) {
      //     this.userData['currentDate'] = this.fullDate;
      //     this.userData['statistics']['statisticsForDay']['rightFormForDay'] = 0;
      //     this.userData['statistics']['statisticsForDay']['wrongForDay'] = 0;
      //     localStorage.setItem('userdata', JSON.stringify(this.userData));
      //   }
      // }, 60000);

    } else {
      this.loadWelcomeFlow();
    }
    
    this.activatePreloader();
  }


  recountAnswers(boolean) {
    this.userData = JSON.parse(localStorage.getItem('userdata'));
    if(boolean) {
      this.userData['statistics']['statisticsForDay']['rightFormForDay'] += 1;
      localStorage.setItem('userdata', JSON.stringify(this.userData));
    } else {
      this.userData['statistics']['statisticsForDay']['wrongForDay'] += 1;
      localStorage.setItem('userdata', JSON.stringify(this.userData));
    }
  }


  addUserDataToLocalStorage(input) {
    let lang = document.querySelector('.lang[checked="true"]').getAttribute('data-language');
    let username = input.value;
    let self = this;

    this.userData['username'] = username;
    this.userData['isUserAuthorized'] = true;
    this.userData['language'] = lang;
    this.userData['currentDate'] = this.fullDate;
    localStorage.setItem('userdata', JSON.stringify(this.userData));
    
    self.loadInterface(this.loadScript('js/main-app-logic.js'));
  }


  loadInterface(callback) {
    let lang = JSON.parse(localStorage.getItem('userdata')).language;
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', `interface-${lang}.html`, false);  // '../interface-ua.html' or '../interface-ru.html'
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status == 200) {
        callback();
      }
    }
    appContainer.innerHTML = xhr.responseText;
    let usernameContainer = document.querySelector('.ive-header-username i > span');
    usernameContainer.innerText = JSON.parse(localStorage.getItem('userdata')).username;

  }

  
  loadScript(url,callback){
    var script = document.createElement('script');

    script.onload = () => {
        //once the script is loaded, run the callback
        if (callback){callback()};
    };

    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  };


  loadWelcomeFlow() { 
    let xhr = new XMLHttpRequest();
    if(localStorage.length == 0) {
      xhr.open('GET', 'welcome-flow.html', false);  // '../interface-ua.html' or '../interface-ru.html'
      xhr.setRequestHeader('Content-type', 'text/html');
      xhr.send();
      appContainer.innerHTML = xhr.responseText;
    }

  }


  getFullDate() {
    let createDate = new Date();
    let date = JSON.stringify(createDate.getDate());
    let month = JSON.stringify(createDate.getMonth() + 1);
    let year = JSON.stringify(createDate.getFullYear());

    let timeLet = date + '.' + month + '.' +  year;
    this.fullDate = timeLet;

    return this.fullDate;
  }


  activatePreloader() {
    let preloader = document.querySelector('.preloader');
    preloader.classList.toggle('hide');

    setTimeout(() => {
      preloader.classList.toggle('hide');
    }, 3200);
  }
  
}

let MainApp = new MainAppClass();