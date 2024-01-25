const centimeter_per_inch = 2.54;
const kilos_per_pound = 0.453592;
const daily_cal_gain_loss = 500
const activity_level_options = {
    sed: 1.2,
    light: 1.375,
    mod: 1.55,
    very: 1.725,
    sup: 1.9,

}

function calculateBMI() {
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value || 0; // default to 0 if inches are not provided
    const pounds = document.getElementById('pounds').value;
    const age = document.getElementById('age').value;
    if (!feet || !pounds || !age) {
        alert("Please complete all fields.");
        return; 
    }
    
    let totalInches = (+feet * 12) + +inches; // convert feet to inches and add inches
    let heightInMeters = totalInches * 0.0254; // convert inches to meters

    let weightInKilos = pounds * 0.453592; // convert pounds to kilograms

    let bmi = weightInKilos / (heightInMeters * heightInMeters); // BMI formula
    bmi = bmi.toFixed(2); // rounding off to 2 decimal places

    document.getElementById('result').innerHTML = `Your BMI is ${bmi}`;
}


       
function TDEE() {
    let feet = document.getElementById('feet').value;
    let pounds = document.getElementById('pounds').value;
    let age = document.getElementById('age').value;
    let updatedvalue = document.getElementById("activity").value;
    let fitnessvalue = document.getElementById("fitness").value;
    if (!feet || !pounds || !age || !updatedvalue ||!fitnessvalue) {
        alert("Please complete all fields.");
        return; 
    }
    
    

    let inches = document.getElementById('inches').value || 0; 
    let totalInches = (+feet * 12) + +inches; 
    const heightInCM = totalInches * centimeter_per_inch; 
    const weightInKilos = pounds * kilos_per_pound;
    let bmr = (10 * weightInKilos) + (6.25 * heightInCM) - (5 * age) + 5;

    var tdee;
    if (updatedvalue=="Sedentary" && fitnessvalue =="lose") {
        var tdee = (bmr * activity_level_options.sed) - daily_cal_gain_loss;
    } else if (updatedvalue=="Sedentary" && fitnessvalue =="gain") {
        var tdee = (bmr * activity_level_options.sed) + daily_cal_gain_loss;
    } else if (updatedvalue=="Sedentary" && fitnessvalue =="maintain") {
        var tdee = (bmr * activity_level_options.sed);
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="lose") {
        var tdee = (bmr * activity_level_options.light) - daily_cal_gain_loss;
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="gain") {
        var tdee = (bmr * activity_level_options.light) + daily_cal_gain_loss;
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * activity_level_options.light);
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="lose") {
        var tdee = (bmr * activity_level_options.mod)- daily_cal_gain_loss;
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="gain") {
        var tdee = (bmr * activity_level_options.mod)+ daily_cal_gain_loss;    
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * activity_level_options.mod);  
    } else if (updatedvalue=="Very Active" && fitnessvalue =="lose") {
        var tdee = (bmr * activity_level_options.very) - daily_cal_gain_loss;
    } else if (updatedvalue=="Very Active" && fitnessvalue =="gain") {
        var tdee = (bmr * activity_level_options.very) + daily_cal_gain_loss;
    } else if (updatedvalue=="Very Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * activity_level_options.very);
    } else if (updatedvalue=="Super Active" && fitnessvalue =="lose") {
        var tdee = (bmr * activity_level_options.sup) - daily_cal_gain_loss;
    } else if (updatedvalue=="Super Active" && fitnessvalue =="gain") {
        var tdee = (bmr * activity_level_options.sup) + daily_cal_gain_loss;
    } else if (updatedvalue=="Super Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * activity_level_options.sup);
    }
    tdee = tdee.toFixed();
    document.getElementById('result2').innerHTML = `Your estimated caloric intake is ${tdee} calories per day`;

    document.getElementById('result3').innerHTML = `Your estimated protein intake per day is ${((tdee*0.4)/4).toFixed()} grams`;
    document.getElementById('result4').innerHTML = `Your estimated carbohydrate intake per day is ${((tdee*0.3)/4).toFixed()} grams`;
    document.getElementById('result5').innerHTML = `Your estimated fat intake per day is ${((tdee*0.3)/9).toFixed()} grams`;


    
}

//tommorow we implement the lifestyle aspect ex:lose gain maintain +500 -500
// spit out example macros pro carb fat
// add another file which will give customized workouts based on ur workout goals
