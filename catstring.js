// JavaScript Document

//ARRAYS
var catOne = ['images/cat-1.gif', 'images/cat-2.gif','images/cat-3.gif','images/cat-4.gif'];
var catTwo = ['images/cat-5.gif', 'images/cat-6.gif','images/cat-7.gif','images/cat-8.gif'];
var catTre = ['images/cat-9.gif', 'images/cat-10.gif','images/cat-11.gif','images/cat-12.gif'];

//STRINGS
var display = document.getElementById('catShow1');
var display = document.getElementById('catShow2');
var display = document.getElementById('catShow3');
var counter = 0;
var v = object.style.animationPlayState;
object.style.animationPlayState='running|paused|initial|inherit'; 

//CATCYCLE
function nextPic1() {
	counter += 1;
	if (counter > catOne.length -1) {
	counter = 0;
	}
	document.getElementById('catShow1').src = catOne[counter];
	}

function nextPic2() {
	counter += 1;
	if (counter > catOne.length -1) {
	counter = 0;
	}
	document.getElementById('catShow2').src = catTwo[counter];
	}

function nextPic3() {
	counter += 1;
	if (counter > catOne.length -1) {
	counter = 0;
	}
	document.getElementById('catShow3').src = catTre[counter];
	}

//BUTTONS
function myPlayFunction() {
    document.getElementById("glitch1").style.WebkitAnimationPlayState = "running";
    document.getElementById("glitch1").style.animationPlayState = "running";
	}

function myPauseFunction() {
    document.getElementById("glitch1").style.WebkitAnimationPlayState = "paused";
    document.getElementById("glitch1").style.animationPlayState = "paused";
	}

//RANDOMCOLOUR
document.getElementById("WOWZA").onclick = function() {randomize()};

function randomize() {
  document.getElementById('play').style.backgroundColor = randomColors();
	}

function randomColors() {
  return '#' + Math.floor(Math.random() * 8453830).toString(16);
	}
