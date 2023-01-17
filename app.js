const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HTMLParser = require('./HTMLParser');
const Writer = require('./Writer');
const PDFWriter = require('./PDFWriter');

const reader = new Reader();
const writer = new Writer();

const main = async () => {
    let data = await reader.Read('./users.csv');
    let dataProcess = Processor.Process(data);

    let users = new Table(dataProcess);
    const html = await HTMLParser.Parse(users);
    writer.Write(Date.now() + '.html', html);
    PDFWriter.WritePDF(Date.now() + '.pdf', html);
}

main();