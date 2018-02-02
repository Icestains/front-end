var aDiv = document.getElementsByTagName('div');

for(var i=0;i<30;i++){
	document.body.innerHTML += '<div>'+i+'</div>';
}

var	len = aDiv.length;
for (var i = 0; i < len; i++) {
	// aDiv[i].style.left = i*50 + 'px';
	// aDiv[i].style.top =  i*50 + 'px';
	// if(i>5){
	// 	aDiv[i].style.top =  (len-1-i)*50 + 'px';
	aDiv[i].style.left = 10 + i%6*60 + 'px';
	aDiv[i].style.top = 100 + (i-i%6)/6*60 + 'px';
	}

