/*
Problem 1------ Conversion from Radian to Degree
*/


function radianToDegree (radian) {
    const degreeInitialValue = radian * (180 / 3.1416);
    const degreeFinalValue = degreeInitialValue.toFixed(2)
    
    return parseFloat(degreeFinalValue);
}

const degree = radianToDegree(57)
console.log(degree)

// problem 3 oilPrice

function oilPrice (diesel, petrol, octane) {
   const dieselPrice = diesel * 114;
   const petrolPrice = petrol * 130;
   const octanePrice = octane * 135;
   
   const sum = dieselPrice + petrolPrice + octanePrice;

   return sum
}

const price = oilPrice(1, 1, 1)
console.log (price)




// problem-4 public bus fare

function publicBusFare (person) {

    // variables
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusFare = 250;
    let peopleRemainingAfterBus = 0
    let peopleRemainingAfterMicrobus = 0;
    let spentMoney = 0
    // if there is people less than 50 
    if (person < 50 && person > 0) {
         spentMoney = person * publicBusFare;     
    }
    // if there is people more than 50 
    else if (person > 50) {
         peopleRemainingAfterBus = person % busCapacity;

        if (peopleRemainingAfterBus < 11){
        //    sum of transportation cost 
            spentMoney = peopleRemainingAfterBus * 250;    
        }

        else if (peopleRemainingAfterBus >= 11){
            peopleRemainingAfterMicrobus = peopleRemainingAfterBus % microBusCapacity;
            // sum of public transportation cost
            spentMoney = peopleRemainingAfterMicrobus * 250;
        }
        
        
    }
    return spentMoney
};
const moneyNeeded = publicBusFare (10)
console.log(moneyNeeded)


// problem-5 varify my friend 
const friend1 = {
    name: 'abul',
    friend: 'babul'
}

const friend2 = {
    name: 'babul',
    friend: 'abdul'
}

function isBestFriend (person1, person2) {
    if (person1.friend === person2.name && person1.name === person2.friend){
        
        return true;
    }
    else {
        return false
    }
}

const friend = isBestFriend (friend1, friend2)
console.log(friend)