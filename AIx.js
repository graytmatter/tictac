var player = 1;
var players = {a: "X", b: "O"};
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var win = [ [0, 1 , 2],[0, 3 , 6],[0, 4 , 8],
			[3, 4 , 5],[1, 4, 7],[2, 4, 6],
			[6, 7, 8],[2, 5, 8]];
var turnCount = 0;
var gameOver = false;
var setUpElements = function(){
	var list_items = document.querySelectorAll("div.box");
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].addEventListener("click", selectItem);
		list_items[i].addEventListener("mouseover", viewItem);
		list_items[i].addEventListener("mouseout", sViewItem);
	}
};

var viewItem = function( event ){
	if(!(this.classList.contains('selected')) && player === -1) {			
		this.innerHTML=(players.b);
		this.style.background="#ccc";

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
		if(player === 1){

		}
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
	var turnCount = 0;
	var gameOver = false;
	board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

var initialize = function(){
	setUpElements();
	document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;

console.log("JavaScript is alive!");
var checkWin = function(p){
	console.log("check")
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
	var array = ["","W", "!","" , "I", "!", "", "N", "!"];
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

var aboutToWin= function(p){
	for(var i in win){
		console.log(board[win[i][0]]);
		if(board[win[i][0]] === p && board[win[i][1]] === p){
			return board[win[i][2]];
		}else if(board[win[i][0]] === p && board[win[i][2]]){
			return board[win[i][2]];
		}else if(board[win[i][1]] === p && board[win[i][2]]){
			return board[win[i][1]];
		}
	}
};

var r4 = function(){
	return Math.floor(Math.random() * 6) + 1;
};
var AIi = function(){
		var r = r4();
		if(r === 1){
			AI = AI5;
			return 5;
		}else if(r === 2){
			AI = AI2;
			return 2;
		}else{
			AI = AI1;
			return 1;
		}
};

var AI1= function(){
};

var AId= function(){
	a = aboutToWin(player);
	b = aboutToWin(player* -1);
	if(a !== undefined){
		return a;
	}else if(b !== undefined){
		return b;
	}else{
		return d;
	}

};


var AI = AIi;

