const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 3;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});


let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

let card = 
document.getElementById("card");

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
    balloonContainer.style.display = 'flex'
},9800)

let removeBall = setTimeout(function(){
    balloonContainer.style.opacity = 0.75
},11800)

let removeBal2 = setTimeout(function(){
    balloonContainer.style.opacity = 0.5
},12800)

let removeBall1 = setTimeout(function(){
    balloonContainer.style.display = 'none'
},13800)

let displayCard = setTimeout(function(){
    thirdCanvas.setAttribute("style","display:block") 
},12800)

let showCard1 = setTimeout(function(){
    card.style.display = 'block'
},14400)

let showCard2 = setTimeout(function(){
    card.style.opacity = 0.2
},14800)

let showCard3 = setTimeout(function(){
    card.style.opacity = 0.3
},15000)

let showCard4 = setTimeout(function(){
    card.style.opacity = 0.4
},15200)

let showCard5 = setTimeout(function(){
    card.style.opacity = 0.5
},15400)
let showCard6 = setTimeout(function(){
    card.style.opacity = 0.6
},15600)
let showCard7 = setTimeout(function(){
    card.style.opacity = 0.7
},15800)
let showCard8 = setTimeout(function(){
    card.style.opacity = 0.8
},16000)
let showCard9 = setTimeout(function(){
    card.style.opacity = 0.9
},16200)
let showCard10 = setTimeout(function(){
    card.style.opacity = 1
},16400)


(function() {
    function $(id) {
      return document.getElementById(id);
    }
    var index = 0;
    var flag = false;
  var aaa = $('card-inside'),
      bbb = $('btn')
      bbb.offsetTop
  aaa.onmousemove = function(e) {
    if((bbb.getBoundingClientRect().x <= e.clientX && e.clientX <= bbb.getBoundingClientRect().x + bbb.getBoundingClientRect().width) &&
        (bbb.getBoundingClientRect().y <= e.clientY && e.clientY <= bbb.getBoundingClientRect().y + bbb.getBoundingClientRect().height)){
          index++;
          bbb.style.marginTop = (Math.floor(Math.random() * (207))) + 'px';
          bbb.style.marginLeft = (Math.floor(Math.random() * (326 + 326)) -326) + 'px';
          if(flag && index == 4){
            alert('Nút này sản xuất ở Bình Dương đấy, độc lạ lắm :)))')
          }
          else if(index == 4){
            index = 0;
            flag = true;
            alert('Hong click được hỡ :)). \nNói chứ anh giỡn á :)))). Mong em hoàn tất hết công việc nhen. \nSinh Nhật Vui Vẻ ^^')
          }
    }
  }
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());


  