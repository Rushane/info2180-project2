
// loads page
window.onload = function()
{
	puzzleArea = document.getElementById("puzzlearea");
	puzzleBoxes = puzzleArea.getElementsByTagName("div");

	for(let i=0; i < puzzleBoxes.length; i++) {
		puzzleBoxes[i].className = "puzzlepiece";

		puzzleBoxes[i].style.left = (i % 4 * 100) + "px";
		puzzleBoxes[i].style.top = (parseInt(i / 4) * 100) + "px";
	}
 	
};