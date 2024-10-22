const clearBtn = document.querySelector('#clear-btn');
const changeBtn = document.querySelector('#change-btn');
const gridContainer = document.querySelector('.grid');

function clearGrid() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.style.backgroundColor = 'white');
}

clearBtn.addEventListener('click', clearGrid);

for (let col = 0; col < 16; col++) {
	let column = document.createElement('div');
	column.classList = 'column';
	column.id = `column${col + 1}`;
	for (let boxNum = 0; boxNum < 16; boxNum++) {
		let box = document.createElement('div');
		box.classList = 'box';
		box.id = `box${boxNum + 1}`;
		
		box.addEventListener('mouseover', event => {
			const target = event.target;
			target.style.backgroundColor = 'black';
		});

		column.appendChild(box);
	}
	gridContainer.appendChild(column);
}


