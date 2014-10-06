var player = 1;
var players = {a: "X", b: "O"};
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var win = [ [0, 1 , 2],[0, 3 , 6],[0, 4 , 8],
			[3, 4 , 5],[1, 4, 7],[2, 4, 6],
			[6, 7, 8],[2, 5, 8]];
var turnCount = 0;
var setUpElements = function(){
	var list_items = document.querySelectorAll("div.box");
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].addEventListener("click", selectItem);
		list_items[i].addEventListener("mouseover", viewItem);
		list_items[i].addEventListener("mouseout", sViewItem);
	}
	document.getElementById("PlayO").addEventListener("click", playO);
};

var viewItem = function( event ){
	if(!(this.classList.contains('selected'))){
		if(player == 1){
			this.innerHTML=(players.a);
			this.style.background="#eee";
			this.style.color = "#aaa";
		}else{
			this.innerHTML=(players.b);
			this.style.background="#eee";
			this.style.color = "#555";
		}
	}
};
var sViewItem = function( event ){
	if(!(this.classList.contains('selected'))){
		this.innerHTML=("");
		this.style.background="white";
	}
};

var selectItem = function( event ){
	if(!(this.classList.contains("selected"))){
		this.classList.add("selected");
		if(player == "1"){
			this.innerHTML=(players.a);
			this.style.color="red";
		}else{
			this.innerHTML=(players.b);
			this.style.color="blue";
		}
		turnCount++;
		board[this.id[1]] = player;
		if(turnCount>=5){
			checkWin(player);
		}
		player *= -1;
		console.log(board);
		this.style.background="white";
	}
};


var resetButtonHandler = function() { 
	var list_items = document.querySelectorAll("div.box");
	player = 1;
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].innerHTML="";
		list_items[i].classList.remove("selected");
		list_items[i].style.color="black";
	}
	board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	turnCount = 0;
};

var initialize = function(){
	setUpElements();
	document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;

console.log("JavaScript is alive!");
var checkWin = function(p){
	console.log("check");
	if(check(p)){
		result(p);
	}
};
var check= function(p){
	for(var i in win){
		console.log(board[win[i][0]]);
		if(board[win[i][0]] === p &&
			board[win[i][1]] === p &&
			board[win[i][2]] === p
			){
			return true;
		}
	}
	return false;
};
var result= function(p){
	var list_items = document.querySelectorAll("div.box");
	var array = ["!!","W", "!!","" , "I", "!!", "!!", "N", "!!"];
	if(p > 0){
		array[3]="X's";
	}else{
		array[3]="O's";
	}
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].innerHTML=array[i];
		list_items[i].classList.add("selected");
		if(p === 1){
			list_items[i].style.color="red";
		}else{
			list_items[i].style.color="blue";
		}
	}	
};


var playO = function(){
	document.getElementsByTagName("script")[2].setAttribute("src", "AIo.js");
	console.log(document.getElementsByTagName("script")[2].getAttribute("src"));

};


