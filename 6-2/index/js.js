var red=document.getElementById("red");
var pink=document.getElementById("pink");
var blue=document.getElementById("blue");
var yellow=document.getElementById("yellow");
red.onclick=function(){
	document.body.style .backgroundColor="red";
	localStorage.setItem("bgColor","red");
}
pink.onclick=function(){
	document.body.style .backgroundColor="pink";
	localStorage.setItem("bgColor","pink");
}
blue.onclick=function(){
	document.body.style .backgroundColor="blue";
	localStorage.setItem("bgColor","blue");
}
yellow.onclick=function(){
	document.body.style .backgroundColor="yellow";
	localStorage.setItem("bgColor","yellow");
}
if(window.localStorage){
	document.body.style.backgroundColor=localStorage.getItem("bgColor");
}

