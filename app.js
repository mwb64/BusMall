'use strict'
//Create an array to house pictures:
var marketProjectPics = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']
console.log(marketProjectPics);
var PicObjects = [];

//create pic objects TestMarketPics(name,location)
function TestMarketPics (name,picLocation){
  this.name = name;
  this.picLocation = picLocation;
  PicObjects.push(this);
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

//Randomizer that cycles throught the pictures
function picRandom(){
  return Math.floor(Math.random() * TestMarketPics[1]);
};
console.log(picRandom());

function locRandom(){
  return Math.floor(Math.random() * TestMarketPics[1]);
}
console.log(locRandom());

var randPicSection = document.getElementById('randPicSection');
var leftPic = document.getElementById('leftPic');
leftPic.setAttribute('src',leftPic);
var centerPic = document.getElementById('centerPic');
centerPic.setAttribute('src',centerPic );
var rightPic = document.getElementById('rightPic');
rightPic.setAttribute('src',rightPic);

function renderPics(){
  leftPic = picRandom;
  rightPic = picRandom;
  centerPic = picRandom;
}
renderPics();
