const clearBtn = document.querySelector('#clear-btn');
const changeBtn = document.querySelector('#change-btn');
const gridContainer = document.querySelector('.grid');

function changeGrid(size) {
	gridContainer.innerHTML = '';

	for (let col = 0; col < size; col++) {
		let column = document.createElement('div');
		column.classList = 'column';
		column.id = `column${col + 1}`;
		for (let boxNum = 0; boxNum < size; boxNum++) {
			let box = document.createElement('div');
			box.classList = 'box';
			box.id = `box${col + 1}-${boxNum + 1}`;

			box.addEventListener('mouseover', event => {
				const target = event.target;
				target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() *256)}, ${Math.floor(Math.random() * 256)})`;
				let opacity = +target.style.opacity;
				if (!opacity) {
					target.style.opacity = '0.1';
				} else if (opacity !== 1) {
					opacity += 0.1;
					target.style.opacity = `${opacity}`;
				}
			});
			
			column.appendChild(box);
		}
		gridContainer.appendChild(column);
	}
}

function clearGrid() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(box => {
		box.style.backgroundColor = '';
		box.style.opacity = '';
	});
}

clearBtn.addEventListener('click', clearGrid);
changeBtn.addEventListener('click', () => {
	let size = +prompt('What size grid?');
	while (typeof size !== 'number' || size > 100 || size % 1 !== 0 || size <= 0) {
		size = +prompt('Needs to be a whole number between 1 and 100');
	}
	changeGrid(size);
});

changeGrid(16);
