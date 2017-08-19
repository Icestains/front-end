var myVideo = document.getElementById("video1");
var oBtn1 = document.getElementById("button1");
var oBtn2 = document.getElementById("button2");
var oBtn3 = document.getElementById("button3");
var oBtn4 = document.getElementById("button4");

myVideo.autoplay=true;

if(myVideo.ended){
  myVideo.style.display="none";
  oBtn2.style.display="none";
  oBtn3.style.display="block";
  oBtn4.style.display="none";
}

function playPause(){
  if (myVideo.paused) {
    myVideo.play();
  }
  else {
    myVideo.pause();
  }
}

function stopPlay(){
  myVideo.pause();
  myVideo.style.display="none";
  oBtn2.style.display="none";
  oBtn3.style.display="block";
  oBtn4.style.display="none";
}

function rePlay(){
  myVideo.style.display="block";
  myVideo.play();
  oBtn2.style.display="block";
  oBtn3.style.display="none";
  oBtn4.style.display="block";
}

function showBtn(){
  if(oBtn1.style.display == "block"){
  oBtn1.style.display = "none";
  }
  else{
  oBtn1.style.display = "block";    
  }
}



function onoffVolume(){
  if(myVideo.volume){
    myVideo.volume='0';
    oBtn4.innerHTML="打开声音";
  }
  else{
    myVideo.volume='0.5';
    oBtn4.innerHTML="关闭声音";
    
  }
  
}

function checkEnded(){
  alert(myVideo.ended);
}
