'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('HGN15', '2', 800);
createBooking('LH1234', 2);
createBooking('LH1234', 5);






const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247868545684,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 247868545684) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//  Is the same as doing
const flightnum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.random() * 100000000;
};

newPassport(jonas);
checkIn(flight, jonas);



const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// Call Back Function
const high5 = function () {
  console.log('High-5!');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hey!');

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//  Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');



const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(158, 'Michael Cicutto');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work in STRICT MODE!!!!!!!!!
// book(123, 'Mike Cicutto');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEw(23, 'Steven Williams');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jonas Schmedtmann');
bookEw23('Martha Cooper');

//Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//  Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(150));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const roomTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      promt(
        `${this.question}\n${this.options}\n${this.options.join('n')}
        \n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
  },
};
poll.registerNewAnswer();

// Check Back Later
