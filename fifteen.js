/* Multiple Background */
// loads page
window.onload = function() {
	let row, col; /* X,Y positon i.e. row/column */
	let puzzlePiece;
	let checkboxLabel;
	let checkboxInput;
	
	$(document).ready(function() {
		let puzzleArea = document.getElementById("puzzlearea");
		
		puzzleBoxes = puzzleArea.getElementsByTagName("div");
		puzzlePiece = document.getElementsByClassName("puzzlepiece");
		row = 300;
		col = 300;
		
		document.getElementById('shufflebutton').addEventListener("click", function(){
			shuffle();
		 });
		 showCheckbox();
		 changeImage(); // randomly changes pictures on startup

		for(let i=0; i < puzzleBoxes.length; i++) { /* set tiles in correct positions */
			puzzleBoxes[i].className = "puzzlepiece";
	
			puzzleBoxes[i].style.left = (i % 4 * 100) + "px";
			puzzleBoxes[i].style.top = (parseInt(i / 4) * 100) + "px";
	
			puzzleBoxes[i].style.backgroundPosition = "-" + puzzleBoxes[i].style.left + " " + "-" + puzzleBoxes[i].style.top;
	
		}

        for(let x=0; x < puzzlePiece.length; x++) {
			$(puzzlePiece[x]).click(function(){
				if(movable($(this).css("left"), $(this).css("top") )){
					swap($(this));
				}
			});
			$(puzzlePiece[x]).hover(function(){
				if(movable($(this).css("left"), $(this).css("top") ) ){
					$(this).addClass("movablepiece");
				}
			},
			function(){
				$(this).removeClass("movablepiece");
			});
		}	
	});
	
	function swap(puzzleBox){
		let tempPos = $(puzzleBox).css("top");
		$(puzzleBox).css("top",col);
		col = parseInt(tempPos);
		tempPos = $(puzzleBox).css("left");
		$(puzzleBox).css("left",row);
		row = parseInt(tempPos);
	
	}
	
	function movable(posLeft, posTop){
		let result = false;
		posLeft = parseInt(posLeft);
		posTop = parseInt(posTop);
		if(posLeft + 100 === row && posTop === col){
			result = true;
		}
		else if(posLeft - 100 === row && posTop === col){
			result = true;

		}
		else if(posLeft === row && posTop + 100 === col){
			result = true;
		}
		else if(posLeft === row && posTop - 100 === col){
			result = true;
		}
		return result;
	}

	function shuffle(){
		if(checkboxInput.checked) {
				changeImage();
		}
	
		let lst = [];
		for(let j = 0; j < 100; j++){
			for(let x = 0; x < puzzlePiece.length; x++){
				if(movable(puzzlePiece[x].style.left, puzzlePiece[x].style.top)){
					lst.push([puzzlePiece[x],x]);
				}
			}
			if(lst.length != 0){
				let rndNum = Math.floor(Math.random() * lst.length);
				swap($(lst[rndNum]));
			}
		}
	}

	function changeImage() /*change image of background */
	{
		let listOfPics = ["background.jpg","background2.jpg","background3.jpg","background4.jpg"];
		let currentPic = puzzleBoxes[0].style.backgroundImage.slice(5, -2); 
		let rndNum = Math.floor(Math.random() * listOfPics.length);
	
		if (currentPic === listOfPics[rndNum]) 
		{
			while (currentPic === listOfPics[rndNum]) 
			{
				rndNum = Math.floor(Math.random() * listOfPics.length);	
			}
		}

		for (let x = 0; x < puzzleBoxes.length; x++)
		{
			puzzleBoxes[x].style.backgroundImage = "url('" + listOfPics[rndNum] +"')";
		}
	}

	function showCheckbox()
	{
        checkboxLabel = document.createElement('label');
		checkboxLabel.htmlFor = "checkbox1";
		checkboxLabel.appendChild(document.createTextNode('Select checkbox and then Shuffle to change image'));

		checkboxInput = document.createElement("input");
	    checkboxInput.type = "checkbox";
	    checkboxInput.id = "checkbox1";
	    		
		document.getElementById("controls").appendChild(checkboxLabel);
		document.getElementById("controls").appendChild(checkboxInput);
	}

};


 	
