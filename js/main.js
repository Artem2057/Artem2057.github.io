// Custom maximum height calculation
$.fn.equivalent = function (){
  var heightBlocks = $(this);
  var maxHeight = heightBlocks.eq(0).height();
    heightBlocks.each(function(){
    maxHeight = ( $(this).height() > maxHeight ) ? $(this).height() : maxHeight;
      if ( $(this).height() > maxHeight ) {
        maxHeight = $(this).height();
      }
    });
  heightBlocks.height(maxHeight);
}



$(function() {

  $('.holder').remove();

  // Popups
  var keramicpopups = $('.ceramic-popup'); // All popups on page

  var headerRegistrationPopup = $('#headerRegistrationPopup');
  var headerLoginpopup = $('#headerLogInPopup');
  var headerBasketPopup = $('#headerBasketPopup');
  var headerContactsPopup = $('#headerContactsPopup');

  // Buttons which show popups
  var mainMenuBtn = $('#toggleMenuBtn');
  var registrationFormBtn = $('#registrationFormBtn');
  var basketPopupBtn = $('#basketPopupBtn');
  var newsletterSubscriptionBtn = $('#newsletterSubscriptionBtn');
  var newsletterSubscriptionInput = $('#newsletterSubscriptionInput');
  var closeMainMenuPopupBtn = $('#closeMenuPopupBtn');
  var headerSearch = $('.header-search');
  var searchBtn = $('#toggleSearchLineBtn');
  var contactsPopupBtn = $('.showContactsPopup');
  
  // Popu links
  var loginLink = $('#loginLink');
  var registrationLink = $('#registrationLink');
  
  // Containers
  var headerMenuContainer = $('.header-menu-container');
  var basketlistContaier = $('.header-basket-popup .list');
  var basketlist = $('.header-basket-popup .list li');

  // Scroll to...
  var scrollTo = $('.scrollOneFullScreen a');

  // Validate form E-mail
  var patternValidatEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  hideCurrentPopup();

  $(".product-box-item .descr").equivalent();


  scrollTo.on('click', function() {
    var scroll_el = $(this).attr('href');
	    if ($(scroll_el).length != 0) {
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-0 }, 1000);
	    }
		return false;
	});


  if(basketlist.length > 2) {
    basketlistContaier.css({'padding-bottom' : '18px'});
  }

  var tabs = $('.tabs-line > li');
  var tabItemContent = $('.tab-item-content');

  hideTabsContent(2); // Параметр означает, что 1-й элемент контента изначально мы не будем скрывать


  /********* Popup's logic  *********/

  mainMenuBtn.on('click', function() {
    hideCurrentPopup(headerMenuContainer);
    headerMenuContainer.fadeIn(300);
  });


  closeMainMenuPopupBtn.on('click', function() {
    $(this).parent().parent().fadeOut(300);
  });


  searchBtn.on('click', function() {
    $(this).toggleClass('header-nav-box-search-btn_active')
    
    hideCurrentPopup(headerSearch);
    headerSearch.fadeToggle(300);
  });


  contactsPopupBtn.on('click', function() {
    hideCurrentPopup(headerContactsPopup);
    headerContactsPopup.fadeToggle(300);
  }); 


  // Open registration popup button
  registrationFormBtn.on('click', function() {
    $(this).toggleClass('header-userInfo-box-user_active');
    basketPopupBtn.removeClass('header-userInfo-box-basket_active');

    hideCurrentPopup(headerRegistrationPopup);
    headerRegistrationPopup.fadeToggle(300);
  });



  // Link logIn in registration popup
  loginLink.on('click', function(e) {
    e.preventDefault();

    hideCurrentPopup(headerLoginpopup);
    headerLoginpopup.fadeToggle(300);
  });


  // Link registration in login popup
  registrationLink.on('click', function(e) {
    hideCurrentPopup(headerRegistrationPopup);
    headerRegistrationPopup.fadeToggle(300);
  });


  basketPopupBtn.on('click', function() {
    $(this).addClass('active_popup');
    $(this).toggleClass('header-userInfo-box-basket_active');
    registrationFormBtn.removeClass('header-userInfo-box-user_active');

    hideCurrentPopup(headerBasketPopup);
    headerBasketPopup.fadeToggle(300);
  });


  newsletterSubscriptionBtn.on('click', function(e) {
    e.preventDefault();
    var errorEmptyField = $('.error-message').removeClass('hide');
    var errorNotCorrectlyEmail = $('.error-message-email');

    if(newsletterSubscriptionInput.val() == '') {
      errorEmptyField.removeClass('hide');
      errorNotCorrectlyEmail.addClass('hide');
    } else if(!patternValidatEmail.test(newsletterSubscriptionInput.val())) {
      errorEmptyField.addClass('hide');
      errorNotCorrectlyEmail.removeClass('hide');
    } else {
      errorEmptyField.addClass('hide');
      errorNotCorrectlyEmail.addClass('hide');

      // Submit logic...
    }
  });


  function hideCurrentPopup(selector) {
    keramicpopups.not(selector).not(selector).hide();
  };

  // hideCurrentPopup();


  //**********  Tabs logic...  **********\\

  tabs.on('click', function(event) {
    tabs.removeClass('active');
    $(this).addClass('active');
    showNextTab(event);
  });


  function hideTabsContent(activeTab) {
    for (var i = activeTab; i < tabItemContent.length; i++) {
      tabItemContent[i].classList.remove('showTab');
      tabItemContent[i].classList.add("hide");
    }
  }


  function showNextTab(event) {
    var target = event.target;
    for (var i = 0; i < tabs.length; i++) {
      if (target == tabs[i]) {
        showTabsContent(i);
      }
    }
  }


  function showTabsContent(currentTabContent){
    if (tabItemContent[currentTabContent].classList.contains('hide')) {
      hideTabsContent(0);
      tabItemContent[currentTabContent].classList.remove('hide');
      tabItemContent[currentTabContent].classList.add('showTab');
    }
  }



  // Sliders
  $('.slick-slider, .second-slick-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

  $('.add-to-basket').on('click', function() {
    addproducttoBasket($(this));
  });

  function addproducttoBasket(thisEl) {
    var parentBox = thisEl.parent().parent(); // find parent box
    var productName = parentBox.find('.descr').text(); // get product name
    var productCode = parentBox.find('span[data-productcode]').attr('data-productcode'); // get product code
    var productThumbnail = parentBox.find('.product-box-item-img img').attr('src');
    var productPrice = parentBox.find('.price').text();
    var productPriceCont = parentBox.find('.product-price');
    
    createListItemOfProduct(productThumbnail, productName, productCode, productPrice, productPriceCont);
    recountPrice();
    $('.basket-empty').addClass('hide');
    $('#placeOrderBtn').attr('disabled', false);
    $('#basketProductsCountCircle').removeClass('hide');

    var newLi = document.createElement('li');
    newLi.innerText =  '"'+ productName +  '"'+ 'добавлен в Вашу корзину покупок!';
    $('.basket-line-to-add-products').prepend(newLi);
    setTimeout(function() {
        newLi.remove(300);
    }, 2000);
  }


  var id = 0;
  var countOfProducts = 0;
  function createListItemOfProduct(productThumbnail, productName, productCode, productPrice, productPriceCont) {
    id++;
    countOfProducts++;
    $('#basketProductsCountCircle').text(countOfProducts);
    // createListItemOfProduct(productThumbnail);
    var newListItem = document.createElement('li');
    newListItem.classList.add('list-item');

    // create div with class list-item-thumbnail
    var listItemThumbnailBox = document.createElement('div');
    listItemThumbnailBox.classList.add('list-item-thumbnail');
    var img = document.createElement("IMG");
    img.src = productThumbnail;
    img.classList.add('img-responsive');
    listItemThumbnailBox.append(img);

    //Product price
    var productPriceBox = document.createElement('div');
    productPriceBox.classList.add('product-price');
    // productPriceBox.id = 'product-price' + id;
    productPriceBox.id = 'productPrice-' + id;
    productPriceBox.append(productPrice);

    // create buttons +/- of product
    var recounterContainer = document.createElement('div');
    var inc = document.createElement('button');
    var dec = document.createElement('button');
    var counter = document.createElement('span');

    recounterContainer.classList.add('recounter-container');
    inc.classList.add('increment-product-count');
    inc.innerHTML = '+';
    dec.innerHTML = '-';
    inc.id = 'productId-' + id;
    dec.classList.add('decriment-product-count');
    counter.classList.add('counter-of-product');
    counter.id = 'counter-of-product-' + id;
    counter.innerHTML = 1;
    recounterContainer.append(inc,counter,dec);


    // Description of product
    var descriptionBox = document.createElement('div');
    descriptionBox.classList.add('description-container');

    var prductNameBox = document.createElement('span');
    prductNameBox.classList.add('product-name');
    prductNameBox.append(productName);

    var productCodeBox = document.createElement('span');
    productCodeBox.classList.add('product-code');
    productCodeBox.append(productCode);

    descriptionBox.append(prductNameBox, productCodeBox);

    var buttonDeleteCurrentProduct = document.createElement('button');
    buttonDeleteCurrentProduct.classList.add('delete-product-btn');
    buttonDeleteCurrentProduct.id = 'delete-product-btn' + id;

    for(var i = 0; i <= 1; i++) {
      buttonDeleteCurrentProduct.append(document.createElement('span'));
    }

    newListItem.append(listItemThumbnailBox, recounterContainer, descriptionBox, productPriceBox, buttonDeleteCurrentProduct);

    $('.header-basket-popup .list').append(newListItem);

    // increm and Decr count of products
    var currentCountOfProduct = parseInt('1');
    var defaultPrice =  parseInt(productPrice);
    var currentPrice = defaultPrice;
    var incId = document.getElementById("productId-" + id);
    var productId = document.getElementById("productPrice-" + id);

    incId.addEventListener('click', function() {
      countOfProducts++;
      $('#basketProductsCountCircle').text(countOfProducts);
      currentCountOfProduct++;
      counter.innerHTML = currentCountOfProduct;

      currentPrice += defaultPrice; 
      productId.innerHTML = currentPrice + 'грн';
      recountPrice();
    });

    dec.addEventListener('click', function() {
      countOfProducts--;
      $('#basketProductsCountCircle').text(countOfProducts);
      if(currentCountOfProduct > 1) {
        currentCountOfProduct--;
        counter.innerHTML = currentCountOfProduct;

        currentPrice -= defaultPrice; 
        productPriceBox.innerHTML = currentPrice + 'грн';
      }
      recountPrice();
    });

    var delBtn = document.getElementById('delete-product-btn' + id);
    var counterOfProductCont = document.getElementById('counter-of-product-' + id);
    delBtn.addEventListener('click', function() {
      var countOfCurrentProductsInBasket = parseInt(counterOfProductCont.innerText);
      $(this).parent().remove();
      recountPrice();
      if($('.list-item').length == 0) {
        $('#totalPrice').text('0');
        $('.basket-empty').removeClass('hide');
        $('#placeOrderBtn').attr('disabled', true);
        $('#basketProductsCountCircle').addClass('hide');
      }

      countOfProducts -= countOfCurrentProductsInBasket;
      $('#basketProductsCountCircle').text(countOfProducts);

    });
  }

  function recountPrice() {
    var productPricesArr = [];
    var allPrices = $('.product-price');

    allPrices.each(function(index, value) {
    var val = value.innerText;
    var repVal = parseInt(val.replace(/\D+/g, ''));
    productPricesArr.push(repVal);
    var summ = productPricesArr.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    $('#totalPrice').text(summ);
   });
  }

});