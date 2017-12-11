var myVideo = document.getElementById("video1");
var oBtn1 = document.getElementById("button1");
var oBtn2 = document.getElementById("button2");
var oBtn3 = document.getElementById("button3");
var oBtn4 = document.getElementById("button4");


function playPause(){
  if (myVideo.paused) {
    rePlay();
  }
  else {
    stopPlay();
  }
  // showBtn();
}

function stopPlay(){
  myVideo.pause();
  oBtn1.style.display = "block";
  oBtn2.style.display="none";
  oBtn3.style.display="block";
  // oBtn4.style.display="none";
}

function rePlay(){
  myVideo.play();
  myVideo.style.display="block";
  oBtn1.style.display = "none";
  oBtn2.style.display="block";
  oBtn3.style.display="none";
  // oBtn4.style.display="block";
}

function showPlayBtn(){

  oBtn1.style.display = "block";    
  
}
function disPlayBtn(){
  if (myVideo.paused) {
    oBtn1.style.display = "block";    
    
  } else{
    oBtn1.style.display = "none";

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
  // return myVideo.paused; 
  alert(myVideo.paused);
}
