function addNewValue(value) {//добавляем в инпут
    const res = document.getElementById('inputPlace');
    res.value += value;
}

function clearDisplay() { //очищаем инпут
    const res = document.getElementById('inputPlace');
    res.value = '';
}

function calculateResult() {//считаем
    const res = document.getElementById('inputPlace');
    const history = document.getElementById('history');
    
    try {
        const result = eval(res.value);
        history.append(res.value + ' = ' + result + '\n');
        res.value = result;
    } catch (error) {
        res.value = 'Ошибка';
    }
}
