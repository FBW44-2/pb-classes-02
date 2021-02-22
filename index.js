// January 1, 1970 00:00:00 UTC -> just an arbitrary date
// The Epoch
const date = new Date();
const date1 = new Date('2021-02-12');
const date2 = new Date(2021, 1, 14);
console.log(date, date.getDate(), date.getFullYear(), date.getDay(), date.getMonth());
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];
const weekdayIndex = date.getDay();
console.log(weekdays[weekdayIndex]);

// weekdays: 0-6
// 0-Sunday
// 1-Monday
// 2-Tuesday
//...
// 6-Saturday

// months: 0-11
// 0-January
// 1-Feb
// 2-March
// ...
// 11-December

console.log(date1);
console.log(new Date('hello'));
console.log(Date.now()); // using a static method

// We can compare date like regular numbers > < 
// console.log(date2);

// Formatting with the Intl object
// currencies
const currencyFormatted = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});
console.log(currencyFormatted.format(120000));
// dates
const dateFormatter = new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'short',
    timeStyle: 'short'
});

console.log(dateFormatter.format(date1));

// Array, Object, String, Number

// new Array()
const list = [];
console.log(Array.isArray(list));

// Object
const defaultOptions = {
    color: 'pink',
    width: 100,
    height: 100,
    taste: 'choco'
};

const customOptions = {
    taste: 'vanilla'
};

const finalOptions = {
    ...defaultOptions,
    ...customOptions
};

const finalOptions2 = Object.assign({}, defaultOptions, customOptions);
console.log(finalOptions, finalOptions2);

// function getSomething(name, age = 13, jobTitle) {
//     console.log(name, age, jobTitle);
// }

function getSomething(options) {
    const defaultOptions = { name: 'Jane', age: 23, jobTitle: 'employee' };
    const finalOptions = {
        ...defaultOptions,
        ...options
    };

    console.log(finalOptions.name);
}

getSomething({ name: 'Jane', jobTitle: 'lawyer', random: 'Foo' });

// Closures
function greeting(dayTime) {
    let greetSentence;

    if (dayTime === 'morning') {
        greetSentence = 'Good morning';
    }

    if (dayTime === 'noon') {
        greetSentence = 'Good day';
    }

    if (dayTime === 'evening') {
        greetSentence = 'Good evening';
    }

    if (dayTime === 'night') {
        greetSentence = 'Good night';
    }

    return function (name) {
        console.log(`${greetSentence}, ${name}`);
    }
}

function createFormatter(locale) {
    let currency;

    if (locale === 'de-DE') {
        currency = '€';
    }

    return function (num) {
        return `${num} ${currency}`;
    }
}

const currencyFormatter = createFormatter('de-DE');
currencyFormatter(1234); // 1234 €

const morningGreeter = greeting('morning');
morningGreeter('Jane');

const noonGreeter = greeting('noon');
noonGreeter('Jane');