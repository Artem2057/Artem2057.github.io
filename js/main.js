let h2 = document.getElementById('firstH2');
let sc2 = document.getElementById('section2');
let h2OffsetTop = h2.offsetTop;
let sc2OffsetTop = sc2.offsetTop;
let path = document.querySelectorAll('a.scrollTo');
let mainNav = document.getElementById("main-nav");
let allSection = document.querySelectorAll('section.default');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mainNav.classList.add('fixed-nav');
    } else {
        mainNav.classList.remove('fixed-nav');
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
