var image = document.getElementsByClassName('mid-img');
new simpleParallax(image, {
	delay: 1.4,
	transition: 'cubic-bezier(0,0,0,0)'
});

window.addEventListener('scroll', getBodyScrollTop);

/*
function getBodyScrollTop()
{
    let mapCounter = document.querySelector('.map');
    mapCounter.textContent = '0/1';

    let counterText = mapCounter.textContent = '0/1'
    

switch(mapCounter.textContent){
    case "0/1":
        console.log("color is red");
        break;
    case "02":
        console.log("color is white");
        break;
    case "03":
        console.log("color is black");
        break;
    default:
        console.log("unknow color");
}

    var scrollPosition = window.scrollY * 4; 
    // scrollPosition = сколько пикселей прошло сверху
    var userScreenHeight = window.innerHeight;
    // userScreenHeight = сколько пикселей высота окна у юзера

    console.log(userScreenHeight);
    console.log(scrollPosition);
    

    if (scrollPosition > userScreenHeight) {
        mapCounter.textContent = '0/2';
    }
    else{
        mapCounter.textContent = '0/1';
    }
}  

*/

function getBodyScrollTop()
{
    let mapCounter = document.querySelector('.map');
    let heightMain = document.querySelector('.main').clientHeight;
    let heightAbout = document.querySelector('.about').clientHeight;
    var scrollPosition = window.scrollY; 
    heightAbout = heightAbout + heightMain;
    var userScreenHeight = window.innerHeight;
    scrollPosition = scrollPosition+userScreenHeight;
    // scrollPosition = сколько пикселей прошло сверху
   // var countAnime = 0;
  // if (countAnime==0){mapCounter.classList.add("class")}



    if (scrollPosition <= heightMain + 300) {
        mapCounter.textContent = 'main/';
        mapCounter.classList.add("firstPosition_Map");
        mapCounter.classList.remove("secondPosition_Map");
        mapCounter.classList.remove("thirdPosition_Map");
    } else if(scrollPosition > heightMain) {
        if(scrollPosition>heightAbout){
            mapCounter.textContent = 'news/';
            mapCounter.classList.remove("firstPosition_Map");
            mapCounter.classList.remove("secondPosition_Map");
            mapCounter.classList.add("thirdPosition_Map");
        }
        else{
            mapCounter.textContent = 'about/';
            mapCounter.classList.remove("firstPosition_Map");
            mapCounter.classList.add("secondPosition_Map");
            mapCounter.classList.remove("thirdPosition_Map");
        }
    }
   
    
   /* console.log(heightAbout);
    console.log(heightMain);
    console.log(scrollPosition); */
    console.log(heightMain);
    console.log(heightAbout);
    console.log(scrollPosition);
}



function offsetTop(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left +scrollLeft}
}



let calculate = document.getElementsByClassName('.numbers');

/* 3 класса

*/