'use strict'
//Create an array to house pictures:
var marketProjectPics = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']
console.log(marketProjectPics);
var picObjects = [];
var randArr = [];

//create pic objects TestMarketPics(name,location)
function TestMarketPics (name,picLocation){
  this.name = name;
  this.picLocation = picLocation;
  picObjects.push(this);
  this.totalSelections = 0;
  this.totalViews = 0;
}

//create each picture objects
new TestMarketPics ('bag','img/bag.jpg');
new TestMarketPics ('banana','img/banana.jpg');
new TestMarketPics ('bathroom','img/bathroom.jpg');
new TestMarketPics ('boots','img/boots.jpg');
new TestMarketPics ('breakfast','img/breakfast.jpg');
new TestMarketPics ('bubblegum','img/bubblegum.jpg');
new TestMarketPics ('chair','img/chair.jpg');
new TestMarketPics ('cthulhu','img/cthulhu.jpg');
new TestMarketPics ('dog-duck','img/dog-duck.jpg');
new TestMarketPics ('dragon','img/dragon.jpg');
new TestMarketPics ('pen','img/pen.jpg');
new TestMarketPics ('pet-sweep','img/pet-sweep.jpg');
new TestMarketPics ('scissors','img/scissors.jpg');
new TestMarketPics ('shark','img/shark.jpg');
new TestMarketPics ('sweep','img/sweep.png');
new TestMarketPics ('tauntaun','img/tauntaun.jpg');
new TestMarketPics ('unicorn','img/unicorn.jpg');
new TestMarketPics ('usb','img/usb.gif');
new TestMarketPics ('water-can','img/water-can.jpg');
new TestMarketPics ('wine-glass','img/wine-glass.jpg');

var leftPic = document.getElementById('leftPic');
var centerPic = document.getElementById('centerPic');
var rightPic = document.getElementById('rightPic');

leftPic.addEventListener('click',picRandom);
rightPic.addEventListener('click',picRandom2);
centerPic.addEventListener('click',picRandom3);

function picRandom(){
  var randomizer = Math.floor(Math.random() * marketProjectPics.length);
  leftPic.src = picObjects[randomizer].picLocation;
};
picRandom();

function picRandom2(){
  var randomizer = Math.floor(Math.random() * marketProjectPics.length);
  centerPic.src = picObjects[randomizer].picLocation;
};
picRandom2();

function picRandom3(){
  var randomizer = Math.floor(Math.random() * marketProjectPics.length);
  rightPic.src = picObjects[randomizer].picLocation;
};
picRandom3();

// var leftPic = document.getElementById('leftPic');
// var centerPic = document.getElementById('centerPic');
// var rightPic = document.getElementById('rightPic');
//
//
// var leftImg;
// var centerImg;
// var rightImg;
//
// function render() {
//   var randomPic = function() {
//     for(var i = 0; i< picObjects.length;i++){
//       leftimg = picRandom()[i];
//       centerImg = picRandom()[i];
//       rightImg = picRandom()[i];
//       randArr.push(leftimg,centerImg,rightImg);
//       leftPic.setAttribute('scr',leftimg.picLocation);
//       centerPic.setAttribute('src',centerImg.picLocation);
//       rightPic.setAttribute('src',rightImg.picLocation);
//     }
//     randomPic()
//   }
// }
// render()
// // function renderPic(){
// //   for(var i = 0; i < TestMarketPics.length;i++){
// // var randPicSection = document.getElementById('randPicSection');
// // var leftPic = document.getElementById('leftPic');
// // leftPic.setAttribute('src',leftPic.picLocation[i]);
// // var centerPic = document.getElementById('centerPic');
// // centerPic.setAttribute('src',centerPic.picLocation[i]);
// // var rightPic = document.getElementById('rightPic');
// // rightPic.setAttribute('src',rightPic.picLocation[i]);
// // }
// // }
// // renderPic;
//
//
// // Randomizer that cycles throught the pictures
//
// //
// // function locRandom(){
// //   return Math.floor(Math.random() * TestMarketPics[1]);
// // }
//
//
//
// // function renderPics(){
// //   leftPic = picRandom;
// //   rightPic = picRandom;
// //   centerPic = picRandom;
// // }
// // renderPics();
