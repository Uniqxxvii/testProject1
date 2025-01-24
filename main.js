const day = Math.floor(Math.random() * 30) +1;
const month = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'November', 'December'];
const year = Math.floor(Math.random() * 101) + 1900;

function getRandomMonth(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const randomMonth = getRandomMonth(month);

const getMessage = (obj1, obj2, obj3) => {
    return 'Today is ' + obj1 + ' of ' + obj2 + ' ' + obj3;
}

const result = getMessage(day, randomMonth, year);
console.log(result);