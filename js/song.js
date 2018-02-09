// JavaScript Document

window.onload=function()
	{
		
		var player=document.getElementById("player");
		
		
	}
	function play(d,j){
		
		player.src=d;
		player.play();
		document.getElementById("m1").innerHTML=j;
		
	}
	function play2(j){
		player.play();
		document.getElementById("m1").innerHTML=j;
		
	}
	
	function iframe1(d,j){
		document.getElementById(d).src =j;
	}
		