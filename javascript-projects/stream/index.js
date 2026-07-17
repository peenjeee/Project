import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 100
});

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        const data = readableStream.read();
        if (data) {
            writableStream.write(data);
        }
    } catch (error) {
        console.log('Gagal membaca berkas');
    }
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('Selesai');
});