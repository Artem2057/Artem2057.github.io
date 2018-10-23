let h2 = document.getElementById('firstH2');
let sc3 = document.getElementById('section2');
let h2OffsetTop = h2.offsetTop;
let sc2OffsetTop = sc3.offsetTop;
let path = document.querySelectorAll('a.scrollTo');

let sec1 = document.querySelector('#section1');
let sec2 = document.querySelector('#section2');
let sec3 = document.querySelector('#section3');
let sec4 = document.querySelector('#section4');
let sec5 = document.querySelector('#section5');
let allSection = document.querySelectorAll('section.default');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("main-nav").classList.add('fixed-nav');
    } else {
        document.getElementById("main-nav").classList.remove('fixed-nav');
    }
    if(document.body.scrollTop >= h2OffsetTop - 70 || document.documentElement.scrollTop >= h2OffsetTop - 70) {
        h2.classList.add('fixed-style');
    } else {
        h2.classList.remove('fixed-style');
    }
    if(document.body.scrollTop > sc2OffsetTop - 200 || document.documentElement.scrollTop > sc2OffsetTop - 200) {
        h2.classList.remove('fixed-style');
    }
});


path.forEach((el, i) => {
    path[i].addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let attr = path[i].getAttribute('href').slice(1);
        let sec = allSection[i].getAttribute('id');
        let secs =  allSection[i];
        if(attr.length != 0) {
            let settInt = setInterval(()=> {
                if(attr === sec ) {
                    if(document.documentElement.scrollTop < secs.offsetTop) {
                        document.documentElement.scrollTop += 40;
                        if(document.documentElement.scrollTop >= secs.offsetTop) {
                            clearInterval(settInt);
                        }
                    }  
                    if(document.documentElement.scrollTop >= secs.offsetTop) {
                        document.documentElement.scrollTop -= 40;
                        if(document.documentElement.scrollTop <= secs.offsetTop) {
                            clearInterval(settInt);
                        }
                    }
                }
            }, 10);
        }
    }); 
});
