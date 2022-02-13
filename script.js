//배너 setInterval로 자동이동
const visualDiv = document.querySelector('#visual')
const visualUlElement = document.querySelector('#visualul')
const visualContents = document.querySelectorAll('.bannerimg')
const visualPrev = document.querySelector('#prebtn')
const visualNext = document.querySelector('#nextbtn')
const visualStop = document.querySelector('#stopbtn')

const curIndexElement = document.querySelector('#currentIndex')
const indexBar = document.querySelectorAll('.bar')

const visualSpeed = 500;
const visualWidth = parseInt(window.innerWidth);
const visualSlideLen = visualContents.length;

let bannerIndex = 0;
curIndexElement.innerHTML = 1;
indexBar[0].classList.add('on');


const interval = setInterval(banner, 2000);

function banner() {
    if (bannerIndex >= 4) { bannerIndex = 0 }
    //배너넘김
    visualUlElement.style.transition = visualSpeed + "ms";
    visualUlElement.style.transform = "translate3d(-" + (visualWidth * bannerIndex) + "px, 0px, 0px)";
    //숫자
    curIndexElement.innerHTML = bannerIndex + 1

    //막대기
    for (i = 0; i < 4; i++) {
        indexBar[i].classList.remove('on');
    }
    indexBar[bannerIndex].classList.add('on');

    bannerIndex++;
}


visualNext.addEventListener('click', () => {
    bannerIndex++;
    if (bannerIndex > 3) { bannerIndex = 0 }
    visualUlElement.style.transition = visualSpeed + "ms";
    visualUlElement.style.transform = "translate3d(-" + (visualWidth * bannerIndex) + "px, 0px, 0px)";
    curIndexElement.innerHTML = bannerIndex + 1;
    for (i = 0; i < 4; i++) {
        indexBar[i].classList.remove('on');
    }
    indexBar[bannerIndex].classList.add('on');

    clearInterval(interval)
    const interval = setInterval(banner, 2000);
})

visualPrev.addEventListener('click', () => {
    bannerIndex--;
    if (bannerIndex < 0) { bannerIndex = 3 }
    visualUlElement.style.transition = visualSpeed + "ms";
    visualUlElement.style.transform = "translate3d(-" + (visualWidth * bannerIndex) + "px, 0px, 0px)";
    curIndexElement.innerHTML = bannerIndex + 1;
    for (i = 0; i < 4; i++) {
        indexBar[i].classList.remove('on');
    }
    indexBar[bannerIndex].classList.add('on');

    clearInterval(interval)
    const interval = setInterval(banner, 2000);
})

visualStop.addEventListener('click', () => {
    clearInterval(interval);
    console.log("stop")
})




















//헤더 스크롤 시 배경색 넣기
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight / 2) {
        header.setAttribute("class", "background");
    } else {

        header.setAttribute("class", "");
    }
});







// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 200;
const saElementList = document.querySelectorAll('.sa');


const saFunc = function () {
    for (const element of saElementList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}



window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);









//menu
const hbg = document.querySelector('#hbgdiv')
const hbgchk = document.querySelector('#navi-flag');
const circle = document.querySelector('#nvg')
let flg = 0;
hbg.addEventListener('click', () => {
    if (flg == 0) {
        circle.setAttribute('class', 'on')
        flg = 1;
    }
    else {
        circle.setAttribute('class', '')
        flg = 0;
    }
})





// Scroll Animation2 : section4 배경이미지확대 (sa, 스크롤 애니메이션)
const bgTriggerMargin = 400;
const bgElement = document.querySelector('#bg');


const bgFunc = function () {
    if (window.scrollY >= absoluteTop4 - parseInt(window.innerHeight / 2)) {
        bgElement.classList.remove('scrl');
    }
}

window.addEventListener('load', bgFunc);
window.addEventListener('scroll', bgFunc);






//Top버튼 상단이동

const topBtn = document.querySelector('#topbtn')
topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" })
})



//우측 네비버튼 이동
//네비버튼 DOM
const nav1Btn = document.querySelector('#nav1')
const nav2Btn = document.querySelector('#nav2')
const nav3Btn = document.querySelector('#nav3')
const nav4Btn = document.querySelector('#nav4')
const nav5Btn = document.querySelector('#nav5')
//이동할 div DOM
const nav1go = document.querySelector('#section1')
const nav2go = document.querySelector('#section2')
const nav3go = document.querySelector('#section3')
const nav4go = document.querySelector('#section4')
const nav5go = document.querySelector('#section5')
//이동할 div의 절대좌표구하기
const absoluteTop1 = window.pageYOffset + nav1go.getBoundingClientRect().top;
const absoluteTop2 = window.pageYOffset + nav2go.getBoundingClientRect().top;
const absoluteTop3 = window.pageYOffset + nav3go.getBoundingClientRect().top + parseInt(window.innerHeight / 2);
const absoluteTop4 = window.pageYOffset + nav4go.getBoundingClientRect().top + parseInt(window.innerHeight / 2);;
const absoluteTop5 = window.pageYOffset + nav5go.getBoundingClientRect().top + parseInt(window.innerHeight / 2);;

//각각의 네비버튼에 클릭이벤트 주기
nav1Btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: absoluteTop1, behavior: "smooth" })
})

nav2Btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: absoluteTop2, behavior: "smooth" })
})

nav3Btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: absoluteTop3, behavior: "smooth" })
})

nav4Btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: absoluteTop4, behavior: "smooth" })
})

nav5Btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: absoluteTop5, behavior: "smooth" })
})







//뉴스배너 이동
const news = document.querySelector('#news');
const newsUl = document.querySelector('#newsul');
const newsContents = document.querySelectorAll('#newscontent');
const newsPrev = document.querySelector('#newsprev');
const newsNext = document.querySelector('#newsnext');
const slideSpeed = 300;
const slideWidth = window.innerWidth * 0.35;
const slideLen = newsContents.length;

let curIndex = 0;

newsNext.addEventListener('click', () => {
    if (curIndex == 5) { curIndex = 0 }
    curIndex++;
    newsUl.style.transition = slideSpeed + "ms";
    newsUl.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
})

newsPrev.addEventListener('click', () => {
    if (curIndex == 0) { curIndex = 4 }
    curIndex--;
    newsUl.style.transition = slideSpeed + "ms";
    newsUl.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
})




//scroll side navi
//absoluteTop1~5 길이 이용
const sideNaviElement = document.querySelector('#nav-right');


const sidenaviFunc = function () {
    if (window.scrollY < absoluteTop2 && window.scrollY >= 0) {
        sideNaviElement.setAttribute('class', '')
        sideNaviElement.setAttribute('class', 'sec1')
    }
    else if (window.scrollY < absoluteTop3 && window.scrollY >= absoluteTop2) {
        sideNaviElement.setAttribute('class', '')
        sideNaviElement.setAttribute('class', 'sec2')
    }
    else if (window.scrollY < absoluteTop4 && window.scrollY >= absoluteTop3) {
        sideNaviElement.setAttribute('class', '')
        sideNaviElement.setAttribute('class', 'sec3')
    }
    else if (window.scrollY < absoluteTop5 && window.scrollY >= absoluteTop4) {
        sideNaviElement.setAttribute('class', '')
        sideNaviElement.setAttribute('class', 'sec4')
    }
    else {
        sideNaviElement.setAttribute('class', '')
        sideNaviElement.setAttribute('class', 'sec5')
    }
}



window.addEventListener('load', sidenaviFunc);
window.addEventListener('scroll', sidenaviFunc);

