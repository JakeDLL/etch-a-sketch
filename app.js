const gridContainer = document.querySelector('.grid');
for (let col = 0; col < 16; col++) {
	let column = document.createElement('div');
	column.classList = 'column';
	column.id = `column${col + 1}`;
	for (let boxNum = 0; boxNum < 16; boxNum++) {
		let box = document.createElement('div');
		box.classList = 'box';
		box.id = `box${boxNum + 1}`;
		column.appendChild(box);
	}
	gridContainer.appendChild(column);
}
