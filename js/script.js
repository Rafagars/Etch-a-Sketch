
let length = 16;

const grid = document.querySelector('#grid');

function changeSize (){
	let size = prompt("Please enter new size between 8 and 42", "16");

	if (size != null && size >= 8 && size <= 42){

		length = size;

		while(grid.firstChild){

			grid.removeChild(grid.firstChild);

		}

		makeGrid(length);

	}
	
	else{

		alert("Invalid number");

	}

}

function makeGrid(length){

	for(let i = 0; i < length; i++){

			const p = document.createElement('p');

			grid.appendChild(p);

		for(let j = 0; j < length; j++){

			const square = document.createElement('span');

			square.style.display = "inline-block";

			square.style.width = "30px";

			square.style.height = "30px";

			square.style.boxSizing = "content-box";

			square.style.border = "0.5px solid black";

			square.style.backgroundColor = "white";

			square.addEventListener('mouseover', () => {

				square.style.backgroundColor = "black";

			});

			grid.appendChild(square);
		}

		p.style.margin = "-5px";
	}

}

makeGrid(length);