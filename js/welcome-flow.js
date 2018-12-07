// Validate welcome flow
let loginBtn = document.querySelector('#nextBtn');
let inputLang = document.querySelectorAll('input[name="lang"');
let label = document.querySelectorAll('label');
let inputName = document.querySelector('#username');
let iveWelcomeFlow = document.querySelector('.ive-welcome-flow');

if(localStorage.length == 0) {
  loginBtn.setAttribute('disabled', true);
  
  label[0].addEventListener('click', function() {
    nextBtn.removeAttribute('disabled', true);
    inputLang[1].removeAttribute('checked');
    inputLang[0].setAttribute('checked', true);
  });
  
  label[1].addEventListener('click', function() {
    nextBtn.removeAttribute('disabled', true);
    inputLang[0].removeAttribute('checked');
    inputLang[1].setAttribute('checked', true);
  });
  
  
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    MainApp.addUserDataToLocalStorage(inputName);
    iveWelcomeFlow.remove();
    MainApp.activatePreloader();
  });
}