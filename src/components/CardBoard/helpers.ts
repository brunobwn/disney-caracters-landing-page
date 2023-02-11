export type gridType = {
	rows: number;
	columns: number;
};

export function createPossiblePositions(grid: gridType) {
	const possibles = [];
	for (let i = 1; i <= grid.rows; i++) {
		for (let j = 1; j <= grid.columns; j++) {
			possibles.push([i, j]);
		}
	}
	return possibles;
}
