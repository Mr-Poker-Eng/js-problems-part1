// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


// mile to km

function mileToKm(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const mile = mileToKm(2);
// console.log(mile);
// 2 mile = ^? km


//km to mile

function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const kilo = kiloToMile(5);
// console.log(kilo);

// 5 km = ^? mile