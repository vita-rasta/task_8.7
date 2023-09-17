let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue =  minValue || 0;
maxValue = maxValue || 100;

minValue < -999 ? minValue = -999 : minValue;
minValue > 999 ? minValue = 999 : minValue;

maxValue < -999 ? maxValue = -999 : maxValue;
maxValue > 999 ? maxValue = 999 : maxValue

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;




document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    minValue =  minValue || 0;
    maxValue = maxValue || 100;

    minValue < -999 ? minValue = -999 : minValue;
    minValue > 999 ? minValue = 999 : minValue;

    maxValue < -999 ? maxValue = -999 : maxValue;
    maxValue > 999 ? maxValue = 999 : maxValue

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?\n\u{1F643}` : (phraseRandom === 2) ?
                `Может быть число ${answerNumber }? \n\u{1F601}`: (phraseRandom === 3) ?
                `Я думаю это число  ${answerNumber }? \n\u{1F642}`:
                `Да это легко! Вы загадали число ${answerNumber }`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?\n\u{1F643}` : (phraseRandom === 2) ?
                `Может быть число ${answerNumber }? \n\u{1F601}`: (phraseRandom === 3) ?
                `Я думаю это число  ${answerNumber }? \n\u{1F642}`:
                `Да это легко! Вы загадали число ${answerNumber }`;
        } 
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        answerField.innerText = (phraseRandom === 1) ?
        `Я всегда угадываю\n\u{1F60E}` : (phraseRandom === 2) ?
        `Это было не сложно\n\u{1F60E}` : 
        `Сегодня мой день\n\u{1F60E}`;
        gameRun = false;
    }
})

