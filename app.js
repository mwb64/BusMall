'use strict'
//Create an array to house pictures:
var marketProjectPics = []
var clickBait = [];
var randPicArr = [];
var totalClicks = 0;

//create pic objects TestMarketPics(name,location)
function TestMarketPics (name,picLocation){
  this.name = name;
  this.picLocation = picLocation;
  this.totalSelections = 0;
  this.totalViews = 0;
    marketProjectPics.push(this);
}
//create each picture objects
var bag = new TestMarketPics ('bag','img/bag.jpg');
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

function picRandom(){
  return Math.floor(Math.random() * marketProjectPics.length);
}

var previousPicArray = [];

 function picRandomGen(){
   var currentPicArray = [];
   while(currentPicArray.length < 3){
     var randMarketPic = picRandom();
    console.log(randMarketPic);
     if(!previousPicArray.includes(randMarketPic) && !currentPicArray.includes(randMarketPic)){
       currentPicArray.push(randMarketPic);
     }
    }
   var leftPic1 = marketProjectPics[currentPicArray[0]];
   var centerPic1 = marketProjectPics[currentPicArray[1]];
   var rightPic1 = marketProjectPics[currentPicArray[2]];
   var leftPic = document.getElementById('leftPic');
   var centerPic = document.getElementById('centerPic');
   var rightPic = document.getElementById('rightPic');
   leftPic.src = leftPic1.picLocation;
   centerPic.src = centerPic1.picLocation;
   rightPic.src = rightPic1.picLocation;
    leftPic.alt = currentPicArray[0];
    centerPic.alt = currentPicArray[1];
    rightPic.alt = currentPicArray[2];
   previousPicArray = currentPicArray;
   console.log(previousPicArray);
   leftPic1.totalViews++;
   centerPic1.totalViews++;
   rightPic1.totalViews++;
  }
picRandomGen();
console.log(picRandomGen);

var clickAmounts = 25;
function clickHandle(event){
  picRandomGen();
  totalClicks++;
  var productArr = this.alt;
  marketProjectPics[productArr].totalSelections;
  if(clickAmounts === totalClicks){
    leftPic.removeEventListener('click',clickHandle);
    centerPic.removeEventListener('click',clickHandle);
    rightPic.removeEventListener('click',clickHandle);
    leftPic.src = " ";
    centerPic.src = " ";
    rightPic.src = " ";
  }
}

leftPic.addEventListener('click',clickHandle);
rightPic.addEventListener('click',clickHandle);
centerPic.addEventListener('click',clickHandle);
