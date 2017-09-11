const range = function*(start, end) {
	while (start <= end)
		yield start++;
}

export const createRow = (rowId: number, fieldsCount: number) => {
	const rowModel = {};
	Array.from(range(0, fieldsCount)).forEach(field => {
		rowModel[`field${field}`] = `row-${rowId}:val${field}`;
	});
	return rowModel;
}

export const createData = (rowCount: number, fieldsCount: number) => {
	return {
		fields: Array.from(range(0, fieldsCount)).map(f => `field${f}`),
		data: Array.from(range(0, rowCount)).map(rowId => createRow(rowId, fieldsCount))
	}
}
