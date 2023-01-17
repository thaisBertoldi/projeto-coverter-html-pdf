class Processor {
    static Process(data) {
        const dataSplitRow = data.split('\r\n');
        let arrayRows = [];
        dataSplitRow.forEach(row => {
            const rowSplit = row.split(';');
            arrayRows.push(rowSplit);
        })
        return arrayRows;
    }
}

module.exports = Processor;