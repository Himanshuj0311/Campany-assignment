//Challenge 1: Food Delivery Application Price Calculator

function calculateTotalPrice(items, borough, userType, dayOfWeek, tip, promoCode) {
    // Menu Prices
    const menuPrices = {
        pizza: { small: 10, medium: 15, large: 20 },
        pasta: 20,
        salad: 15,
    };

    // Delivery Fees
    const boroughDeliveryFees = {
        Manhattan: 5,
        Brooklyn: 6,
        'The Bronx': 6,
        Queens: 4,
        'Staten Island': 10,
    };

    // Day of Week Discounts
    const weekdayDiscount = 2;
    const thursdayDiscount = 3;

    // Special Discounts
    const seniorDiscount = 2;
    const studentDiscount = 1;

    // Calculate base prices based on items
    let total = 0;
    items.forEach((item) => {
        if (item.item === 'pizza') {
            total += menuPrices.pizza[item.size] * item.quantity;
        } else {
            total += menuPrices[item.item] * item.quantity;
        }
    });

    // Apply discounts and promo codes
    if (promoCode === '30-OFF') {
        total *= 0.7; // 30% off
    } else if (promoCode === 'HALF-OFF-PIZZA') {
        total *= 0.5; // 50% off pizzas
    } else if (promoCode === 'FREEDELIVERY') {
        total -= calculateDeliveryFee(borough, dayOfWeek); // Free delivery
    }

    // Apply special discounts
    if (userType === 'senior') {
        total -= seniorDiscount;
    } else if (userType === 'student') {
        total -= studentDiscount;
    }

    // Apply day of week discounts
    if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday') {
        total -= weekdayDiscount;
    } else if (dayOfWeek === 'Thursday') {
        total -= thursdayDiscount;
    }

    // Calculate and apply tax
    const taxRate = 0.1;
    const tax = total * taxRate;
    total += tax;

    // Calculate total with gratuity
    if (tip.type === 'percentage') {
        total += (total - tax) * (tip.value / 100);
    } else {
        total += tip.value;
    }

    return total;
}

function calculateDeliveryFee(borough, dayOfWeek) {
    const boroughDeliveryFees = {
        Manhattan: 5,
        Brooklyn: 6,
        'The Bronx': 6,
        Queens: 4,
        'Staten Island': 10,
    };

    let fee = boroughDeliveryFees[borough];

    // Apply weekday discount
    if (dayOfWeek !== 'Thursday') {
        fee -= 2;
    }

    return fee > 0 ? fee : 0;
}

// Example call for the function
let totalPrice = calculateTotalPrice(
    [{ item: 'pizza', size: 'medium', quantity: 2 }, { item: 'pasta', quantity: 1 }],
    'Brooklyn',
    'student',
    'Wednesday',
    { type: 'percentage', value: 10 },
    'HALF-OFF-PIZZA'
);
console.log(`Total Price: $${totalPrice}`);


//Challenge 2: Compose Functions
function compose(pipeline) {
    return function (value) {
        return pipeline.reduce((result, func) => func(result), value);
    };
}

// Example 1
const pipeline1 = [
    (num) => num - 1,
    (num) => num * 10,
    (num) => `${num} as a string`
];

const composed1 = compose(pipeline1);
console.log(composed1(4)); // => `30 as a string`

// Example 2
const pipeline2 = [
    (str) => str.length,
    (length) => length * 100,
    (num) => num + 5
];

const composed2 = compose(pipeline2);
console.log(composed2('cat')); 


//Challenge 3: Missing Lowercase Letters
function letters(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordSet = new Set(word.split(''));
    return alphabet.split('').filter(letter => !wordSet.has(letter));
}

// Example 1
const word1 = 'abc';
console.log(letters(word1)); // => ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Example 2
const word2 = 'can';
console.log(letters(word2)); // => ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


//Challenge 4: Debug Morning Routine
'use strict';

class Student {

    constructor() {
        this.minutesLeft = 60;
    }

    digest() {
        console.log('digesting...');
        this.catchBus();
    }

    eat() {
        console.log('eating...');
        this.minutesLeft -= 30;
        this.digest();
    }

    catchBus() {
        console.log(`walking to the bus with ${this.minutesLeft} minutes left`);
        this.minutesLeft = 0;
    }

    showerAndBrushTeeth() {
        console.log('showering and brushing teeth...');
        this.minutesLeft -= 30;
    }

    wakeUp() {
        console.log('waking up...');
    }
}

morningRoutine();

function morningRoutine() {
    const student = new Student();

    student.wakeUp();
    student.showerAndBrushTeeth();
    const actionToTake = student.minutesLeft >= 30 ? () => student.eat() : () => student.catchBus();

    actionToTake();
}


//Challenge 5: One to Ten Timer
function oneToTen() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

oneToTen();
