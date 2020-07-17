// feetToMile
// 5280 feet equals to 1 mile
function feetToMile(feet){
    if (feet < 0) {
        return "Distance can't be negative."
    }else if (!feet){
        return "Please pass in a value."
    }
    return feet / 5280;
}

// woodCalculator
// 1 chair = 1, 1 table = 3, 1 bed = 5
function woodCalculator(chair,table,bed){
    if (chair < 0 || table < 0 || bed < 0) {
        return "Given value cannot be negative."
    }else if (!chair || !table || !bed) {
        return "All values must be given."
    }
    return chair*1 + table*3 + bed*5;
}

// brickCalculator
// first 10 floor = 15 feet, 11 - 20 = 12 feet, 20+ = 10 feet
// Per feet 1000 brick
function brickCalculator(floor){
    if (floor <= 0 || !floor) {
        return "Please provide a valid value."
    }
    var firstTenFloor = 10*15*1000;
    var secondTenFloor = 10*12*1000;
    if (floor <= 10){
        return floor*15*1000;
    }else if (floor > 10 && floor <=20){
        return firstTenFloor + (floor - 10)*12*1000;
    }else{
        return firstTenFloor + secondTenFloor + (floor - 20)*10*1000;
    }
}

// tinyFriend
function tinyFriend(array){
    if (!array || array.length <= 0 || typeof array != "object"){
        return "Please provide a valid array."
    }
    var tiny = array[0];
    var tinyLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if(array[i].length < tinyLength){
            tinyLength = array[i].length;
            tiny = array[i];
        }
    }
    return tiny;
}
