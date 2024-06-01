// Модуль дял работы с файлами
const fs = require('fs');
const path = require('path');

// Проверяем существует ли папка fs.existsSync('./путь');
function f01() {
    const pathToDir = './test';
    if (fs.existsSync(pathToDir)) {
        console.log('yes');
    } 
    else {
        console.log('no');
    }
}

// f01();

// Проверяем существует ли папка fs.existsSync('./путь');
function f02() {
    const pathToFile = './test/example.dat';
    if (fs.existsSync(pathToFile)) {
        console.log('yes');
    } 
    else {
        console.log('no');
    }
}

// f02() 

// Вычисление размера файла
function f03() {
    const pathToFile = './test/sting-desert-rose.mp3';
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo.size);
}
// f03()

// Имя и расширение файла
function f04() {
    const pathToFile = './test/sting-desert-rose.mp3';
    console.log(path.basename(pathToFile)); //sting-desert-rose.mp3
    console.log(path.dirname(pathToFile)); //./test
    console.log(path.extname(pathToFile));   //.mp3  
    console.log(path.parse(pathToFile)); //{
                                        //     root: '',
                                        //     dir: './test',
                                        //     base: 'sting-desert-rose.mp3',
                                        //     ext: '.mp3',
                                        //     name: 'sting-desert-rose'
                                        // }
}
// f04();

// Получаем файлы и папки в директории
function f05() {
    const pathToDir = './test';
    if (fs.existsSync(pathToDir)) {
        const allFiles = fs.readdirSync(pathToDir)
        console.log(allFiles);
        console.log('yes');
        let out = '';
        allFiles.forEach(item => out += item + '\n');
        console.log(out);
    } 
    else {
        console.log('no');
    }
}
// f05();

// Получить абсолютный путь
const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath); //путь к искомой папке
console.log(__dirname); //путь к текущей папке