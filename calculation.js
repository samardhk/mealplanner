
function calculateBMI() {
    var feet = document.getElementById('feet').value;
    var inches = document.getElementById('inches').value || 0; // default to 0 if inches are not provided
    var pounds = document.getElementById('pounds').value;
    var age = document.getElementById('age').value;
    if (!feet || !pounds || !age) {
        alert("Please complete all fields.");
        return; 
    }
    
    var totalInches = (+feet * 12) + +inches; // convert feet to inches and add inches
    var heightInMeters = totalInches * 0.0254; // convert inches to meters

    var weightInKilos = pounds * 0.453592; // convert pounds to kilograms

    var bmi = weightInKilos / (heightInMeters * heightInMeters); // BMI formula
    bmi = bmi.toFixed(2); // rounding off to 2 decimal places

    document.getElementById('result').innerHTML = `Your BMI is ${bmi}`;
}


       
function TDEE() {
    var feet = document.getElementById('feet').value;
    var pounds = document.getElementById('pounds').value;
    var age = document.getElementById('age').value;
    var updatedvalue = document.getElementById("activity").value;
    var fitnessvalue = document.getElementById("fitness").value;
    if (!feet || !pounds || !age || !updatedvalue ||!fitnessvalue) {
        alert("Please complete all fields.");
        return; 
    }
    
    

    var inches = document.getElementById('inches').value || 0; 
    var totalInches = (+feet * 12) + +inches; 
    var heightInCM = totalInches * 2.54; 
    var weightInKilos = pounds * 0.453592;
    var bmr = (10 * weightInKilos) + (6.25 * heightInCM) - (5 * age) + 5;

    var sed = 1.2;
    var light = 1.375;
    var mod = 1.55;
    var very = 1.725;
    var sup = 1.9;

    

    
    var tdee;
    if (updatedvalue=="Sedentary" && fitnessvalue =="lose") {
        var tdee = (bmr * sed) - 500;
    } else if (updatedvalue=="Sedentary" && fitnessvalue =="gain") {
        var tdee = (bmr * sed) + 500;
    } else if (updatedvalue=="Sedentary" && fitnessvalue =="maintain") {
        var tdee = (bmr * sed);
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="lose") {
        var tdee = (bmr * light) - 500;
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="gain") {
        var tdee = (bmr * light) + 500;
    } else if (updatedvalue=="Lightly Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * light);
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="lose") {
        var tdee = (bmr * mod)-500;
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="gain") {
        var tdee = (bmr * mod)+ 500;    
    } else if (updatedvalue=="Moderately Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * mod);  
    } else if (updatedvalue=="Very Active" && fitnessvalue =="lose") {
        var tdee = (bmr * very) - 500;
    } else if (updatedvalue=="Very Active" && fitnessvalue =="gain") {
        var tdee = (bmr * very) + 500;
    } else if (updatedvalue=="Very Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * very);
    } else if (updatedvalue=="Super Active" && fitnessvalue =="lose") {
        var tdee = (bmr * sup) - 500;
    } else if (updatedvalue=="Super Active" && fitnessvalue =="gain") {
        var tdee = (bmr * sup) + 500;
    } else if (updatedvalue=="Super Active" && fitnessvalue =="maintain") {
        var tdee = (bmr * sup);
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
