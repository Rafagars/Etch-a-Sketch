let length = 16;

const grid = document.querySelector('#grid');

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

const change = document.querySelector('#change');

const buttons = document.querySelector('#buttons');

const p = document.createElement('p');

buttons.appendChild(p);

const input = document.createElement('input');

const inputButton = document.createElement('input');

p.appendChild(input);

p.appendChild(inputButton);

p.style.display = "none";


change.addEventListener('click', () => {

	input.type = "text";

	input.placeholder = "New size (n x n)";

	inputButton.type = "submit";

	inputButton.value = "Change";

	p.style.display = "block";
});




